import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://lmhdez.github.io/moviesReact/
export default defineConfig({
  base: '/moviesReact/',
  plugins: [react()],
})
