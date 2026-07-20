import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://boladefogo.com.br',
  integrations: [sitemap()],
});
