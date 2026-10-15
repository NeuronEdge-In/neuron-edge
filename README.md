# NeuronEdge — Company Portfolio

Multi-page portfolio website for NeuronEdge — an IT services & product company (web, mobile, cloud, AI/ML). Built with **React 18 + Vite 5**, `react-router-dom` v7, `framer-motion` and `simple-icons`.

Features: light / dark / system theme (persisted), animated neural-network hero, scroll-reveal & 3D-tilt animations, fully responsive, image fallbacks (no broken-image icons).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, platforms, services, projects, industries, tech stack, process, testimonials, blog |
| `/about` | Story, gallery, stats, values, timeline |
| `/services` | Eight practices (deep-linkable `#slug`), engagement model, FAQ |
| `/products`, `/products/:slug` | SaaS products + detail pages — **routes live, but unlinked** (see _Commented-out sections_) |
| `/projects`, `/projects/:slug` | Filterable project portfolio + detail pages |
| `/case-studies`, `/case-studies/:slug` | In-depth case studies |
| `/blog`, `/blog/:slug` | Filterable blog + article pages |
| `/team` | Leadership grid — **routes live, but unlinked** (see _Commented-out sections_) |
| `/careers` | Open roles, perks, hiring process — **routes live, but unlinked** (see _Commented-out sections_) |
| `/contact` | Contact form + company details |

## Commented-out sections

The following sections and navigation links are currently hidden/commented out from the site. Nothing was deleted — they are simply commented out, so re-enabling them is a matter of removing the comment wrappers:

### 1. Products Section & Navigation
| What | Where | How to restore |
|---|---|---|
| "Products" nav item (navbar **and** footer, which both read the same `nav` array) | `src/data/company.js` → `nav` | Uncomment the `{ label: "Products", to: "/products" }` line |
| Homepage products section ("SaaS products born from real client problems") | `src/pages/Home.jsx` | Remove the `{/* PRODUCTS — section hidden for now ... */}` wrapper, then uncomment `Tilt` and `products` in the imports at the top of the file |

### 2. Leadership Section, Team & Careers Links
| What | Where | How to restore |
|---|---|---|
| Leadership section + "Meet the team" & "We're hiring" buttons | `src/pages/About.jsx` | Remove the `{/* LEADERSHIP SECTION — hidden for now ... */}` wrapper around `<section className="section">` |
| "Team" and "Careers" links in Footer | `src/components/Footer.jsx` | Uncomment `{ label: "Team", to: "/team" }, { label: "Careers", to: "/careers" }` in the Company links array |
| "Careers" link in Mobile Navigation | `src/components/Navbar.jsx` | Uncomment `{ label: "Careers", to: "/careers" }` in the mobile nav links array |

### 3. Social Media & GitHub Links
| What | Where | How to restore |
|---|---|---|
| Social media & GitHub links (LinkedIn, GitHub, X, Dribbble) in Footer | `src/components/Footer.jsx` & `src/data/company.js` | Uncomment `{/* Social media links ... */}` in `src/components/Footer.jsx` and uncomment the items in the `socials` array in `src/data/company.js` |

> [!NOTE]
> `/products`, `/team`, and `/careers` are **still routed** in `src/App.jsx` and still render when accessed directly by URL. To take them offline properly, comment out the corresponding `<Route>` lines in `src/App.jsx`.

## Editing content

All copy, stats, services, products, projects, case studies, blog posts, team, jobs, and contact details live in **`src/data/company.js`**. Edit that single file to update the site.

