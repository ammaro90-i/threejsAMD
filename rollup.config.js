// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser'; // For minification

export default {
  input: 'src/main.js', // Your main Three.js application entry point
  output: {
    file: 'dist/three-app.amd.js',
    format: 'amd',
    amd: {
      id: 'three-app' // Unique AMD module ID
    },
    sourcemap: true,
    // If you want to bundle external dependencies with specific names, e.g., 'three'
    // This is often not necessary if you are importing directly from 'three' and its jsm examples
    // globals: {
    //   'three': 'THREE'
    // }
  },
  plugins: [
    resolve(), // Resolves node_modules imports
    commonjs(), // Converts CommonJS modules to ES modules
    // Only apply terser for production builds
    process.env.NODE_ENV === 'production' && terser()
  ]
};
