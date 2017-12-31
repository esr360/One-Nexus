///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

module.exports = function config() {

    // Set the default theme to compile assets for
    this.theme = 'one-nexus';

    // List of all themes used by the project
    this.themes = [
        'one-nexus'
    ];
        
    // Set the desired development environment ('dev'|'prod')
    this.env = 'dev';

    // Set the app assets to compile into the 'dist' directory
    this.compile = ['styles', 'scripts', 'images', 'views'];

    // Set the other assets to copy into the 'dist' directory
    this.assets = ['styles', 'scripts', 'images'];

    // Lint files when compiling them
    this.lint = true;

    // Test files when compiling them
    this.test = true;

    // Map the project's architecture into one Grunt can use
    // Paths are relative to the project root
    this.project = {
        source:        'src/',
        ui: [          'src/ui', {
            images:    'src/ui/images/',
            theme:     'src/ui/themes/<%=theme%>/',
        }],
        views:         'src/',
        dist: [        'dist/', {
            images:    'dist/assets/images/',
            scripts:   'dist/assets/scripts/',
            styles:    'dist/assets/styles/',
            views:     'dist/'
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

    // Set all optional scripts to be used by the project
    this.scripts = [];

    // Set all optional styles to be used by the project
    this.styles = [
        this.project.vendor + 'flickity/dist/flickity.css'
    ];

    // The name of your project's source files
    this.src = 'app'; // {this.src}.js | {this.src}.scss

    // The name of your project's compiled & distributed files
    this.dist = 'app'; // {this.dist}.js | {this.dist}.css

    // Use Node-Sass to compile Sass?
    this.nodeSass = true;

    return this;
}