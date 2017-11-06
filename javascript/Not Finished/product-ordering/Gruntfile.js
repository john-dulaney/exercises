module.exports = function(grunt) {
    
        // Project configuration.
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            watch: {
                scripts: {
                  files: ['scripts/*.js'],
                  tasks: ['eslint, browserify'],
                  options: {
                    spawn: false,
                  },
                }
            },
            eslint: {
                all: [ '.scripts/*.js']
                    
              },
            })
    
        // Load the plugin that provides the "uglify" task.
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-eslint');
        grunt.loadNpmTasks('grunt-browserify');
        
        // Default task(s).
        grunt.registerTask('default', ['eslint', 'browserify', 'watch']);
    
    };