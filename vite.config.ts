import { defineConfig } from 'vite'
import testHooks from './plugins/test-hooks';
import virtual from './plugins/virtual-module'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), virtual()]
})
