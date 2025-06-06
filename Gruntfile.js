const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel');

module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    rollup: {
      dist: {
        options: {
          format: 'amd',
          amd: {
            id: 'three-app'
          },
          sourcemap: true,
          // globals: { 'three': 'THREE' }, // Uncomment if you need globals

          plugins: [
            resolve(),
            commonjs(),
            babel({
              babelHelpers: 'bundled',
              exclude: 'node_modules/**',
              presets: [
                ['@babel/preset-env', {
                  modules: false // Keep this crucial setting for Rollup
                }]
              ],
              plugins: [
                '@babel/plugin-transform-react-jsx'
              ]
            })
          ]
        },
        files: [{
          src: 'src/main.js', // This sets Rollup's 'input' option
          dest: 'dist/three-app.amd.js' // This sets Rollup's 'output.file' option
        }]
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.js', 'Gruntfile.js'],
        tasks: ['rollup:dist'],
        options: {
          spawn: false,
          livereload: true
        },
      },
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.',
          open: true,
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-rollup');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['rollup:dist', 'connect', 'watch']);


};