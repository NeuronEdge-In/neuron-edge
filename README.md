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
| `/team` | Leadership grid |
| `/careers` | Open roles, perks, hiring process |
| `/contact` | Contact form + company details |

## Commented-out sections

**Products is currently hidden from the site.** Nothing was deleted — two blocks are commented out, so re-enabling is a matter of removing the comment wrappers:

| What | Where | How to restore |
|---|---|---|
| "Products" nav item (navbar **and** footer, which both read the same `nav` array) | `src/data/company.js` → `nav` | Uncomment the `{ label: "Products", to: "/products" }` line |
| Homepage products section ("SaaS products born from real client problems") | `src/pages/Home.jsx` | Remove the `{/* PRODUCTS — section hidden for now ... */}` wrapper, then uncomment `Tilt` and `products` in the imports at the top of the file |

Note that `/products` and `/products/:slug` are **still routed** in `src/App.jsx` and still render. They're simply not linked from anywhere, so the pages remain reachable by direct URL. To take them offline properly, comment out those two `<Route>` lines as well.

## Editing content

All copy, stats, services, products, projects, case studies, blog posts, team, jobs, and contact details live in **`src/data/company.js`**. Edit that single file to update the site.

**Images** are placeholders (`picsum.photos` photos, `i.pravatar.cc` avatars) — replace the `image` / `img` URLs in `company.js` with your own (local files in `public/` work too). Brand logos come from the `simple-icons` package (`src/components/Brands.jsx`).

- Logo: `src/components/Logo.jsx`. Brand images live in `public/brand/` and are generated from the master art in `public/generated_logos/` by `npm run brand` (`scripts/brand-assets.mjs`) — favicons, PWA icons and the social-card image included.
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
