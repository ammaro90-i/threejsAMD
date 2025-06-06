const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    rollup: {
      options: {
        // Rollup output options (excluding 'file', which is handled by 'dest' in files)
        format: 'amd',
        amd: {
          id: 'three-app'
        },
        sourcemap: true,
        // globals: { 'three': 'THREE' }, // Uncomment if you need globals
        plugins: [
          resolve(),
          commonjs()
        ]
      },
      dist: {
        files: [{
          src: 'src/main.js', // This sets Rollup's 'input' option
          dest: 'dist/three-app.amd.js' // This sets Rollup's 'output.file' option
        }]
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.js', 'Gruntfile.js'], // Watch Gruntfile.js for config changes
        tasks: ['rollup'], // Run rollup on changes
        options: {
          spawn: false,
        },
      },
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.',
          open: true, // Open the browser automatically
          livereload: true // Enable live reload
        }
      }
    }
  });

  // Load the plugins that provide the "rollup", "watch", and "connect" tasks.
  grunt.loadNpmTasks('grunt-rollup');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['rollup', 'connect', 'watch']);

};
