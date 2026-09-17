import fs from 'fs'; import zlib from 'zlib';

export function decode(file){
  const buf = fs.readFileSync(file); let off=8; const idat=[]; let w,h,bd,ct;
  while(off<buf.length){
    const len=buf.readUInt32BE(off); const type=buf.toString('ascii',off+4,off+8);
    const data=buf.subarray(off+8,off+8+len);
    if(type==='IHDR'){w=data.readUInt32BE(0);h=data.readUInt32BE(4);bd=data[8];ct=data[9];}
    if(type==='IDAT') idat.push(data);
    if(type==='IEND') break;
    off+=12+len;
  }
  const raw=zlib.inflateSync(Buffer.concat(idat));
  const ch = ct===6?4:ct===2?3:ct===0?1:0;
  if(!ch||bd!==8) throw new Error('unsupported');
  const stride=w*ch; const out=Buffer.alloc(w*h*ch); let p=0;
  for(let y=0;y<h;y++){
    const ft=raw[p++]; const line=raw.subarray(p,p+stride); p+=stride;
    const cur=out.subarray(y*stride,(y+1)*stride); const prev=y?out.subarray((y-1)*stride,y*stride):Buffer.alloc(stride);
    for(let x=0;x<stride;x++){
      const a=x>=ch?cur[x-ch]:0, b=prev[x], c=x>=ch?prev[x-ch]:0; let v=line[x];
      if(ft===1)v+=a; else if(ft===2)v+=b; else if(ft===3)v+=(a+b)>>1;
      else if(ft===4){const pp=a+b-c,pa=Math.abs(pp-a),pb=Math.abs(pp-b),pc=Math.abs(pp-c);v+=(pa<=pb&&pa<=pc)?a:(pb<=pc?b:c);}
      cur[x]=v&255;
    }
  }
  // normalize to RGBA
  if(ch===4) return {w,h,data:out};
  const rgba=Buffer.alloc(w*h*4);
  for(let i=0,j=0;i<w*h;i++){
    if(ch===3){rgba[j++]=out[i*3];rgba[j++]=out[i*3+1];rgba[j++]=out[i*3+2];rgba[j++]=255;}
    else {const g=out[i];rgba[j++]=g;rgba[j++]=g;rgba[j++]=g;rgba[j++]=255;}
  }
  return {w,h,data:rgba};
}

function crc32(buf){
  let c, table=crc32.t;
  if(!table){table=crc32.t=new Int32Array(256);
    for(let n=0;n<256;n++){c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;table[n]=c;}}
  let crc=-1; for(let i=0;i<buf.length;i++) crc=(crc>>>8)^table[(crc^buf[i])&255];
  return (crc^-1)>>>0;
}
function chunk(type,data){
  const len=Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td=Buffer.concat([Buffer.from(type,'ascii'),data]);
  const crc=Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len,td,crc]);
}
export function encode({w,h,data},file){
  const stride=w*4; const raw=Buffer.alloc((stride+1)*h);
  for(let y=0;y<h;y++){
    raw[y*(stride+1)]=4; // paeth
    const cur=data.subarray(y*stride,(y+1)*stride);
    const prev=y?data.subarray((y-1)*stride,y*stride):Buffer.alloc(stride);
    for(let x=0;x<stride;x++){
      const a=x>=4?cur[x-4]:0, b=prev[x], c=x>=4?prev[x-4]:0;
      const pp=a+b-c,pa=Math.abs(pp-a),pb=Math.abs(pp-b),pc=Math.abs(pp-c);
      const pr=(pa<=pb&&pa<=pc)?a:(pb<=pc?b:c);
      raw[y*(stride+1)+1+x]=(cur[x]-pr)&255;
    }
  }
  const ihdr=Buffer.alloc(13); ihdr.writeUInt32BE(w,0); ihdr.writeUInt32BE(h,4);
  ihdr[8]=8; ihdr[9]=6; ihdr[10]=0; ihdr[11]=0; ihdr[12]=0;
  const out=Buffer.concat([
    Buffer.from([0x89,0x50,0x4E,0x47,0x0D,0x0A,0x1A,0x0A]),
    chunk('IHDR',ihdr),
    chunk('IDAT',zlib.deflateSync(raw,{level:9})),
    chunk('IEND',Buffer.alloc(0)),
  ]);
  fs.writeFileSync(file,out);
  return out.length;
}