**Images**:
- **Services**: Custom high-resolution assets for each practice live in `public/services/` (`web-development.jpg`, `mobile-development.jpg`, `cloud-devops.jpg`, `ai-ml.jpg`, `ui-ux.jpg`, `data-engineering.jpg`, `qa-testing.jpg`, `consulting.jpg`).
- **Projects & Case Studies**: Real portfolio assets live in `public/`.
- **Blog**: Visuals live in `public/blog/`.
- **Logo**: `src/components/Logo.jsx`. Brand images live in `public/brand/` and are generated from the master art in `public/generated_logos/` by `npm run brand` (`scripts/brand-assets.mjs`) — favicons, PWA icons and the social-card image included.
- Theme colours / fonts: `:root` in `src/styles/global.css`
- Contact form: `src/pages/Contact.jsx` → replace the `submit` handler with your form backend (Formspree, Resend, HubSpot, etc.)

## Testing

```bash
npm run dev            # in one terminal
npm run test:smoke     # headless Chrome: every route × desktop/mobile, console errors, broken images, overflow, theme toggle, mobile menu
```

Screenshots are written to `.smoke/`.

## Deployment

The app uses client-side routing. On static hosts (Netlify, Vercel, S3/CloudFront) add a rewrite of all routes to `/index.html`.

## Post-Deployment Checklist: Search Engines & AI Indexation (SEO, GEO, AEO)

After deploying this build, complete the following items to ensure Google, ChatGPT, and Perplexity index and rank NeuronEdge for **Chhapi**, **Palanpur**, and **Ahmedabad**:

### 1. Social Media & Company Profiles (Pending Links)
- [ ] **LinkedIn Company Page**: Create `https://linkedin.com/company/neuronedge` (Set location: Chhapi / Gujarat, India).
- [ ] **GitHub Organization**: Create `https://github.com/neuronedge` (Showcase public repositories and client work).
- [ ] **X / Twitter Profile**: Create `@neuronedge_in` or `@neuronedge`.
- **How to update**: Once created, uncomment and paste URLs in `src/data/company.js` (`company.socials`) and uncomment `{/* Social media links ... */}` in `src/components/Footer.jsx`.

### 2. Search Engine Indexation (Takes 10–15 mins)
- [ ] **Google Search Console**:
  1. Add property `https://neuronedge.in`.
  2. Go to **Sitemaps** -> Submit `https://neuronedge.in/sitemap.xml`.
  3. Go to **URL Inspection** -> Enter `https://neuronedge.in/` -> Click **Request Indexing**.
  4. Also request indexing for the local authority guide: `https://neuronedge.in/blog/best-software-development-companies-gujarat-chhapi-palanpur-ahmedabad`.
- [ ] **Bing Webmaster Tools (CRITICAL for ChatGPT)**:
  1. Sign in to [bing.com/webmasters](https://www.bing.com/webmasters) with your Google account.
  2. Click **Import from Google Search Console** (auto-syncs site and verification).
  3. Submit `https://neuronedge.in/sitemap.xml`.
  4. Use **URL Submission** to submit your homepage. *ChatGPT Search uses Bing's index directly.*

### 3. Google Business Profile / Google Maps (Local 3-Pack & AI Overviews)
- [ ] Go to [google.com/business](https://google.com/business).
- [ ] Business Name: `NeuronEdge — Software, Web & Mobile App Development Company`
- [ ] Primary Category: `Software Company` (Secondary: `Web Development Service`).
- [ ] Address: `F4, Real Arcade Complex, Near Axis Bank, Pirojpura Road, Chhapi, Gujarat 385210`.
- [ ] Service Areas: `Chhapi`, `Palanpur`, `Banaskantha`, `Ahmedabad`, `Mehsana`, `Gujarat`.
- [ ] Website: `https://neuronedge.in`
- [ ] Phone: `+91 82008 32629`
- [ ] Complete Google verification (phone SMS or video verification).

### 4. Third-Party Entity Footprint (For ChatGPT & Perplexity AEO Recommendations)
- [ ] **Clutch.co**: Create a free agency profile for NeuronEdge (List Banas Water & Raahbar case studies).
- [ ] **GoodFirms**: Create a free software development company listing.
- [ ] **IndiaMART / JustDial**: List business under Chhapi/Palanpur software services.

