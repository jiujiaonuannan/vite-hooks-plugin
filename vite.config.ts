import { defineConfig } from 'vite'
import testHooks from './plugins/test-hooks';
import virtual from './plugins/virtual-module'
import react from '@vitejs/plugin-react'
import svgr from './plugins/svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ defaultExport: 'component' })]
})
