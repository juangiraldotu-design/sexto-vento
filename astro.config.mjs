import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: process.env.GITHUB_PAGES ? 'https://juangiraldotu-design.github.io' : undefined,
  base: process.env.GITHUB_PAGES ? '/sexto-vento' : '/',
  integrations: [tailwind()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});

