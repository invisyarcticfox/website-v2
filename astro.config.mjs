// @ts-nocheck
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'preserve',
  },
  trailingSlash: 'never',
  site: 'https://invisyarcticfox.uk',
  server: {
    port: 4321,
    open: '/'
  }
});