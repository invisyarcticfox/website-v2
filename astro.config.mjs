// @ts-nocheck
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'preserve',
  },
  trailingSlash: 'never',
  site: 'https://invisyarcticfox.uk',
  adapter: cloudflare({
    imageService: 'compile'
  }),
  server: {
    port: 4321,
    open: '/'
  }
});