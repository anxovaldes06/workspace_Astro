// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
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

  integrations: [react()]
});