export function bbox(img,thresh=6){
  const {w,h,data}=img; let x0=w,y0=h,x1=-1,y1=-1;
  for(let y=0;y<h;y++) for(let x=0;x<w;x++){
    if(data[(y*w+x)*4+3]>thresh){ if(x<x0)x0=x; if(x>x1)x1=x; if(y<y0)y0=y; if(y>y1)y1=y; }
  }
  return {x0,y0,x1,y1};
}
export function crop(img,x0,y0,x1,y1){
  const w=x1-x0+1,h=y1-y0+1; const out=Buffer.alloc(w*h*4);
  for(let y=0;y<h;y++) img.data.copy(out,y*w*4,((y+y0)*img.w+x0)*4,((y+y0)*img.w+x0+w)*4);
  return {w,h,data:out};
}
export function pad(img,px,py){
  const w=img.w+px*2,h=img.h+py*2; const out=Buffer.alloc(w*h*4);
  for(let y=0;y<img.h;y++) img.data.copy(out,((y+py)*w+px)*4,y*img.w*4,(y+1)*img.w*4);
  return {w,h,data:out};
}
// high-quality box downsample with premultiplied alpha
export function resize(img,tw,th){
  const {w,h,data}=img; const out=Buffer.alloc(tw*th*4);
  const sx=w/tw, sy=h/th;
  for(let y=0;y<th;y++){
    const ya=y*sy, yb=(y+1)*sy;
    for(let x=0;x<tw;x++){
      const xa=x*sx, xb=(x+1)*sx;
      let r=0,g=0,b=0,a=0,wt=0;
      for(let j=Math.floor(ya);j<Math.min(h,Math.ceil(yb));j++){
        const fy=Math.min(yb,j+1)-Math.max(ya,j);
        for(let i=Math.floor(xa);i<Math.min(w,Math.ceil(xb));i++){
          const fx=Math.min(xb,i+1)-Math.max(xa,i);
          const f=fx*fy; const o=(j*w+i)*4; const al=data[o+3]/255;
          r+=data[o]*al*f; g+=data[o+1]*al*f; b+=data[o+2]*al*f; a+=al*f; wt+=f;
        }
      }
      const o=(y*tw+x)*4;
      if(a>0){ out[o]=Math.round(r/a); out[o+1]=Math.round(g/a); out[o+2]=Math.round(b/a); }
      out[o+3]=Math.round(255*a/wt);
    }
  }
  return {w:tw,h:th,data:out};
}
export function blank(w,h,[r,g,b,a]=[0,0,0,0]){
  const data=Buffer.alloc(w*h*4);
  for(let i=0;i<w*h;i++){data[i*4]=r;data[i*4+1]=g;data[i*4+2]=b;data[i*4+3]=a;}
  return {w,h,data};
}
export function composite(dst,src,ox,oy){
  for(let y=0;y<src.h;y++){
    const dy=y+oy; if(dy<0||dy>=dst.h) continue;
    for(let x=0;x<src.w;x++){
      const dx=x+ox; if(dx<0||dx>=dst.w) continue;
      const s=(y*src.w+x)*4, d=(dy*dst.w+dx)*4;
      const sa=src.data[s+3]/255; if(!sa) continue;
      const da=dst.data[d+3]/255; const oa=sa+da*(1-sa);
      for(let k=0;k<3;k++) dst.data[d+k]=Math.round((src.data[s+k]*sa+dst.data[d+k]*da*(1-sa))/oa);
      dst.data[d+3]=Math.round(oa*255);
    }
  }
  return dst;
}
export function roundMask(img,radius){
  const {w,h,data}=img;
  for(let y=0;y<h;y++) for(let x=0;x<w;x++){
    const cx=Math.min(x+0.5,w-x-0.5), cy=Math.min(y+0.5,h-y-0.5);
    const dx=radius-cx, dy=radius-cy;
    if(dx>0&&dy>0){
      const d=Math.sqrt(dx*dx+dy*dy);
      const cov=Math.max(0,Math.min(1,radius-d+0.5));
      const o=(y*w+x)*4; data[o+3]=Math.round(data[o+3]*cov);
    }
  }
  return img;
}

/* Palette (colour-type 3) and gray+alpha (4) PNGs, normalised to RGBA. */
export function decodeAny(file) {
  const buf = fs.readFileSync(file);
  let off = 8, w, h, bd, ct, plte, trns;
  const idat = [];
  while (off < buf.length) {
    const len = buf.readUInt32BE(off), type = buf.toString("ascii", off + 4, off + 8);
    const d = buf.subarray(off + 8, off + 8 + len);
    if (type === "IHDR") { w = d.readUInt32BE(0); h = d.readUInt32BE(4); bd = d[8]; ct = d[9]; }
    if (type === "PLTE") plte = Buffer.from(d);
    if (type === "tRNS") trns = Buffer.from(d);
    if (type === "IDAT") idat.push(d);
    if (type === "IEND") break;
    off += 12 + len;
  }
  if (bd !== 8) throw new Error("unsupported bit depth " + bd);
  if (ct === 6 || ct === 2 || ct === 0) return decode(file);
  const ch = ct === 3 ? 1 : 2;
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const stride = w * ch, out = Buffer.alloc(w * h * ch);
  let p = 0;
  for (let y = 0; y < h; y++) {
    const ft = raw[p++], line = raw.subarray(p, p + stride); p += stride;
    const cur = out.subarray(y * stride, (y + 1) * stride);
    const prev = y ? out.subarray((y - 1) * stride, y * stride) : Buffer.alloc(stride);
    for (let x = 0; x < stride; x++) {
      const a = x >= ch ? cur[x - ch] : 0, b = prev[x], c = x >= ch ? prev[x - ch] : 0;
      let v = line[x];
      if (ft === 1) v += a; else if (ft === 2) v += b; else if (ft === 3) v += (a + b) >> 1;
      else if (ft === 4) { const pp = a + b - c, pa = Math.abs(pp - a), pb = Math.abs(pp - b), pc = Math.abs(pp - c); v += (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c); }
      cur[x] = v & 255;
    }
  }
  const rgba = Buffer.alloc(w * h * 4);
  for (let i = 0; i < w * h; i++) {
    const o = i * 4;
    if (ct === 3) { const k = out[i]; rgba[o] = plte[k * 3]; rgba[o + 1] = plte[k * 3 + 1]; rgba[o + 2] = plte[k * 3 + 2]; rgba[o + 3] = trns && k < trns.length ? trns[k] : 255; }
    else { const g = out[i * 2]; rgba[o] = rgba[o + 1] = rgba[o + 2] = g; rgba[o + 3] = out[i * 2 + 1]; }
  }
  return { w, h, data: rgba };
}
