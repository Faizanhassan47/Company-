import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import handler from './api/contact.ts';

function apiContactPlugin(): Plugin {
  return {
    name: 'api-contact-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/contact') {
          await handler(req, res);
        } else {
          next();
        }
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apiContactPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/gsap')) {
            return 'animation-vendor';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'ui-vendor';
          }
          return undefined;
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
