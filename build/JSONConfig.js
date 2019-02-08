/**
 * One-Nexus tool for generating JSON configuration for modules
 */

require('@babel/register')();
require('jsdom-global')();

const fs = require('fs');
const execFile = require('child_process').execFile;
const deepExtend = require('deep-extend');

const PROJECT_ROOT = __dirname.replace('/build', '');

// Tool Config
const MODULES_PATH = '/src/ui/modules'; // relative to PROJECT_ROOT
const FOUNDATION_FILE = '/src/ui/foundation/index.js'; // relative to PROJECT_ROOT
const DEFAULTS_FILE = '/assets/config.js'; // relative to MODULE_PATH
const OUTPUT_FILE = '/assets/config.json'; // relative to MODULE_PATH
const INDENTATION = 4;

// UI Assets
const FOUNDATION = Object.assign({}, require(PROJECT_ROOT + FOUNDATION_FILE));
const APP_CONFIG = require(PROJECT_ROOT + '/src/app.json').app.ui;
const MODULES = require(PROJECT_ROOT + MODULES_PATH);
const THEME_NAME = APP_CONFIG.theme;
const THEME = require(PROJECT_ROOT + `/src/ui/themes/${THEME_NAME}.json`).theme;

// Theme
const _THEME_ = deepExtend(FOUNDATION, THEME, APP_CONFIG);

/**
 * @TODO insert to debug warnings/errors/messages
 */

// Tool
execFile('find', [PROJECT_ROOT + MODULES_PATH], (err, stdout, stderr) => {
    var file_list = stdout.split('\n');

    Object.keys(MODULES).forEach(key => {
        const MODULE_PATH = file_list.filter(file => file.indexOf(key) !== -1)[0];

        if (!MODULE_PATH) return console.log(`No path found for module: ${key}`);

        const MODULE_DEFAULTS = require(MODULE_PATH + DEFAULTS_FILE).default;
        const MODULE_CONFIG = MODULE_DEFAULTS(_THEME_);
        const OUTPUT_PATH = MODULE_PATH + OUTPUT_FILE;

        fs.writeFile(OUTPUT_PATH, JSON.stringify(MODULE_CONFIG, null, INDENTATION), 'utf8', (error, result) => {
            if (error) console.log(error);
        });

        console.log(`Successfully generated config.json for ${key} module`);
    });
});