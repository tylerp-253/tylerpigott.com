# tylerpigott.com

Static site built with [Astro](https://astro.build) and hosted on Cloudflare.

## How content works

- **Blog posts:** one Markdown file per post in `src/content/blog/`. Set `draft: true` to keep a post off the live site.
- **Pages:** `src/pages/`. Each `.astro` file becomes a URL (`about.astro` → `/about/`).
- **Design:** shared header, footer and styles live in `src/layouts/Base.astro` and `src/styles/global.css`.

## Publishing

Push to `main` and Cloudflare builds and deploys automatically. Other branches get their own preview URL.

## Cloudflare build settings

- Build command: `npm run build`
- Output directory: `dist`

## Local preview

```
npm install
npm run dev
```
