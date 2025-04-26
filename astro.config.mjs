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
  server: {
    port: 4321,
    open: '/'
  },
  adapter: cloudflare({
    imageService: 'compile'
  }),
  redirects: {
    '/blender': {
      status: 308,
      destination: '/animations'
    }
  }
});