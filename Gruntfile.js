/******************************************************************
 * One Nexus
 * Grunt Setup
 * @uthor Edmund Reed | @esr360
 ******************************************************************/

module.exports = function(grunt) {

    // Allows the passing of multiple flags on the command line
    require('nopt-grunt-fix')(grunt);
    
    /**************************************************************
     * Config
     *************************************************************/
    
    /**
     * Set which theme you would like to build assets for
     * @var {string} theme
     * @example $ grunt compile --theme=Foo
     */
    var theme = grunt.option('theme') || 'One-Nexus';
    
    /**
     * Set your desired development environment
     * @var {('dev'|'prod')} [dev] env
     * @example $ grunt compile --env=prod
     */
    var env = grunt.option('env') || 'dev';
    
    /**
     * Set the relative path to the current theme's source assets
     * @var {string} themePath
     */
    var themePath = 'themes/' + theme + '/';

    /**
     * Set the path to the compiled global scripts directory
     * @var {string} buildScripts
     */
    var buildScripts = 'app/scripts/';

    /**
     * Set the path to the compiled global styles directory
     * @var {string} buildStyles
     */
    var buildStyles  = 'app/styles/';
    
    /**
     * Set the path to the compiled theme scripts directory
     * @var {string} buildStyles
     */
    var themeBuildScripts = 'app/' + themePath;

    /**
     * Set the path to the compiled theme styles directory
     * @var {string} buildStyles
     */
    var themeBuildStyles  = 'app/' + themePath;

    /**
     * Set the root path to Owl-Carousel js files
     * @var {string} owlPath
     */
    var owlPath = 'assets/vendor/Owl-Carousel/src/js/'; 

    /**
     * Set which Owl-Carousel modules you would like to use
     * @var {object} _owl
     * @see https://git.io/v6ssU
     */
    var _owl = [
        owlPath + 'owl.carousel.js',
        owlPath + 'owl.animate.js',
        owlPath + 'owl.autoheight.js',
        owlPath + 'owl.autoplay.js',
        owlPath + 'owl.compiled.js',
        owlPath + 'owl.hash.js',
        owlPath + 'owl.lazyload.js',
        owlPath + 'owl.navigation.js',
        owlPath + 'owl.video.js',
    ];

    /**
     * Set the scripts to be included in your theme's main js file
     * @var {object} _scripts
     */
    var _scripts = [
        _owl,
        'assets/vendor/matchMedia/matchMedia.js',
        'assets/vendor/Synergy/dist/synergy.js',
        'assets/vendor/jquery-animateNumber/jquery.animateNumber.js',
        'assets/vendor/Kayzen.ScrollSpy/src/Kayzen.ScrollSpy.js',
        'assets/vendor/ScrollTrigger/src/ScrollTrigger.js',
        'assets/vendor/Stellar/src/jquery.stellar.js',
        'assets/vendor/TweeCool/src/tweecool.js',
        'assets/modules/utilities/core/core.js',
        'assets/includes/*.js',
        'assets/modules/elements/**/*.js',
        'assets/modules/objects/**/*.js',
        'assets/themes/' + theme + '/' + theme + '.js'
    ];

    /**
     * Set all global scripts to be used by the project
     * @var {object} _globalScripts
     */
    var _globalScripts = [
        'assets/vendor/jQuery/dist/jquery.js',
        'assets/vendor/pseudojQuery/src/pseudojQuery-start.js',
        'assets/vendor/pseudojQuery/src/pseudojQuery-end.js',
        'assets/vendor/Masonry/dist/masonry.pkgd.js',
        'assets/vendor/Isotope/dist/isotope.pkgd.js',
        'assets/vendor/Infinite-AJAX-Scroll/dist/jquery-ias.js',
        'assets/vendor/Enlighter/Build/EnlighterJS.js',
        'assets/vendor/MooTools-Core/build/mootools-core.js'
    ];

    /**
     * Set all global styles to be used by the project
     * @var {object} _globalStyles
     */
    var _globalStyles = [
        'assets/vendor/Enlighter/Build/EnlighterJS.css'
    ];
    
    /**************************************************************
     * Packages
     *************************************************************/
        
    grunt.initConfig({
		
        pkg: grunt.file.readJSON('package.json'),

        /**
         * Grunt Text Replace
         * @see https://github.com/yoniholmes/grunt-text-replace
         */
        replace: {
            sassTheme: {
                src: 'assets/app.scss',
                overwrite: true, 
                replacements: [{
                    from: /\$theme(.*?);/g,
                    to: '$theme : \'' + theme + '\';'
                }]
            }
        },
        
        /**
         * Clean
         * @see https://github.com/gruntjs/grunt-contrib-clean
         */
        clean: {
            app: [
                'app/*', 
                '!app/themes/**', 
                '!app/images/**'
            ],
            theme: {
                src: 'app/themes/' + theme
            },
            themeScripts: [
                'app/themes/' + theme + '/**/*.js', 
                '!app/themes/' + theme + '/**/*.min.js'
            ],
            scripts: [
                'app/scripts/**/*.js', 
                '!app/**/*.min.js'
            ],
            styles: [
                'app/**/*.css', 
                '!app/**/*.min.css'
            ],
            images: {
                src: 'app/images'
            }
        },
        
        /**
         * Copy
         * @see https://github.com/gruntjs/grunt-contrib-copy
         */
        copy: {
            app: {
                files: [
                    {
                        cwd: 'assets/vendor/Font-Awesome/fonts',
                        src: '**/*',
                        dest: 'app/fonts',
                        expand: true
                    },
                    {
                        src: [_globalScripts],
                        dest: buildScripts,
                        expand: true,
                        flatten: true
                    },
                    {
                        src: [_globalStyles],
                        dest: buildStyles,
                        expand: true,
                        flatten: true
                    }
                ]
            },
            images: {
                files: [{
                    cwd: 'assets/images',
                    src: '**/*',
                    dest: 'app/images',
                    expand: true
                }]
            }
        },

        /**
         * Sass
         * @see https://github.com/sindresorhus/grunt-sass
         */
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    [themeBuildStyles + 'app.css']: 'assets/app.scss'
                }
            },
            prod: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    [themeBuildStyles + 'app.min.css']: 'assets/app.scss'
                }
            } 
        },

        /**
         * grunt-contrib-cssmin
         * @see https://github.com/gruntjs/grunt-contrib-cssmin
         */
        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: themeBuildStyles,
                        src: ['*.css', '!*.min.css'],
                        dest: themeBuildStyles,
                        ext: '.min.css'
                    },
                    {
                        expand: true,
                        cwd: buildStyles,
                        src: ['*.css', '!*.min.css'],
                        dest: buildStyles,
                        ext: '.min.css'
                    }
                ]
            }
        },

        /**
         * PostCSS
         * @see https://github.com/nDmitry/grunt-postcss
         */
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer') ({
                        browsers: [
                            'last 2 versions', 
                            'ie >= 9'
                        ]
                    })
                ]
            },
            build: {
                src: themeBuildStyles + '*.css'
            }
        },

        /**
         * Concat
         * @see https://github.com/gruntjs/grunt-contrib-concat
         */
        concat: {
            app: {
                src: _scripts,
                dest: themeBuildScripts + 'app.js',
            }
        },

        /**
         * Uglify
         * @see https://github.com/gruntjs/grunt-contrib-uglify
         */
        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            app: {
                files: [{ 
                    src: 'app/scripts/*.js',
                    dest: buildScripts,
                    expand: true,
                    flatten: true,
                    rename: function(dest, src) { 
                        return dest + '/' + src.replace('.js', '.min.js'); 
                    }
                }]
            },
            themes: {
                files: [{ 
                    src: 'app/' + themePath + '**/*.js',
                    dest: themeBuildScripts,
                    expand: true,
                    flatten: true,
                    rename: function(dest, src) { 
                        return dest + '/' + src.replace('.js', '.min.js'); 
                    }
                }]
            }
        },

        /**
         * Scss Lint
         * @see https://github.com/ahmednuaman/grunt-scss-lint
         */
        scsslint: {
            allFiles: [
                'assets/modules/**/*.scss',
                'assets/themes/**/*.scss'
            ],
            options: {
                config: '.scss-lint.yml',
                colorizeOutput: false
            },
        },

        /**
         * JSHint
         * @see https://github.com/gruntjs/grunt-contrib-jshint
         */
        jshint: {
            app: [
                'Gruntfile.js', 
                'assets/includes/**/*.js',
                'assets/modules/**/*.js',
                'assets/themes/**/*.js'
            ]
        },

        /**
         * Mocha Cli
         * @see https://github.com/Rowno/grunt-mocha-cli
         */
        mochacli: {
            scss: ['unit-testing/sass/tests.js']
        },

        /**
         * SassDoc
         * @see https://github.com/SassDoc/grunt-sassdoc
         */
        sassdoc: {
            default: {
                src: [
                    'assets/modules/**/*.scss',
                    'assets/themes/**/*.scss'
                ],
                options: {
                    dest: 'docs/sass'
                }
            },
        },

        /**
         * JSDoc
         * @see https://github.com/SassDoc/grunt-sassdoc
         */
        jsdoc: {
            dist : {
                src: [
                    'Gruntfile.js',
                    'assets/includes/**/*.js',
                    'assets/modules/**/*.js',
                    'assets/themes/**/*.js'
                ],
                options: {
                    destination: 'docs/js'
                }
            }
        },

        /**
         * Watch
         * @see https://github.com/gruntjs/grunt-contrib-watch
         */
        watch: {
            options: {
                spawn: false,
            },
            scss: {
                files: [
                    'assets/modules/**/*.scss',
                    'assets/themes/**/*.scss'
                ],
                tasks: [ 
                    'sass:' + env, 
                    'postcss',
                    'scsslint',
                    'mochacli:scss',
                    'sassdoc',
                    'notify:css'
                ],
            },
            scripts: {
                files: _scripts,
                tasks: [
                    'concat',
                    'jshint',
                    'jsdoc',
                    'notify:scripts'
                ]
            },
            images: {
                files: 'assets/images/**/*',
                tasks: [
                    'clean:images',
                    'copy:images'
                ]
            },
        },

        /**
         * Notify
         * @see https://github.com/dylang/grunt-notify
         */
        notify: {
            scripts: {
                options: {
                    title: 'Scripts Compiled',
                    message: 'All scripts have been successfully compiled!'
                }
            },
            css: {
                options: {
                    title: 'Styles Compiled',
                    message: 'All styles have been successfully compiled!'
                }
            },
            app: {
                options: {
                    title: 'App Built',
                    message: 'Your app has been successfully built!'
                }
            }
        }

    });
    
    /**************************************************************
     * Load NPM Tasks
     *************************************************************/
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sassdoc');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-text-replace');
    
    /**************************************************************
     * Tasks
     *************************************************************/
    
    /**
     * Compile Assets
     * @param {(env|prod)} environment
     */
    var gruntCompile = function(environment) {
        var assetTasks = [
            'clean:app',
            'clean:theme',
            'replace:sassTheme',
            'copy:app',
            'concat',
            'sass:' + environment,
            'postcss',
            //'lint',
            //'test',
            'docs'
        ];
        if (environment == 'prod') {
            assetTasks.push(
                'uglify', 
                'clean:scripts',
                'clean:themeScripts',
                'cssmin',
                'clean:styles'
            );
        };
        return assetTasks;
    };
    
    // Default Grunt task
    grunt.registerTask('default', [
        'compile',
        'watch'
    ]);
    
    // Compile the app
    grunt.registerTask('compile', 
        gruntCompile(env)
    );
    
    // Compile the app for a development environment
    grunt.registerTask('compile:dev', 
        gruntCompile('dev')
    );
    
    // Compile the app for a production environment
    grunt.registerTask('compile:prod',
        gruntCompile('prod')
    );
        
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

};