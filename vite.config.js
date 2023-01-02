import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    /* open: true,  -> FOR AUTO LOAD WHEN THE APP IS STARTED*/
    host: true/* --> FOR WATCH THE APP IN THE MOBILE */
  }
})
