/******************************************************************
 * One Nexus
 * Grunt Setup
 * @uthor [@esr360](http://twitter.com/esr360)
 ******************************************************************/

module.exports = function(grunt) {

    // Allows the passing of multiple flags on the command line
    require('nopt-grunt-fix')(grunt);
    
    /**************************************************************
     * Config
     *************************************************************/

    /**
     * Set the default theme to compile assets for
     * @var {string} theme
     */
    var theme = grunt.option('theme') || 'One-Nexus';

    /**
     * List of all themes used by the project
     * @var {object} themes
     */
    var themes = grunt.option('themes') || [
        'default',
        'One-Nexus'
    ]
    
    /**
     * Set your desired development environment
     * @var {('dev'|'prod')} [dev] env
     */
    var env = grunt.option('env') || 'dev';
    
    /**
     * Set the relative path to the current theme's source assets
     * @var {string} themePath
     */
    var themePath = 'themes/<%= theme %>/';

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
     * Set the path to the vendor directory
     * @var {string} vendor
     */
    var vendor  = 'assets/vendor/';

    /**
     * Set which Owl-Carousel modules you would like to use
     * @see https://git.io/v6ssU
     */
    var _owl = function() {
        var owlPath = vendor + 'Owl-Carousel/src/js/'; 
        var owlModules = [
            owlPath + 'owl.carousel.js',
            owlPath + 'owl.animate.js',
            owlPath + 'owl.autoheight.js',
            owlPath + 'owl.autoplay.js',
            owlPath + 'owl.compiled.js',
            owlPath + 'owl.hash.js',
            owlPath + 'owl.lazyload.js',
            owlPath + 'owl.navigation.js',
            owlPath + 'owl.video.js'
        ]
        return owlModules;
    };

    /**
     * Set the scripts to be included in your theme's main js file
     * @var {object} _scripts
     */
    var _scripts = [
        _owl(),
        vendor + 'matchMedia/matchMedia.js',
        vendor + 'Synergy/dist/synergy.js',
        'assets/modules/utilities/core/core.js',
        'assets/tools/**/*.js',
        'assets/modules/elements/**/*.js',
        'assets/modules/objects/**/*.js',
        'assets/themes/<%= theme %>/<%= theme %>.js'
    ];

    /**
     * Set all global scripts to be used by the project
     * @var {object} _globalScripts
     */
    var _globalScripts = [
        vendor + 'jQuery/dist/jquery.js',
        vendor + 'pseudojQuery/src/pseudojQuery-start.js',
        vendor + 'pseudojQuery/src/pseudojQuery-end.js'
    ];

    /**
     * Set all global styles to be used by the project
     * @var {object} _globalStyles
     */
    var _globalStyles = [];
    
    /**************************************************************
     * Packages
     *************************************************************/
        
    grunt.initConfig({
		
        pkg: grunt.file.readJSON('package.json'),

        themeBuildStyles: themeBuildStyles,

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
                    to: '$theme : \'<%= theme %>\';'
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
            scripts: [
                'app/themes/<%= theme %>/**/*.js', 
                '!app/themes/<%= theme %>/**/*.min.js'
            ],
            styles: [
                'app/**/*.css', 
                '!app/**/*.min.css'
            ],
            images: {
                src: 'app/images'
            },
            theme: {
                src: 'app/themes/<%= theme %>'
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
                        cwd: vendor + 'Font-Awesome/fonts',
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
                    '<%= themeBuildStyles %>app.css': 'assets/app.scss'
                }
            },
            prod: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    '<%= themeBuildStyles %>app.min.css': 'assets/app.scss'
                }
            },
            demo: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'demo/scss',
                    src: ['**/*.scss'],
                    dest: 'demo/css',
                    ext: '.css'
                }]
            }
        },

        /**
         * CSSMin
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
         * @note used for Scss unit testing
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
         * Assemble
         * @see https://github.com/assemble/grunt-assemble
         */
        assemble: {
            options: {
                layout: 'core.hbs',
                layoutdir: 'templates/layouts/',
                partials: 'templates/partials/**/*.hbs',
                helpers: [
                    'templates/helpers/in-array.js',
                    'templates/helpers/breadcrumb.js'
                ]
            },
            app: {
                cwd: 'templates/pages/',
                dest: 'prototype/',
                expand: true,
                src: '**/*.hbs',
                options: {
                    assets: '/',
                    environment: env,
                    theme: theme,
                    index: '/',
                    dest: '<%= assemble.app.dest %>'
                },
            }
        },

        /**
         * Browser Sync
         * https://github.com/BrowserSync/grunt-browser-sync
         */
        browserSync: {
            bsFiles: {
                src : [
                    'app/**/*.css', 
                    'demo/**/*.css', 
                    'prototype/**/*.html'
                ]
            },
            options: {
                server: [
                    './prototype',
                    './demo',
                    './app'
                ],
                open: false,
                watchTask: true,
                notify: false
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
                    'assets/themes/**/*.scss',
                    'demo/scss/**/*.scss'
                ],
                tasks: [ 
                    'sass:' + env, 
                    'sass:demo', 
                    'postcss',
                    //'scsslint',
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
            templates: {
                files: 'templates/**/*',
                tasks: [
                    'assemble',
                    'notify:templates'
                ]
            }
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
            templates: {
                options: {
                    title: 'Templates Compiled',
                    message: 'All templates have been successfully compiled!'
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
    
    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
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
            'copy:images',
            'concat',
            'sass:' + environment,
            'sass:demo',
            'postcss',
            'lint',
            'test',
            'assemble',
            'docs'
        ];
        if (environment == 'prod') {
            assetTasks.push(
                'uglify', 
                'clean:scripts',
                'cssmin',
                'clean:styles'
            );
        };
        return assetTasks;
    };
    
    // Default Grunt task
    grunt.registerTask('default', [
        'theme:' + theme,
        'browserSync',
        'watch'
    ]);
      
    // Compile the app
    grunt.registerTask('compile', gruntCompile(env));

    // Compile a specific theme
    grunt.registerTask('theme', function(targetTheme) {
        targetTheme = targetTheme || theme;
        grunt.config('theme', targetTheme);
        grunt.task.run('compile');
    });

    // Compile all themes
    grunt.registerTask('themes', function() {
        themes.forEach(function(theme) {
            grunt.task.run('theme:' + theme);
        });
    });
        
    // Lint
    grunt.registerTask('lint', [
        //'scsslint',
        //'jshint'
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