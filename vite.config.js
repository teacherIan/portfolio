import react from '@vitejs/plugin-react';
import { transformWithEsbuild } from 'vite';
import restart from 'vite-plugin-restart';

export default {
  root: 'src/',
  publicDir: '../public/',
  assetsInclude: ['**/*.glb', '**/*.JPG', '**/*.splat'],
  plugins: [
    // Restart server on static/public file change

    // React support
    react(),

    // .js file support as if it was JSX
  ],
  server: {
    host: true, // Open to local network and display URL
    open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env), // Open if it's not a CodeSandbox
  },
  build: {
    outDir: '../dist', // Output in the dist/ folder
    emptyOutDir: true, // Empty the folder first
    sourcemap: true, // Add sourcemap
  },
};
