import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base: './'` keeps asset URLs relative, so the same build works on
// Vercel (served from the domain root) and on GitHub Pages (served from /<repo>/).
export default defineConfig({
  plugins: [react()],
  base: './',
});
