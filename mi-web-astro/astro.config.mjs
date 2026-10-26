// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import node from '@astrojs/node';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),

  vite: {
    cacheDir: './.vite-cache',

    server: {
      strictPort: true,
      allowedHosts: ['.trycloudflare.com']
    },

    plugins: [tailwindcss()]
  },

  server: {
    host: true,
    port: 4321
  },

  integrations: [react(), mdx()]
});