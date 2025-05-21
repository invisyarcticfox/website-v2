// @ts-nocheck
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import sitemap from '@astrojs/sitemap'


// https://astro.build/config
export default defineConfig({
  build: { format: 'preserve' },
  trailingSlash: 'never',
  site: 'https://invisyarcticfox.uk',

  server: { port: 4321, open: '/' },

  redirects: {
    '/blender': {
      status: 308,
      destination: '/animations'
    }
  },

  adapter: cloudflare({ imageService: 'compile' }),
  integrations: [ sitemap() ]
})