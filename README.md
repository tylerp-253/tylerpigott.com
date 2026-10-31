# tylerpigott.com

Static site built with [Astro](https://astro.build) and hosted on Cloudflare.

## How content works

- **Blog posts:** one Markdown file per post in `src/content/blog/`. Set `draft: true` to keep a post off the live site.
- **Homepage (speaking page):** one self-contained file, `src/speaking/index.html` (markup, styles and scripts together). Images are in `public/img/`. Settings you might change are searchable in that file: `QUOTE_MODE`, `POSTER`, `AB_TEST`, `FORM_ENDPOINT`, `ANALYTICS SLOT`.
- **Privacy note:** `public/privacy.html`.
- **Other pages:** `src/pages/`. Each `.astro` file becomes a URL (`about.astro` → `/about/`).
- **Blog design:** header, footer and styles in `src/layouts/Base.astro` and `src/styles/global.css`, matched to the homepage.

## Publishing

Push to `main` and Cloudflare builds and deploys automatically. Other branches get their own preview URL.

## Cloudflare build settings

- Build command: `npm run build`
- Output directory: `dist`
- Node version: pinned to 24 in `.node-version` (Astro 7 needs Node 22.23.4 or newer)

## Speaking inquiry form

The form sends to Tyler@pigottfam.com through FormSubmit. The first real submission on the live domain triggers a one-time activation email (check spam). Click it, then send one test inquiry before sharing the link.

## Local preview

```
npm install
npm run dev
```
