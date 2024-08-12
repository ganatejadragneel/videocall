import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from '@astrojs/node';
import react from "@astrojs/react";
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: netlify(),
  vite: {
    ssr: {
      noExternal: ['agora-rtc-sdk-ng']
    },
    optimizeDeps: {
      include: ['agora-rtc-sdk-ng']
    }
  }
});