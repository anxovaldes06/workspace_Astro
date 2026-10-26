// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),

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