import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
         main: 'index.html',
        capsule: 'pages/technology-capsule.html',
        vehicle: 'pages/technology-vehicle.html',
        crew: 'pages/crew-commander.html',
        destination: 'pages/destination-moon.html'
      }
    }
  }
})