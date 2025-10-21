// No seu vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Importe 'path' para resolver caminhos absolutos
import path from 'path'; 

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Esta linha mapeia o '@' para a pasta './src'
      '@': path.resolve(__dirname, './src'), 
    },
  },
});