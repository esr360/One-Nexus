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
        
    // Set the desired development environment
    this.env = 'dev';

    // Lint files when compiling them
    this.lint = false;

    // Test files when compiling them
    this.test = true;

    // Map the project's architecture into one Grunt can use
    // Paths ae relative to the project root
    this.project = {
        source: [      'src/', {
            images:    'src/images/',
            scripts:   'src/modules/',
            styles:    'src/modules/',
            theme:     'src/themes/<%=theme%>/',
            templates: 'templates/'
        }],
        dist: [        'dist/', {
            images:    'dist/assets/images/',
            scripts:   'dist/assets/scripts/',
            styles:    'dist/assets/styles/',
            theme:     'dist/assets/themes/<%=theme%>/',
            templates: 'dist/'
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
        project.vendor + 'flickity/dist/flickity.css'
    ];

    // The name of your project's source asset
    this.src = 'app';

    //The name of your project's compiled & distributed asset
    this.dist = 'app';

    return this;
}