import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path. Defaults to '/' for Hostinger/domain-root deploys.
// Override via environment, e.g. `VITE_BASE=/virtualslapApp/ npm run build`
// if you ever need to deploy under a subpath (GitHub Pages, subdirectory, etc.).
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
})
