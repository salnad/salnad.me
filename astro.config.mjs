// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://salnad.me',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap({
      // Configuration options
      filter: (page) => !page.includes('/404'), // exclude 404 page
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ]
});