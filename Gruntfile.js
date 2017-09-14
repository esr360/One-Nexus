///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

module.exports = function(grunt) {

    // Allows the passing of multiple flags on the command line
    require('nopt-grunt-fix')(grunt);

    // Import config
    const CONFIG = require('./build/config')();
    
    /**************************************************************
     * Config
     *************************************************************/

    const THEME    = grunt.option('theme')         || CONFIG.theme;
    const THEMES   = grunt.option('themes')        || CONFIG.themes;
    const ENV      = grunt.option('env')           || CONFIG.env;
    const PROJECT  = grunt.option('project')       || CONFIG.project;
    const SRC      = grunt.option('src')           || CONFIG.src;
    const DIST     = grunt.option('dist')          || CONFIG.dist;
    const SCRIPTS  = grunt.option('scripts')       || CONFIG.scripts;
    const $SCRIPTS = grunt.option('globalScripts') || CONFIG.globalScripts;
    const $STYLES  = grunt.option('globalStyles')  || CONFIG.globalStyles;
    
    /**************************************************************
     * Packages
     *************************************************************/
        
    grunt.initConfig({
		
        pkg: grunt.file.readJSON('package.json'),

        // Pass the theme variable to allow it to be dynamic
        theme: THEME,

        /**
         * Text Replace
         * @see https://github.com/yoniholmes/grunt-text-replace
         */
        replace: {},
        
        /**
         * Clean
         * @see https://github.com/gruntjs/grunt-contrib-clean
         */
        clean: {
            dist: [
                PROJECT.dist[0] + '*', 
                '!' + PROJECT.dist[1].themes[0] + '**'
            ],
            scripts: [
                PROJECT.dist[0] + '**/*.js', 
                '!' + PROJECT.dist[0] + '**/*.min.js'
            ],
            styles: [
                PROJECT.dist[0] + '**/*.css', 
                '!' + PROJECT.dist[0] + '**/*.min.css'
            ],
            images: {
                src: PROJECT.dist[1].images
            },
            theme: {
                src: PROJECT.dist[1].themes[1].theme
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
                        src: [$SCRIPTS],
                        dest: PROJECT.dist[1].scripts,
                        expand: true,
                        flatten: true
                    },
                    {
                        src: [$STYLES],
                        dest: PROJECT.dist[1].styles,
                        expand: true,
                        flatten: true
                    }
                ]
            },
            images: {
                files: [{
                    cwd: PROJECT.source[1].images,
                    src: '**/*',
                    dest: PROJECT.dist[1].images,
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
                    [PROJECT.dist[1].themes[1].theme + DIST + '.css']: 
                    PROJECT.source[1].themes[1].theme + '<%=theme%>.scss'
                }
            },
            prod: {
                options: {
                    style: 'compressed',
                    require: 'sass-json-vars',
                    sourcemap: 'none'
                },
                files: {
                    [PROJECT.dist[1].themes[1].theme + DIST + '.min.css']: 
                    PROJECT.source[1].themes[1].theme + '<%=theme%>.scss'
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
                        cwd: PROJECT.dist[1].themes[1].theme,
                        src: ['*.css', '!*.min.css'],
                        dest: PROJECT.dist[1].themes[1].theme,
                        ext: '.min.css'
                    },
                    {
                        expand: true,
                        cwd: PROJECT.dist[1].styles,
                        src: ['*.css', '!*.min.css'],
                        dest: PROJECT.dist[1].styles,
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
                    PROJECT.dist[1].styles + '**/*.css',
                    PROJECT.dist[1].themes[1].theme + '**/*.css'
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
                cwd: PROJECT.dist[0],
                src: ['**/*.css', '!**/*.min.css'],
                dest: PROJECT.dist[0],
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
                src: SCRIPTS,
                dest: PROJECT.dist[1].themes[1].theme + DIST + '.js'
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
                    src: PROJECT.dist[1].scripts + '*.js',
                    dest: PROJECT.dist[1].scripts,
                    expand: true,
                    flatten: true,
                    rename: function(dest, src) { 
                        return dest + '/' + src.replace('.js', '.min.js'); 
                    }
                }]
            },
            themes: {
                files: [{ 
                    src: PROJECT.dist[1].themes[1].theme + '**/*.js',
                    dest: PROJECT.dist[1].themes[1].theme,
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
            source: [PROJECT.source[0] + '**/*.scss'],
            options: {
                config: '.scss-lint.yml',
                colorizeOutput: false
            }
        },

        /**
         * JSHint
         * @see https://github.com/gruntjs/grunt-contrib-jshint
         */
        jshint: {
            options: {
                esversion: 6
            },
            source: [PROJECT.source[0] + '**/*.js']
        },

        /**
         * Mocha Test
         * @see https://github.com/pghalliday/grunt-mocha-test
         */
        mochaTest: {
            options: {
                reporter: 'spec'
            },
            scss: {
                src: [PROJECT.test[1].styles + 'tests.js']
            },
            js: {
                options: {
                    require: ['babel-core/register']
                },
                src: [PROJECT.test[1].scripts + 'tests.js']
            }
        },

        /**
         * SassDoc
         * @see https://github.com/SassDoc/grunt-sassdoc
         */
        sassdoc: {
            dist: {
                src: [
                    PROJECT.source[0] + '**/*.scss'
                ],
                options: {
                    dest: PROJECT.docs[1].styles
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
                    PROJECT.source[0] + '**/*.js'
                ],
                options: {
                    destination: PROJECT.docs[1].scripts
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
                layoutdir: PROJECT.source[1].templates + 'layouts/',
                partials: PROJECT.source[1].templates + 'partials/**/*.hbs',
                helpers: [PROJECT.source[1].templates + 'helpers/**/*.js']
            },
            dist: {
                cwd: PROJECT.source[1].templates + 'pages/',
                dest: PROJECT.dist[1].templates,
                expand: true,
                src: '**/*.hbs',
                options: {
                    assets: './' + PROJECT.dist[0],
                    environment: ENV,
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
                src: [PROJECT.dist[0]]
            },
            options: {
                server: ['./' + PROJECT.dist[0]],
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
                files: [PROJECT.source[0] + '**/*.scss'],
                tasks: [ 
                    'sass:' + ENV,
                    'postcss:dist',
                    'csscomb',
                    'scsslint',
                    'mochaTest:scss',
                    'sassdoc',
                    'notify:css'
                ],
            },
            scripts: {
                files: [
                    PROJECT.source[0] + SRC + '.js',
                    SCRIPTS,
                    PROJECT.source[0] + 'tools/**/*.js'
                ],
                tasks: [
                    'jshint',
                    'mochaTest:js',
                    'jsdoc',
                    'browserify',
                    'notify:scripts'
                ]
            },
            config: {
                files: [PROJECT.source[0] + '**/*.json'],
                tasks: [
                    'sass:' + ENV,
                    'postcss:dist',
                    'csscomb',
                    'scsslint',
                    'mochaTest:scss',
                    'sassdoc',
                    'notify:css',
                    'jshint',
                    'mochaTest:js',
                    'jsdoc',
                    'browserify',
                    'notify:scripts'
                    //'<%=watch.scss.tasks%>',
                    //'<%=watch.scripts.tasks%>',
                ]
            },
            images: {
                files: PROJECT.source[1].images + '**/*',
                tasks: [
                    'clean:images',
                    'copy:images'
                ]
            },
            templates: {
                files: PROJECT.source[1].templates + '**/*',
                tasks: [
                    'assemble',
                    'notify:templates'
                ]
            },
            grunt: {
                files: 'Gruntfile.js',
                tasks: ['theme:' + theme]
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
    grunt.loadNpmTasks('grunt-mocha-test');
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
            'lint',
            'test',
            'sass:' + environment,
            'postcss',
            'csscomb',
            'browserify',
            'copy:dist',
            'copy:images',
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
        grunt.task.run(compile(ENV));
    });

    // Compile all themes
    grunt.registerTask('themes', function() {
        themes.forEach(function(theme) {
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
        'mochaTest'
    ]);

    // Docs
    grunt.registerTask('docs', [
        'sassdoc',
        'jsdoc'
    ]);

};