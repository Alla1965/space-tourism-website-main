import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        destination: 'pages/destination-moon.html',
        crew: 'pages/crew-commander.html',
        technology: 'pages/technology-capsule.html'
      }
    }
  }
})