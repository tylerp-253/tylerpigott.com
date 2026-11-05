import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tylerpigott.com',
  integrations: [sitemap({ lastmod: new Date(), filter: (page) => !page.includes('/404') })],
});
