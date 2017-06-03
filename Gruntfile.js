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
        'One-Nexus'
    ]
    
    /**
     * Set your desired development environment
     * @var {('dev'|'prod')} [dev] env
     */
    var env = grunt.option('env') || 'dev';

    /**
     * Map the project's architecture into one Grunt can use
     * @var {object} project
     */
    var project = {
        dist:[         'dist/', {
            images:    'dist/assets/images/',
            scripts:   'dist/assets/scripts/',
            styles:    'dist/assets/styles/',
            themes:[   'dist/assets/themes/', {
                theme: 'dist/assets/themes/<%=theme%>/'
            }],
            templates: 'dist/'
        }],
        source:[       'assets/', {
            images:    'assets/images/',
            scripts:   'assets/modules/',
            styles:    'assets/modules/',
            themes:[   'assets/themes/', {
                theme: 'assets/themes/<%=theme%>/'
            }],
            templates: 'templates/'
        }],
        vendor:        'node_modules/',
        docs:[         'docs/', {
            scripts:   'docs/js/',
            styles:    'docs/sass/'
        }],
        test:[         'test/', {
            scripts:   'test/js/',
            styles:    'test/sass/'
        }]
    }

    /**
     * Set the scripts used to create the theme's main js file
     * @var {object} _scripts
     */
    var _scripts = [
        project.vendor + 'Synergy/src/js/synergy.js',
        project.source[0] + 'tools/**/*.js',
        project.source[0] + 'modules/**/*.js',
        project.source[1].themes[1].theme + '<%=theme%>.js'
    ];

    /**
     * Set all optional scripts to be used by the project
     * @var {object} _globalScripts
     */
    var _globalScripts = [];

    /**
     * Set all optional styles to be used by the project
     * @var {object} _globalStyles
     */
    var _globalStyles = [];

    /**
     * The name of your project's source asset
     * @var {string} dist
     * @example
     * '/' + src + '.scss'
     */
    var src = 'app';

    /**
     * The name of your project's compiled & distributed asset
     * @var {string} dist
     * @example
     * '/' + dist + '.css'
     */
    var dist = 'app';
    
    /**************************************************************
     * Packages
     *************************************************************/
        
    grunt.initConfig({
		
        pkg: grunt.file.readJSON('package.json'),

        // Pass the theme variable to allow it to be dynamic
        theme: theme,

        /**
         * Text Replace
         * @note used to dynamically update theme name in .scss file
         * @see https://github.com/yoniholmes/grunt-text-replace
         */
        replace: {
            sassTheme: {
                src: project.source[0] + dist + '.scss',
                overwrite: true, 
                replacements: [{
                    from: /\$theme(.*?);/g,
                    to: '$theme : \'<%=theme%>\' !default;'
                }]
            }
        },
        
        /**
         * Clean
         * @see https://github.com/gruntjs/grunt-contrib-clean
         */
        clean: {
            dist: [
                project.dist[0] + '*', 
                '!' + project.dist[1].themes[0] + '**'
            ],
            scripts: [
                project.dist[0] + '**/*.js', 
                '!' + project.dist[0] + '**/*.min.js'
            ],
            styles: [
                project.dist[0] + '**/*.css', 
                '!' + project.dist[0] + '**/*.min.css'
            ],
            images: {
                src: project.dist[1].images
            },
            theme: {
                src: project.dist[1].themes[1].theme
            }
        },
        
        /**
         * Copy
         * @see https://github.com/gruntjs/grunt-contrib-copy
         */
        copy: {
            dist: {
                files: [
                    {
                        src: [_globalScripts],
                        dest: project.dist[1].scripts,
                        expand: true,
                        flatten: true
                    },
                    {
                        src: [_globalStyles],
                        dest: project.dist[1].styles,
                        expand: true,
                        flatten: true
                    }
                ]
            },
            images: {
                files: [{
                    cwd: project.source[1].images,
                    src: '**/*',
                    dest: project.dist[1].images,
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
                    style: 'expanded',
                    require: 'sass-json-vars'
                },
                files: {
                    [project.dist[1].themes[1].theme + dist + '.css']: 
                    project.source[0] + src + '.scss'
                }
            },
            prod: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    [project.dist[1].themes[1].theme + dist + '.min.css']: 
                    project.source[0] + src + '.scss'
                }
            }
        },

        /**
         * CSSMin
         * @see https://github.com/gruntjs/grunt-contrib-cssmin
         */
        cssmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: project.dist[1].themes[1].theme,
                        src: ['*.css', '!*.min.css'],
                        dest: project.dist[1].themes[1].theme,
                        ext: '.min.css'
                    },
                    {
                        expand: true,
                        cwd: project.dist[1].styles,
                        src: ['*.css', '!*.min.css'],
                        dest: project.dist[1].styles,
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
            dist: {
                src: [
                    project.dist[1].styles + '**/*.css',
                    project.dist[1].themes[1].theme + '**/*.css'
                ]
            }
        },
        

        /**
         * csscomb 
         * @see https://www.npmjs.com/package/grunt-csscomb
         */
        csscomb: {
            options: {
                config: '.csscomb.json'
            },
            dist: {
                expand: true,
                cwd: project.dist[0],
                src: ['**/*.css', '!**/*.min.css'],
                dest: project.dist[0],
                ext: '.css'
            }
        },

        /**
         * Browserify
         * @see https://www.npmjs.com/package/grunt-browserify
         */
        browserify: {
            options: {
                transform: [['babelify', {presets: ['es2015']}]]
            },
            dist: {
                src: _scripts,
                dest: project.dist[1].themes[1].theme + dist + '.js'
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
            dist: {
                files: [{ 
                    src: project.dist[1].scripts + '*.js',
                    dest: project.dist[1].scripts,
                    expand: true,
                    flatten: true,
                    rename: function(dest, src) { 
                        return dest + '/' + src.replace('.js', '.min.js'); 
                    }
                }]
            },
            themes: {
                files: [{ 
                    src: project.dist[1].themes[1].theme + '**/*.js',
                    dest: project.dist[1].scripts,
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
            source: [project.source[0] + '**/*.scss'],
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
            source: [project.source[0] + '**/*.js'],
            esversion: 6
        },

        /**
         * Mocha Cli
         * @note used for Scss unit testing
         * @see https://github.com/Rowno/grunt-mocha-cli
         */
        mochacli: {
            scss: [project.test[1].styles + 'tests.js']
        },

        /**
         * SassDoc
         * @see https://github.com/SassDoc/grunt-sassdoc
         */
        sassdoc: {
            dist: {
                src: [
                    project.source[0] + '**/*.scss'
                ],
                options: {
                    dest: project.docs[1].styles
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
                    project.source[0] + '**/*.js'
                ],
                options: {
                    destination: project.docs[1].scripts
                }
            }
        },

        /**
         * Assemble
         * @see https://github.com/assemble/grunt-assemble
         */
        assemble: {
            options: {
                layout: 'base.hbs',
                layoutdir: project.source[1].templates + 'layouts/',
                partials: project.source[1].templates + 'partials/**/*.hbs',
                helpers: [project.source[1].templates + 'helpers/**/*.js']
            },
            dist: {
                cwd: project.source[1].templates + 'pages/',
                dest: project.dist[1].templates,
                expand: true,
                src: '**/*.hbs',
                options: {
                    assets: './' + project.dist[0],
                    environment: env,
                    theme: theme,
                    dest: '<%=assemble.dist.dest%>'
                },
            }
        },

        /**
         * Browser Sync
         * @see https://github.com/BrowserSync/grunt-browser-sync
         */
        browserSync: {
            bsFiles: {
                src: [project.dist[0]]
            },
            options: {
                server: ['./' + project.dist[0]],
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
                    project.source[0] + '**/*.scss'
                ],
                tasks: [ 
                    'sass:' + env,
                    'postcss:dist',
                    'csscomb',
                    //'scsslint',
                    'mochacli:scss',
                    'sassdoc',
                    'notify:css'
                ],
            },
            scripts: {
                files: _scripts,
                tasks: [
                    'jshint',
                    'jsdoc',
                    'browserify',
                    'notify:scripts'
                ]
            },
            images: {
                files: project.source[1].images + '**/*',
                tasks: [
                    'clean:images',
                    'copy:images'
                ]
            },
            templates: {
                files: project.source[1].templates + '**/*',
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
            images: {
                options: {
                    title: 'Images Copied',
                    message: 'All images have been copied to the distribution directory'
                }
            },
            templates: {
                options: {
                    title: 'Templates Compiled',
                    message: 'All templates have been successfully compiled!'
                }
            },
            dist: {
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
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-csscomb');
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
     * @param {('dev'|'prod')} environment
     */
    var compile = function(environment) {
        var tasks = [
            'clean:dist',
            'clean:theme',
            'replace:sassTheme',
            'copy:dist',
            'copy:images',
            'browserify',
            'sass:' + environment,
            'postcss',
            'csscomb',
            'lint',
            'test',
            'assemble',
            'docs'
        ];
        if (environment == 'prod') {
            tasks.push(
                'uglify', 
                'clean:scripts',
                'cssmin',
                'clean:styles'
            );
        };
        return tasks;
    };
    
    // Default Grunt task
    grunt.registerTask('default', [
        'theme:' + theme,
        'browserSync',
        'watch'
    ]);

    // Compile a specific theme
    grunt.registerTask('theme', function(target) {
        target = target || theme;
        grunt.config('theme', target);
        grunt.task.run(compile(env));
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