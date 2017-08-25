///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

module.exports = function() {

    // Set the default theme to compile assets for
    this.theme = 'One-Nexus';

    // List of all themes used by the project
    this.themes = [
        'One-Nexus'
    ];
        
    // Set your desired development environment
    this.env = 'dev';

    // Map the project's architecture into one Grunt can use
    // Paths ae relative to the project root
    this.project = {
        dist: [        'dist/', {
            images:    'dist/assets/images/',
            scripts:   'dist/assets/scripts/',
            styles:    'dist/assets/styles/',
            themes: [  'dist/assets/themes/', {
                theme: 'dist/assets/themes/<%=theme%>/'
            }],
            templates: 'dist/'
        }],
        source: [      'assets/', {
            images:    'assets/images/',
            scripts:   'assets/modules/',
            styles:    'assets/modules/',
            themes: [  'assets/themes/', {
                theme: 'assets/themes/<%=theme%>/'
            }],
            templates: 'templates/'
        }],
        vendor:        'node_modules/',
        docs: [        'docs/', {
            scripts:   'docs/js/',
            styles:    'docs/sass/'
        }],
        test: [        'unit-testing/', {
            scripts:   'unit-testing/js/',
            styles:    'unit-testing/scss/'
        }]
    };

    // Set the scripts used to create the theme's main js file
    this.scripts = [
        this.project.vendor + 'Synergy/src/js/synergy.js',
        this.project.source[0] + 'modules/**/*.js',
        this.project.source[1].themes[1].theme + '<%=theme%>.js'
    ],

    // Set all optional scripts to be used by the project
    this.globalScripts = [];

    // Set all optional styles to be used by the project
    this.globalStyles = [
        project.vendor + 'flickity/dist/flickity.css'
    ];

    // The name of your project's source asset
    this.src = 'app';

    //The name of your project's compiled & distributed asset
    this.dist = 'app';

    return this;
}