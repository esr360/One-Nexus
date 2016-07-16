/**
 * One Nexus
 * Grunt Setup
 * @uthor Edmund Reed | @esr360
 */

module.exports = function(grunt) {

    // Allows the passing of multiple flags on the command line
    require('nopt-grunt-fix')(grunt);
    
    //-------------------------------------------------------------
    // Config
    //-------------------------------------------------------------
    
    // Set which theme you would like to build assets for
    var theme = grunt.option('theme') || 'One-Nexus';
    
    // 'dev' | 'prod' - used to determine asset minification
    var env = grunt.option('env') || 'dev';
    
    //-------------------------------------------------------------
    
    var themePath = 'themes/' + theme + '/';

    // Built Asset Paths
    var buildScripts = 'app/scripts/';
    var buildStyles  = 'app/styles/';
    
    // Theme Asset Paths
    var themeBuildScripts = 'app/' + themePath;
    var themeBuildStyles  = 'app/' + themePath;

    // Owl Carousel
    var owlPath = 'assets/vendor/Owl-Carousel/src/js/'; 
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

    // App Scripts
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

    // Separate Scripts
    var _separateScripts = [
        'assets/vendor/jQuery/dist/jquery.js',
        'assets/vendor/pseudojQuery/src/pseudojQuery-start.js',
        'assets/vendor/pseudojQuery/src/pseudojQuery-end.js',
        'assets/vendor/Masonry/dist/masonry.pkgd.js',
        'assets/vendor/Isotope/dist/isotope.pkgd.js',
        'assets/vendor/Infinite-AJAX-Scroll/dist/jquery-ias.js',
        'assets/vendor/Enlighter/Build/EnlighterJS.js',
        'assets/vendor/MooTools-Core/build/mootools-core.js'
    ];

    // Separate Styles
    var _separateStyles = [
        'assets/vendor/Enlighter/Build/EnlighterJS.css'
    ];

    //-------------------------------------------------------------
    // Tasks
    //-------------------------------------------------------------
        
    grunt.initConfig({
		
        pkg: grunt.file.readJSON('package.json'),
        
        //-----------------------------------------------------
        // Clean
        // https://github.com/gruntjs/grunt-contrib-clean
        //-----------------------------------------------------
    
        clean: {
            app: {
                src: ['app/*', '!app/themes/**', '!app/images/**']
            },
            theme: {
                src: 'app/themes/' + theme
            },
            themeScripts: [
                'app/themes/' + theme + '/**/*.js', 
                '!app/themes/' + theme + '/**/*.min.js'
            ],
            scripts: [
                'app/scripts/**/*.js', '!app/**/*.min.js'
            ],
            styles: [
                'app/**/*.css', '!app/**/*.min.css'
            ],
            images: {
                src: 'app/images'
            }
        },
      
        //---------------------------------------------------------
        // Concat
        // https://github.com/gruntjs/grunt-contrib-concat
        //---------------------------------------------------------

        concat: {
            app: {
                src: _scripts,
                dest: themeBuildScripts + 'app.js',
            }
        },
      
        //---------------------------------------------------------
        // JS-Hint
        // https://github.com/gruntjs/grunt-contrib-jshint
        //---------------------------------------------------------
        
        jshint: {
            app: [
                'Gruntfile.js', 
                'assets/includes/**/*.js',
                'assets/modules/**/*.js',
                'assets/themes/**/*.js'
            ]
        },
      
        //---------------------------------------------------------
        // Copy
        // https://github.com/gruntjs/grunt-contrib-copy
        //---------------------------------------------------------
        
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
                        src: [_separateScripts],
                        dest: buildScripts,
                        expand: true,
                        flatten: true
                    },
                    {
                        src: [_separateStyles],
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
      
        //---------------------------------------------------------
        // Uglify
        // https://github.com/gruntjs/grunt-contrib-uglify
        //---------------------------------------------------------
		
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
      
        //---------------------------------------------------------
        // Sass
        // https://github.com/sindresorhus/grunt-sass
        //---------------------------------------------------------
        
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
        
        //---------------------------------------------------------
        // PostCSS
        // https://github.com/nDmitry/grunt-postcss
        //---------------------------------------------------------
      
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
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
        
        //---------------------------------------------------------
        // grunt-contrib-cssmin
        // https://github.com/gruntjs/grunt-contrib-cssmin
        //---------------------------------------------------------
        
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
  
        //---------------------------------------------------------
        // Scss Lint
        // https://github.com/ahmednuaman/grunt-scss-lint
        //---------------------------------------------------------
        
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
      
        //---------------------------------------------------------
        // Watch
        // https://github.com/gruntjs/grunt-contrib-watch
        //---------------------------------------------------------
  
        watch: {
            scripts: {
                files: _scripts,
                tasks: [
                    'concat', 
                    'notify:scripts'
                ],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: [
                    'assets/**/*.scss',
                    '!assets/vendor/',
                ],
                tasks: [ 
                    'sass:' + env, 
                    'postcss',
                    'notify:css'
                ],
                options: {
                    spawn: false,
                }
            },
            images: {
                files: 'assets/images/**/*',
                tasks: [
                    'clean:images',
                    'copy:images'
                ],
                options: {
                    spawn: false,
                },
            },
        },
      
        //---------------------------------------------------------
        // Grunt Text Replace
        // https://github.com/yoniholmes/grunt-text-replace
        //---------------------------------------------------------
        
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
      
        //---------------------------------------------------------
        // SassDoc
        // https://github.com/SassDoc/grunt-sassdoc
        //---------------------------------------------------------

        sassdoc: {
            default: {
                src: 'assets',
                dest: 'docs',
            },
        },
      
        //---------------------------------------------------------
        // Notify
        // https://github.com/dylang/grunt-notify
        //---------------------------------------------------------
        
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

    //-------------------------------------------------------------
    // Load Npm Tasks
    //-------------------------------------------------------------
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    //grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sassdoc');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-text-replace');
    
    //-------------------------------------------------------------
    // Register Tasks
    //-------------------------------------------------------------
    
    // Compile Assets
    var gruntCompile = function(environment) {
        var assetTasks = [
            'clean:app',
            'clean:theme',
            'replace:sassTheme',
            'copy:app',
            'concat',
            'sass:' + environment,
            'postcss'
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
    
    //Default
    grunt.registerTask('default', [
        'compile',
        'notify:app',
        'watch',
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
    
    // Run asset linting and tests
    grunt.registerTask('test', [
        'jshint',
        'scsslint'
    ]);

}; // function(grunt)