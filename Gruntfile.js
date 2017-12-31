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

    CONFIG.theme    = setConfig(CONFIG, 'theme');
    CONFIG.themes   = setConfig(CONFIG, 'themes');
    CONFIG.env      = setConfig(CONFIG, 'env');
    CONFIG.compile  = setConfig(CONFIG, 'compile');
    CONFIG.assets   = setConfig(CONFIG, 'assets');
    CONFIG.project  = setConfig(CONFIG, 'project');
    CONFIG.src      = setConfig(CONFIG, 'src');
    CONFIG.dist     = setConfig(CONFIG, 'dist');
    CONFIG.scripts  = setConfig(CONFIG, 'scripts');
    CONFIG.styles   = setConfig(CONFIG, 'styles');
    CONFIG.lint     = setConfig(CONFIG, 'lint');
    CONFIG.test     = setConfig(CONFIG, 'test');
    CONFIG.docs     = setConfig(CONFIG, 'docs');

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

    grunt.registerTask('build', () => {
        grunt.task.run(require('./build/build')({
            theme: CONFIG.theme,
            environment: CONFIG.env,
            compile: CONFIG.compile,
            assets: CONFIG.assets,
            lint: CONFIG.lint,
            test: CONFIG.test,
            docs: CONFIG.docs,
        }));
    });

    // Default Grunt task
    grunt.registerTask('default', [
        'build', 'browserSync', 'watch'
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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-csscomb');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sassdoc');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks(
        CONFIG.nodeSass ? 'grunt-sass':'grunt-contrib-sass'
    );
    
    /**************************************************************
     * Tools/Utilities
     *************************************************************/

    /**
     * Set configuration value
     * 
     * @param {*} config 
     * @param {*} key 
     */
    function setConfig(config, key) {
        return (grunt.option(key) !== undefined) ? grunt.option(key) : config[key];
    }

};