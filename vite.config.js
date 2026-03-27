import { defineConfig } from 'vite'



export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',

        // DESTINATION
        moon: 'pages/destination-moon.html',
        mars: 'pages/destination-mars.html',
        europa: 'pages/destination-europa.html',
        titan: 'pages/destination-titan.html',
        // CREW
        commander: 'pages/crew-commander.html',
        specialist: 'pages/crew-specialist.html',
        pilot: 'pages/crew-pilot.html',
        engineer: 'pages/crew-engineer.html',

        // TECHNOLOGY
        vehicle: 'pages/technology-vehicle.html',
        capsule: 'pages/technology-capsule.html',
        spaceport: 'pages/technology-spaceport.html'
      }
    }
  }
})