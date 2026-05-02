import { defineConfig } from 'astro/config';

// For GitHub Pages project site deployment we set both `site` (canonical root)
// and `base` (repository sub-path). Internal links must use import.meta.env.BASE_URL.
export default defineConfig({
  site: 'https://annalopatina-psy.github.io/website',
  base: '/website',
  integrations: [],
  build: {
    format: 'directory'
  }
});
