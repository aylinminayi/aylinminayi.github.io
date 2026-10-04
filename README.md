# Aylin Minayi — Developer Portfolio

A one-page "pink developer scrapbook" portfolio built with **React + Vite**.

## Run it locally

Requires [Node.js](https://nodejs.org) 20 or newer (LTS recommended).

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the production build
```

## Project structure

```
src/
  data/          ← ALL portfolio content lives here (edit these to update the site)
    profile.js       name, tagline, contact links, about, education, languages
    experience.js    jobs / internships
    projects.js      projects (featured: true → big case-study layout)
    activities.js    OzU Racing + clubs
    skills.js        grouped skills
    certificates.js  certificate cards
    navigation.js    nav items (ids must match section ids)
  sections/      ← one component per page section
  components/    ← reusable UI (Nav, Lightbox, ScrapShot, Terminal, ArchitectureDiagram…)
  hooks/         ← small React hooks
  styles/        ← tokens.css (colours, fonts) + section stylesheets
  assets/images/ ← optimised, privacy-checked images
```

### Adding things later

- **New project:** add an object to `src/data/projects.js`. Projects without `featured: true`
  appear as cards under InsightDesk automatically.
- **New experience:** add an object to `src/data/experience.js`.
- **New certificate:** export the certificate as an image, save a `-thumb.webp` (≈720px wide)
  and a full `.webp` (≈1600px wide) in `src/assets/images/certificates/`, then add an entry
  to `src/data/certificates.js`. Crop or blur certificate IDs / QR codes first.
- **New skill:** add it to the right group in `src/data/skills.js`.

## Images & privacy

- InsightDesk screenshots were extracted directly from the internship report (not full pages).
  The contact email on the dashboard and all IP addresses in the Kubernetes screenshot are
  redacted. The VM-list and API-key figures were intentionally not used.
- The certificate ID (AI Builder) is cropped and the QR code (CyberStart) is blurred.
- `references/` (CV, report, certificate PDFs) and the original photo are git-ignored —
  they contain private information and must never be published.

## Deploying

The build uses relative asset paths (`base: './'` in `vite.config.js`), so the same build works on:

- **Vercel:** import the GitHub repo → framework "Vite" → deploy. No settings needed.
- **GitHub Pages:** push to `main`, then in the repo go to *Settings → Pages → Source: GitHub
  Actions*. The workflow in `.github/workflows/deploy.yml` builds and publishes automatically.
  (Naming the repo `aylinminayi.github.io` gives the URL `https://aylinminayi.github.io/`.)
