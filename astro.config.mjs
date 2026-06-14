// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Set BASE_PATH to '/your-repo-name/' when deploying to github.io/your-repo-name/
const base = process.env.BASE_PATH || '/';

// @see https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.digmamedical.com',
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
