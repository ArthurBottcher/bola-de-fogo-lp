import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://boladefogo.com.br',
  integrations: [
    sitemap({
      serialize(item) {
        return {
          ...item,
          lastmod: new Date().toISOString(),
          changefreq: 'weekly',
          priority: 1.0,
        };
      },
    }),
  ],
});
