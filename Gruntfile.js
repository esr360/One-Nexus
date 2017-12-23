/******************************************************************
 * One Nexus
 * Grunt Setup
 * @uthor [@esr360](http://twitter.com/esr360)
 ******************************************************************/

module.exports = function(grunt) {

    // Allows the passing of multiple flags on the command line
    require('nopt-grunt-fix')(grunt);

    // Import config
    const CONFIG = require('./build/config')();

    /**************************************************************
     * Config
     * @see /build/config.js
     *************************************************************/

    CONFIG.theme   = grunt.option('theme')   || CONFIG.theme;
    CONFIG.themes  = grunt.option('themes')  || CONFIG.themes;
    CONFIG.env     = grunt.option('env')     || CONFIG.env;
    CONFIG.project = grunt.option('project') || CONFIG.project;
    CONFIG.src     = grunt.option('src')     || CONFIG.src;
    CONFIG.dist    = grunt.option('dist')    || CONFIG.dist;
    CONFIG.scripts = grunt.option('scripts') || CONFIG.scripts;
    CONFIG.styles  = grunt.option('styles')  || CONFIG.styles;
    CONFIG.lint    = grunt.option('lint')    || CONFIG.lint;
    CONFIG.test    = grunt.option('test')    || CONFIG.test;

    /**************************************************************
     * Default Tasks
     * @see /build/tasks/
     *************************************************************/

    grunt.initConfig({
        pkg         : grunt.file.readJSON('package.json'),
        theme       : CONFIG.theme,
        clean       : require('./build/tasks/clean')(CONFIG),
        copy        : require('./build/tasks/copy')(CONFIG),
        sass        : require('./build/tasks/sass')(CONFIG),
        cssmin      : require('./build/tasks/cssmin')(CONFIG),
        postcss     : require('./build/tasks/postcss')(CONFIG),
        csscomb     : require('./build/tasks/csscomb')(CONFIG),
        browserify  : require('./build/tasks/browserify')(CONFIG),
        uglify      : require('./build/tasks/uglify')(CONFIG),
        scsslint    : require('./build/tasks/scsslint')(CONFIG),
        jshint      : require('./build/tasks/jshint')(CONFIG),
        mochaTest   : require('./build/tasks/mochaTest')(CONFIG),
        sassdoc     : require('./build/tasks/sassdoc')(CONFIG),
        jsdoc       : require('./build/tasks/jsdoc')(CONFIG),
        assemble    : require('./build/tasks/assemble')(CONFIG),
        browserSync : require('./build/tasks/browserSync')(CONFIG),
        watch       : require('./build/tasks/watch')(CONFIG),
        notify      : require('./build/tasks/notify')(CONFIG)
    });

    /**************************************************************
     * Custom Tasks
     *************************************************************/
    
    // Default Grunt task
    grunt.registerTask('default', [
        'theme:' + CONFIG.theme,
        'browserSync',
        'watch'
    ]);

    // Compile a specific theme
    grunt.registerTask('theme', target => {
        grunt.config('theme', target || CONFIG.theme);

        grunt.task.run(require('./build/compile')({
            theme: CONFIG.theme,
            environment: CONFIG.env,
            lint: CONFIG.lint,
            test: CONFIG.test,
        }));
    });

    // Compile all themes
    grunt.registerTask('themes', () => {
        themes.forEach(theme => {
            grunt.task.run('theme:' + theme);
        });
    });
        
    // Lint
    grunt.registerTask('lint', [
        'scsslint',
        'jshint'
    ]);
        
    // Test
    grunt.registerTask('test', [
        'mochacli:scss'
    ]);

    // Docs
    grunt.registerTask('docs', [
        'sassdoc',
        'jsdoc'
    ]);
    
    /**************************************************************
     * Load NPM Tasks
     *************************************************************/
    
    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-csscomb');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sassdoc');
    grunt.loadNpmTasks('grunt-scss-lint');

};