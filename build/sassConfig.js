//
require('@babel/register')();
require('jsdom-global')();

const fs = require('fs');
const execFile = require('child_process').execFile;
const deepExtend = require('deep-extend');

//
const FOUNDATION = require('../src/ui/foundation');
const APP_CONFIG = require('../src/app.json');
const MODULES = require('../src/ui/modules');
const THEME_NAME = APP_CONFIG.app.ui.theme;
const THEME = require(`../src/ui/themes/${THEME_NAME}.json`).theme;

//
const _THEME_ = deepExtend({ 
    colors: FOUNDATION.colors,
    core: FOUNDATION.core,
    typography: FOUNDATION.typography,
    grid: FOUNDATION.grid
}, THEME, APP_CONFIG.app.ui);

execFile('find', ['./src/ui/modules'], (err, stdout, stderr) => {
    var file_list = stdout.split('\n');

    for (const [key, value] of Object.entries(MODULES)) {
        const MODULE_PATH = file_list.filter(file => file.indexOf(key) !== -1)[0];

        if (!MODULE_PATH) {
            return console.log(`No path found for module '${key}'`);
        }

        const MODULE_DEFAULTS = require(`.${MODULE_PATH}/assets/config.js`).default;
        const MODULE_CONFIG = MODULE_DEFAULTS(_THEME_);

        const OUTPUT_PATH = __dirname.replace('/build', '') + MODULE_PATH.substring(1) + '/assets/config.json';

        fs.writeFile(OUTPUT_PATH, JSON.stringify(MODULE_CONFIG, null, 4), 'utf8', (error, result) => {
            if (error) console.log('error', error);
        });

        console.log(`Successfully generated config.json for ${key} module`);
    }
});