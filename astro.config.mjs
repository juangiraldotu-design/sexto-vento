import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const productionSite = process.env.PUBLIC_SITE_URL || 'https://sextovento.com';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://juangiraldotu-design.github.io' : productionSite,
  base: isGitHubPages ? '/sexto-vento' : '/',
  integrations: [tailwind()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
