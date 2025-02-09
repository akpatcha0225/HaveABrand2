import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This makes the server accessible to other devices on the local network
    port: 3000,        // Optional: you can change the port if needed
  },
})