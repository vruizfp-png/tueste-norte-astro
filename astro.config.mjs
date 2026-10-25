import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://vruizfp-png.github.io',
  base: '/tueste-norte-astro',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});