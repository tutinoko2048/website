// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': {
      status: 302, // temporary redirect
      destination: 'https://github.com/tutinoko2048'
    }
  }
});
