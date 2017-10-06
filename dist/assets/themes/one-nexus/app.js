(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
    "module-namespace": "OneNexus-",
    "component-glue": "_",
    "modifier-glue": "-"
}
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.modifier = exports.component = exports.stripModifiers = exports.isValidSelector = exports.getModuleName = exports.getModifiers = exports.getGlue = exports.getDomNodes = exports.getComponents = exports.getBlockName = exports.deepextend = exports.global = undefined;

var _config = require('./config.json');

var global = _interopRequireWildcard(_config);

var _deepExtend = require('deep-extend');

var _deepExtend2 = _interopRequireDefault(_deepExtend);

var _getBlockName = require('./utilities/getBlockName');

var _getComponents = require('./utilities/getComponents');

var _getDomNodes = require('./utilities/getDomNodes');

var _getGlue = require('./utilities/getGlue');

var _getModifiers = require('./utilities/getModifiers');

var _getModuleName = require('./utilities/getModuleName');

var _isValidSelector = require('./utilities/isValidSelector');

var _stripModifiers = require('./utilities/stripModifiers');

var _component = require('./tools/component');

var _modifier = require('./tools/modifier');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.global = global;

// Vendor
//*****************************************************************

///****************************************************************
/// Synergy - https://github.com/esr360/Synergy
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

// Export global config

exports.deepextend = _deepExtend2.default;

// Tools & Utilities
//*****************************************************************

// Utilities


// Tools

exports.getBlockName = _getBlockName.getBlockName;
exports.getComponents = _getComponents.getComponents;
exports.getDomNodes = _getDomNodes.getDomNodes;
exports.getGlue = _getGlue.getGlue;
exports.getModifiers = _getModifiers.getModifiers;
exports.getModuleName = _getModuleName.getModuleName;
exports.isValidSelector = _isValidSelector.isValidSelector;
exports.stripModifiers = _stripModifiers.stripModifiers;
exports.component = _component.component;
exports.modifier = _modifier.modifier;

/**
 * Synergy Module
 * 
 * @author @esr360 <http://twitter.com/esr360>
 * 
 * @module Synergy
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els - Synergy selector to match elements
 * @param {Function} [callback] - function to call on matched elements
 * @param {Object} [config] - config to use when calling the function
 * @param {Object} [custom] - custom config to use in callback
 * @param {Object} [parser] - custom parser to use for configuration
 */

var Synergy = function Synergy(els, callback, config, custom, parser) {

    var componentGlue = (0, _getGlue.getGlue)('component', custom);
    var modifierGlue = (0, _getGlue.getGlue)('modifier', custom);
    var moduleName = (0, _getModuleName.getModuleName)(els, config);
    var domNodes = (0, _getDomNodes.getDomNodes)(els, moduleName, modifierGlue);
    var components = (0, _getComponents.getComponents)(domNodes, moduleName, componentGlue);
    var modifiers = (0, _getModifiers.getModifiers)(domNodes, moduleName, modifierGlue);

    // Merge default/custom options
    var options = config ? (0, _deepExtend2.default)(config[Object.keys(config)[0]], custom) : custom;

    // Parse values using custom parser
    if (typeof parser === 'function') {
        options = parser(options);
    } else if (parser && typeof parser.parse === 'function') {
        options = parser.parse(options);
    }

    if (domNodes) {
        if (domNodes instanceof NodeList) {
            domNodes.forEach(function (el) {
                return el.setAttribute('data-module', moduleName);
            });
        } else if (domNodes instanceof HTMLElement) {
            domNodes.setAttribute('data-module', moduleName);
        }
    }

    // Elements found by the Synergy query
    exports.query = domNodes;

    exports.modifier = function (query, operator) {
        var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : domNodes;

        return (0, _modifier.modifier)({
            target: element,
            module: moduleName,
            modifiers: modifiers,
            query: query,
            operator: operator,
            glue: modifierGlue
        });
    };

    exports.component = function (query, operator) {
        var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : domNodes;

        return (0, _component.component)({
            target: element,
            module: moduleName,
            components: components,
            query: query,
            operator: operator,
            componentGlue: componentGlue,
            modifierGlue: modifierGlue
        });
    };

    if (callback) {
        if (domNodes instanceof HTMLElement) {
            return callback(domNodes, options, exports);
        } else {
            domNodes.forEach(function (el) {
                return callback(el, options, exports);
            });
        }
    }

    return exports;
};

exports.default = Synergy;

},{"./config.json":1,"./tools/component":3,"./tools/modifier":4,"./utilities/getBlockName":5,"./utilities/getComponents":6,"./utilities/getDomNodes":7,"./utilities/getGlue":8,"./utilities/getModifiers":9,"./utilities/getModuleName":10,"./utilities/isValidSelector":11,"./utilities/stripModifiers":12,"deep-extend":15}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = component;

var _synergy = require('../synergy');

var Synergy = _interopRequireWildcard(_synergy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Component
 * 
 * @param {*} options.target
 * @param {*} options.module
 * @param {*} options.components
 * @param {*} options.query
 * @param {*} options.operator
 */
function component(options) {

    var target = options.target instanceof HTMLElement ? options.target : options.target[0];
    var namespace = Synergy.getModuleName(target) + options.componentGlue + options.query;
    var components = Synergy.getComponents(target, options.module, options.componentGlue);
    var selector = '.' + namespace + ', [class*="' + namespace + options.modifierGlue + '"]';
    var querySelector = document.querySelectorAll(selector);

    if (options.query) {

        if (target instanceof HTMLElement) {

            var childComponent = target.querySelectorAll(selector);

            if (options.operator) {
                if (options.operator === 'set') {
                    return toggleComponent(options.module, target, options.query, 'set', options.componentGlue);
                } else if (options.operator === 'unset') {
                    return toggleComponent(options.module, target, options.query, 'unset', options.componentGlue);
                } else if (options.operator === 'add' || options.operator === 'remove') {
                    return target.classList[options.operator](namespace);
                }
            }

            if (childComponent.length !== 0 && !(options.target instanceof NodeList)) {
                return childComponent;
            }

            var matchesQuery = false;

            components.forEach(function (component) {
                if (options.query === component) {
                    matchesQuery = true;

                    return matchesQuery;
                }
            });

            if (matchesQuery || options.operator == 'isset') return matchesQuery;

            return querySelector.length === 0 ? false : querySelector;
        }
    }

    return components;
}

/**
 * Toggle a component on a module
 * 
 * @param {*} moduleName 
 * @param {*} target 
 * @param {*} query 
 * @param {*} operator 
 */
function toggleComponent(moduleName, target, query, operator, glue) {
    return Array.prototype.forEach.call(target.classList, function (className) {
        if (className.indexOf(moduleName) === 0) {
            target.classList.remove(className);
            target.classList.add(operator === 'set' ? '' + className + glue + query : className.replace(glue + query, ''));
        }
    });
}

},{"../synergy":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.modifier = modifier;

var _synergy = require('../synergy');

var Synergy = _interopRequireWildcard(_synergy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Modifier
 * 
 * @param {*} options.target
 * @param {*} options.module
 * @param {*} options.modifiers
 * @param {*} options.query
 * @param {*} options.operator
 */
function modifier(options) {

    var target = options.target instanceof HTMLElement ? options.target : options.target[0];
    var namespace = Synergy.getBlockName(target, options.module, options.glue) + options.glue + options.query;
    var modifiers = Synergy.getModifiers(target, options.module, options.glue);
    var selector = '.' + namespace + ', [class*="' + namespace + options.glue + '"]';
    var querySelector = document.querySelectorAll(selector);

    if (options.query) {

        if (target instanceof HTMLElement) {

            var childModifier = target.querySelectorAll(selector);

            if (options.operator) {
                if (options.operator === 'set') {
                    return toggleModifier(options.module, target, options.query, 'set', options.glue);
                } else if (options.operator === 'unset') {
                    return toggleModifier(options.module, target, options.query, 'unset', options.glue);
                } else if (options.operator === 'add' || options.operator === 'remove') {
                    return target.classList[options.operator](namespace);
                }
            }

            if (childModifier.length !== 0) return childModifier;

            var matchesQuery = false;

            var query = modifiers !== options.modifiers ? [options.query] : options.modifiers;

            modifiers.forEach(function (modifier) {
                query.forEach(function (queryModifier) {
                    if (queryModifier === modifier) {
                        matchesQuery = true;

                        return matchesQuery;
                    }
                });
            });

            if (matchesQuery || options.operator == 'isset') return matchesQuery;

            return querySelector.length === 0 ? false : querySelector;
        }
    }

    return modifiers;
}

/**
 * Toggle a modifier on a module
 * 
 * @function toggleModifier
 * 
 * @param {*} moduleName 
 * @param {*} target 
 * @param {*} query 
 * @param {*} operator 
 */
function toggleModifier(moduleName, target, query, operator, glue) {
    return Array.prototype.forEach.call(target.classList, function (className) {
        if (className.indexOf(moduleName) === 0) {
            target.classList.remove(className);
            target.classList.add(operator === 'set' ? className + glue + query : className.replace(glue + query, ''));
        }
    });
}

},{"../synergy":2}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBlockName = getBlockName;

var _synergy = require('../synergy');

var Synergy = _interopRequireWildcard(_synergy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Get the Synergy block name of an HTMLElement
 * 
 * @param {*} block
 * @param {String} module
 */
function getBlockName(block, module, modifierGlue) {
    var blockName = void 0;

    if (block instanceof HTMLElement) {
        Array.prototype.forEach.call(block.classList, function (className) {
            if (className.indexOf(module) === 0) {
                blockName = Synergy.stripModifiers(className, module, modifierGlue);
            }
        });
    }

    return blockName;
}

},{"../synergy":2}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getComponents = getComponents;

var _synergy = require('../synergy');

var Synergy = _interopRequireWildcard(_synergy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Retrieve any components of a Synergy HTML Element
 * 
 * @param {*} block
 * @param {String} module
 */
function getComponents(block, module, glue) {
    var components = void 0;

    if (block instanceof HTMLElement) {
        Array.prototype.forEach.call(block.classList, function (className) {
            if (className.indexOf(module) === 0) {
                components = className.split(glue).slice(1);
            }
        });
    }

    return components;
}

},{"../synergy":2}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getDomNodes = getDomNodes;

var _synergy = require('../synergy');

var Synergy = _interopRequireWildcard(_synergy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Retrieve any components of a Synergy HTML Element
 * 
 * @param {*} query
 * @param {String} module
 */
function getDomNodes(query, module, modifierGlue) {
    if (!Synergy.isValidSelector) {
        console.warn('Synergy:getDomNodes - Synergy is missing `isValidSelector()`');
    }

    var domNodes = void 0;

    if (typeof query === 'string') {
        if (Synergy.isValidSelector(query) && document.querySelectorAll(query).length && query !== module) {
            domNodes = document.querySelectorAll(query);
        } else {
            domNodes = document.querySelectorAll('.' + module + ', [class*="' + module + modifierGlue + '"]');
        }
    } else if ((typeof query === 'undefined' ? 'undefined' : _typeof(query)) === 'object') {
        if (query[0] instanceof NodeList || query[0] instanceof HTMLElement) {
            domNodes = query[0];
        } else if (typeof query[0] === 'string') {
            domNodes = document.querySelectorAll('.' + query[0] + ', [class*="' + query[0] + modifierGlue + '"]');
        }
    }

    return domNodes || query;
}

},{"../synergy":2}],8:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getGlue = getGlue;
/**
 * Get glue
 * 
 * @param {String} type - ['component'|'modifier]
 * @param {Object} custom
 * @param {string} glue
 */
function getGlue(type, custom, glue) {
    var defaultGlue = type === 'modifier' ? '-' : '_';

    if (custom && custom.modifierGlue) {
        glue = custom[type + 'Glue'].replace(/'/g, '');
    } else if (window.APPUI && window.APPUI.global && window.APPUI.global[type + '-glue']) {
        glue = window.APPUI.global[type + '-glue'].replace(/'/g, '');
    } else {
        glue = global[type + '-glue'] || defaultGlue;
    }

    return glue;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getModifiers = getModifiers;

var _synergy = require('../synergy');

var Synergy = _interopRequireWildcard(_synergy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Retrieve any modifiers of a Synergy HTML Element
 * 
 * @param {*} block
 * @param {String} module
 */
function getModifiers(block, module, glue) {
    var modifiers = void 0;

    if (block instanceof HTMLElement) {
        Array.prototype.forEach.call(block.classList, function (className) {
            if (className.indexOf(module) === 0) {
                modifiers = className.split(glue).slice(1);
            }
        });
    }

    return modifiers;
}

},{"../synergy":2}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getModuleName = getModuleName;
/**
 * Attempt to retrieve possible module name from query
 * 
 * @param {String|Object|HTMLElement} query - query to retrieve module name
 * @param {Object} [config] - object to retrieve module name
 */
function getModuleName(query, config, componentGlue) {
    if (typeof query === 'string' && query.match('^[a-zA-Z0-9_-]+$')) {
        return query;
    } else if ((typeof query === 'undefined' ? 'undefined' : _typeof(query)) === 'object' && typeof query[1] === 'string') {
        return query[1];
    } else if (config && config[Object.keys(config)[0]].name) {
        return config[Object.keys(config)[0]].name;
    } else if (query instanceof HTMLElement) {
        if (typeof Element.prototype.closest !== 'undefined' && query.closest('[data-module]')) {
            return query.closest('[data-module]').getAttribute('data-module');
        } else if (query.classList.length === 1) {
            return query.classList[0].split(/-(.+)/)[0];
        } else if (query.id) {
            return query.id;
        }
    }
}

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidSelector = isValidSelector;
/**
 * Test the validity (not existance) of a CSS selector
 * 
 * @param {String} selector - the selector to test for validity
 * @returns {Bool}
 * 
 * @example isValidSelector('[data-foo-bar]') // returns true
 * @example isValidSelector(4) // returns false
 */
function isValidSelector(selector) {
    var stub = document.createElement('br');

    try {
        stub.querySelector(selector);
    } catch (e) {
        return false;
    }

    return true;
}

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stripModifiers = stripModifiers;

var _synergy = require('../synergy');

var Synergy = _interopRequireWildcard(_synergy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Strip any modifiers from a block name
 * 
 * @param {String} block
 * @param {String} module
 */
function stripModifiers(block, module, glue) {
    // remove module name from block
    block = block.replace(module, '');
    // remove modifiers from block
    block = block.split(glue)[0];
    // merge module + remaining block
    block = module + block;

    return block;
}

},{"../synergy":2}],13:[function(require,module,exports){
'use strict';

exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function placeHoldersCount(b64) {
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
}

function byteLength(b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64);
}

function toByteArray(b64) {
  var i, l, tmp, placeHolders, arr;
  var len = b64.length;
  placeHolders = placeHoldersCount(b64);

  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0; i < l; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 0xFF;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 0x3F];
    output += lookup[tmp << 2 & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('');
}

},{}],14:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict';

var base64 = require('base64-js');
var ieee754 = require('ieee754');

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;

var K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
  console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
}

function typedArraySupport() {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
        return 42;
      } };
    return arr.foo() === 42;
  } catch (e) {
    return false;
  }
}

function createBuffer(length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('Invalid typed array length');
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length);
  buf.__proto__ = Buffer.prototype;
  return buf;
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer(arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }
    return allocUnsafe(arg);
  }
  return from(arg, encodingOrOffset, length);
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  });
}

Buffer.poolSize = 8192; // not used by this implementation

function from(value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset);
  }

  return fromObject(value);
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length);
};

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype;
Buffer.__proto__ = Uint8Array;

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(size);
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
  }
  return createBuffer(size);
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding);
};

function allocUnsafe(size) {
  assertSize(size);
  return createBuffer(size < 0 ? 0 : checked(size) | 0);
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size);
};

function fromString(string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  var buf = createBuffer(length);

  var actual = buf.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
  }

  return buf;
}

function fromArrayLike(array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  var buf = createBuffer(length);
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255;
  }
  return buf;
}

function fromArrayBuffer(array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  var buf;
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array);
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype;
  return buf;
}

function fromObject(obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    var buf = createBuffer(len);

    if (buf.length === 0) {
      return buf;
    }

    obj.copy(buf, 0, 0, len);
    return buf;
  }

  if (obj) {
    if (isArrayBufferView(obj) || 'length' in obj) {
      if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
        return createBuffer(0);
      }
      return fromArrayLike(obj);
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
  }
  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return b != null && b._isBuffer === true;
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (isArrayBufferView(string) || isArrayBuffer(string)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0;

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0;

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1;

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset; // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (numberIsNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
    // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0;
    if (isFinite(length)) {
      length = length >>> 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf = this.subarray(start, end);
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype;
  return newBuf;
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset + 3] = value >>> 24;
  this[offset + 2] = value >>> 16;
  this[offset + 1] = value >>> 8;
  this[offset] = value & 0xff;
  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  this[offset + 2] = value >>> 16;
  this[offset + 3] = value >>> 24;
  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : new Buffer(val, encoding);
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return '';
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;

        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

// ArrayBuffers from another context (i.e. an iframe) do not pass the `instanceof` check
// but they should be treated as valid. See: https://github.com/feross/buffer/issues/166
function isArrayBuffer(obj) {
  return obj instanceof ArrayBuffer || obj != null && obj.constructor != null && obj.constructor.name === 'ArrayBuffer' && typeof obj.byteLength === 'number';
}

// Node 0.10 supports `ArrayBuffer` but lacks `ArrayBuffer.isView`
function isArrayBufferView(obj) {
  return typeof ArrayBuffer.isView === 'function' && ArrayBuffer.isView(obj);
}

function numberIsNaN(obj) {
  return obj !== obj; // eslint-disable-line no-self-compare
}

},{"base64-js":13,"ieee754":31}],15:[function(require,module,exports){
(function (Buffer){
/*!
 * @description Recursive object extending
 * @author Viacheslav Lotsmanov <lotsmanov89@gmail.com>
 * @license MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2013-2015 Viacheslav Lotsmanov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isSpecificValue(val) {
	return val instanceof Buffer || val instanceof Date || val instanceof RegExp ? true : false;
}

function cloneSpecificValue(val) {
	if (val instanceof Buffer) {
		var x = new Buffer(val.length);
		val.copy(x);
		return x;
	} else if (val instanceof Date) {
		return new Date(val.getTime());
	} else if (val instanceof RegExp) {
		return new RegExp(val);
	} else {
		throw new Error('Unexpected situation');
	}
}

/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
	var clone = [];
	arr.forEach(function (item, index) {
		if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && item !== null) {
			if (Array.isArray(item)) {
				clone[index] = deepCloneArray(item);
			} else if (isSpecificValue(item)) {
				clone[index] = cloneSpecificValue(item);
			} else {
				clone[index] = deepExtend({}, item);
			}
		} else {
			clone[index] = item;
		}
	});
	return clone;
}

/**
 * Extening object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
var deepExtend = module.exports = function () /*obj_1, [obj_2], [obj_N]*/{
	if (arguments.length < 1 || _typeof(arguments[0]) !== 'object') {
		return false;
	}

	if (arguments.length < 2) {
		return arguments[0];
	}

	var target = arguments[0];

	// convert arguments to array and cut off target object
	var args = Array.prototype.slice.call(arguments, 1);

	var val, src, clone;

	args.forEach(function (obj) {
		// skip argument if isn't an object, is null, or is an array
		if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null || Array.isArray(obj)) {
			return;
		}

		Object.keys(obj).forEach(function (key) {
			src = target[key]; // source value
			val = obj[key]; // new value

			// recursion prevention
			if (val === target) {
				return;

				/**
     * if new value isn't object then just overwrite by new value
     * instead of extending.
     */
			} else if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object' || val === null) {
				target[key] = val;
				return;

				// just clone arrays (and recursive clone objects inside)
			} else if (Array.isArray(val)) {
				target[key] = deepCloneArray(val);
				return;

				// custom cloning and overwrite for specific objects
			} else if (isSpecificValue(val)) {
				target[key] = cloneSpecificValue(val);
				return;

				// overwrite by new value if source isn't object or array
			} else if ((typeof src === 'undefined' ? 'undefined' : _typeof(src)) !== 'object' || src === null || Array.isArray(src)) {
				target[key] = deepExtend({}, val);
				return;

				// source value and new value is objects both, extending...
			} else {
				target[key] = deepExtend(src, val);
				return;
			}
		});
	});

	return target;
};

}).call(this,require("buffer").Buffer)
},{"buffer":14}],16:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

(function (window, factory) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition

  if (typeof define == 'function' && define.amd) {
    // AMD
    define(factory);
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }
})(window, function factory() {
  'use strict';

  var matchesMethod = function () {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if (ElemProto.matches) {
      return 'matches';
    }
    // check un-prefixed
    if (ElemProto.matchesSelector) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = ['webkit', 'moz', 'ms', 'o'];

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if (ElemProto[method]) {
        return method;
      }
    }
  }();

  return function matchesSelector(elem, selector) {
    return elem[matchesMethod](selector);
  };
});

},{}],17:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

(function (global, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if (typeof define == 'function' && define.amd) {
    // AMD - RequireJS
    define(factory);
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }
})(typeof window != 'undefined' ? window : undefined, function () {

  "use strict";

  function EvEmitter() {}

  var proto = EvEmitter.prototype;

  proto.on = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // set events hash
    var events = this._events = this._events || {};
    // set listeners array
    var listeners = events[eventName] = events[eventName] || [];
    // only add once
    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }

    return this;
  };

  proto.once = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // add event
    this.on(eventName, listener);
    // set once flag
    // set onceEvents hash
    var onceEvents = this._onceEvents = this._onceEvents || {};
    // set onceListeners object
    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
    // set flag
    onceListeners[listener] = true;

    return this;
  };

  proto.off = function (eventName, listener) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    var index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index, 1);
    }

    return this;
  };

  proto.emitEvent = function (eventName, args) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    // copy over to avoid interference if .off() in listener
    listeners = listeners.slice(0);
    args = args || [];
    // once stuff
    var onceListeners = this._onceEvents && this._onceEvents[eventName];

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      var isOnce = onceListeners && onceListeners[listener];
      if (isOnce) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off(eventName, listener);
        // unset once flag
        delete onceListeners[listener];
      }
      // trigger listener
      listener.apply(this, args);
    }

    return this;
  };

  proto.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };

  return EvEmitter;
});

},{}],18:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Fizzy UI utils v2.0.5
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

(function (window, factory) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['desandro-matches-selector/matches-selector'], function (matchesSelector) {
      return factory(window, matchesSelector);
    });
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(window, require('desandro-matches-selector'));
  } else {
    // browser global
    window.fizzyUIUtils = factory(window, window.matchesSelector);
  }
})(window, function factory(window, matchesSelector) {

  'use strict';

  var utils = {};

  // ----- extend ----- //

  // extends objects
  utils.extend = function (a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }
    return a;
  };

  // ----- modulo ----- //

  utils.modulo = function (num, div) {
    return (num % div + div) % div;
  };

  // ----- makeArray ----- //

  // turn element or nodeList into an array
  utils.makeArray = function (obj) {
    var ary = [];
    if (Array.isArray(obj)) {
      // use object if already an array
      ary = obj;
    } else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object' && typeof obj.length == 'number') {
      // convert nodeList to array
      for (var i = 0; i < obj.length; i++) {
        ary.push(obj[i]);
      }
    } else {
      // array of single index
      ary.push(obj);
    }
    return ary;
  };

  // ----- removeFrom ----- //

  utils.removeFrom = function (ary, obj) {
    var index = ary.indexOf(obj);
    if (index != -1) {
      ary.splice(index, 1);
    }
  };

  // ----- getParent ----- //

  utils.getParent = function (elem, selector) {
    while (elem.parentNode && elem != document.body) {
      elem = elem.parentNode;
      if (matchesSelector(elem, selector)) {
        return elem;
      }
    }
  };

  // ----- getQueryElement ----- //

  // use element as selector string
  utils.getQueryElement = function (elem) {
    if (typeof elem == 'string') {
      return document.querySelector(elem);
    }
    return elem;
  };

  // ----- handleEvent ----- //

  // enable .ontype to trigger from .addEventListener( elem, 'type' )
  utils.handleEvent = function (event) {
    var method = 'on' + event.type;
    if (this[method]) {
      this[method](event);
    }
  };

  // ----- filterFindElements ----- //

  utils.filterFindElements = function (elems, selector) {
    // make array of elems
    elems = utils.makeArray(elems);
    var ffElems = [];

    elems.forEach(function (elem) {
      // check that elem is an actual element
      if (!(elem instanceof HTMLElement)) {
        return;
      }
      // add elem if no selector
      if (!selector) {
        ffElems.push(elem);
        return;
      }
      // filter & find items if we have a selector
      // filter
      if (matchesSelector(elem, selector)) {
        ffElems.push(elem);
      }
      // find children
      var childElems = elem.querySelectorAll(selector);
      // concat childElems to filterFound array
      for (var i = 0; i < childElems.length; i++) {
        ffElems.push(childElems[i]);
      }
    });

    return ffElems;
  };

  // ----- debounceMethod ----- //

  utils.debounceMethod = function (_class, methodName, threshold) {
    // original method
    var method = _class.prototype[methodName];
    var timeoutName = methodName + 'Timeout';

    _class.prototype[methodName] = function () {
      var timeout = this[timeoutName];
      if (timeout) {
        clearTimeout(timeout);
      }
      var args = arguments;

      var _this = this;
      this[timeoutName] = setTimeout(function () {
        method.apply(_this, args);
        delete _this[timeoutName];
      }, threshold || 100);
    };
  };

  // ----- docReady ----- //

  utils.docReady = function (callback) {
    var readyState = document.readyState;
    if (readyState == 'complete' || readyState == 'interactive') {
      // do async to allow for other scripts to run. metafizzy/flickity#441
      setTimeout(callback);
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  };

  // ----- htmlInit ----- //

  // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
  utils.toDashed = function (str) {
    return str.replace(/(.)([A-Z])/g, function (match, $1, $2) {
      return $1 + '-' + $2;
    }).toLowerCase();
  };

  var console = window.console;
  /**
   * allow user to initialize classes via [data-namespace] or .js-namespace class
   * htmlInit( Widget, 'widgetName' )
   * options are parsed from data-namespace-options
   */
  utils.htmlInit = function (WidgetClass, namespace) {
    utils.docReady(function () {
      var dashedNamespace = utils.toDashed(namespace);
      var dataAttr = 'data-' + dashedNamespace;
      var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
      var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
      var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
      var dataOptionsAttr = dataAttr + '-options';
      var jQuery = window.jQuery;

      elems.forEach(function (elem) {
        var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
        var options;
        try {
          options = attr && JSON.parse(attr);
        } catch (error) {
          // log error, do not initialize
          if (console) {
            console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
          }
          return;
        }
        // initialize
        var instance = new WidgetClass(elem, options);
        // make available via $().data('namespace')
        if (jQuery) {
          jQuery.data(elem, namespace, instance);
        }
      });
    });
  };

  // -----  ----- //

  return utils;
});

},{"desandro-matches-selector":16}],19:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// add, remove cell
(function (window, factory) {
  // universal module definition
  /* jshint strict: false */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['./flickity', 'fizzy-ui-utils/utils'], function (Flickity, utils) {
      return factory(window, Flickity, utils);
    });
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(window, require('./flickity'), require('fizzy-ui-utils'));
  } else {
    // browser global
    factory(window, window.Flickity, window.fizzyUIUtils);
  }
})(window, function factory(window, Flickity, utils) {

  'use strict';

  // append cells to a document fragment

  function getCellsFragment(cells) {
    var fragment = document.createDocumentFragment();
    cells.forEach(function (cell) {
      fragment.appendChild(cell.element);
    });
    return fragment;
  }

  // -------------------------- add/remove cell prototype -------------------------- //

  var proto = Flickity.prototype;

  /**
   * Insert, prepend, or append cells
   * @param {Element, Array, NodeList} elems
   * @param {Integer} index
   */
  proto.insert = function (elems, index) {
    var cells = this._makeCells(elems);
    if (!cells || !cells.length) {
      return;
    }
    var len = this.cells.length;
    // default to append
    index = index === undefined ? len : index;
    // add cells with document fragment
    var fragment = getCellsFragment(cells);
    // append to slider
    var isAppend = index == len;
    if (isAppend) {
      this.slider.appendChild(fragment);
    } else {
      var insertCellElement = this.cells[index].element;
      this.slider.insertBefore(fragment, insertCellElement);
    }
    // add to this.cells
    if (index === 0) {
      // prepend, add to start
      this.cells = cells.concat(this.cells);
    } else if (isAppend) {
      // append, add to end
      this.cells = this.cells.concat(cells);
    } else {
      // insert in this.cells
      var endCells = this.cells.splice(index, len - index);
      this.cells = this.cells.concat(cells).concat(endCells);
    }

    this._sizeCells(cells);

    var selectedIndexDelta = index > this.selectedIndex ? 0 : cells.length;
    this._cellAddedRemoved(index, selectedIndexDelta);
  };

  proto.append = function (elems) {
    this.insert(elems, this.cells.length);
  };

  proto.prepend = function (elems) {
    this.insert(elems, 0);
  };

  /**
   * Remove cells
   * @param {Element, Array, NodeList} elems
   */
  proto.remove = function (elems) {
    var cells = this.getCells(elems);
    var selectedIndexDelta = 0;
    var len = cells.length;
    var i, cell;
    // calculate selectedIndexDelta, easier if done in seperate loop
    for (i = 0; i < len; i++) {
      cell = cells[i];
      var wasBefore = this.cells.indexOf(cell) < this.selectedIndex;
      selectedIndexDelta -= wasBefore ? 1 : 0;
    }

    for (i = 0; i < len; i++) {
      cell = cells[i];
      cell.remove();
      // remove item from collection
      utils.removeFrom(this.cells, cell);
    }

    if (cells.length) {
      // update stuff
      this._cellAddedRemoved(0, selectedIndexDelta);
    }
  };

  // updates when cells are added or removed
  proto._cellAddedRemoved = function (changedCellIndex, selectedIndexDelta) {
    // TODO this math isn't perfect with grouped slides
    selectedIndexDelta = selectedIndexDelta || 0;
    this.selectedIndex += selectedIndexDelta;
    this.selectedIndex = Math.max(0, Math.min(this.slides.length - 1, this.selectedIndex));

    this.cellChange(changedCellIndex, true);
    // backwards compatibility
    this.emitEvent('cellAddedRemoved', [changedCellIndex, selectedIndexDelta]);
  };

  /**
   * logic to be run after a cell's size changes
   * @param {Element} elem - cell's element
   */
  proto.cellSizeChange = function (elem) {
    var cell = this.getCell(elem);
    if (!cell) {
      return;
    }
    cell.getSize();

    var index = this.cells.indexOf(cell);
    this.cellChange(index);
  };

  /**
   * logic any time a cell is changed: added, removed, or size changed
   * @param {Integer} changedCellIndex - index of the changed cell, optional
   */
  proto.cellChange = function (changedCellIndex, isPositioningSlider) {
    var prevSlideableWidth = this.slideableWidth;
    this._positionCells(changedCellIndex);
    this._getWrapShiftCells();
    this.setGallerySize();
    this.emitEvent('cellChange', [changedCellIndex]);
    // position slider
    if (this.options.freeScroll) {
      // shift x by change in slideableWidth
      // TODO fix position shifts when prepending w/ freeScroll
      var deltaX = prevSlideableWidth - this.slideableWidth;
      this.x += deltaX * this.cellAlign;
      this.positionSlider();
    } else {
      // do not position slider after lazy load
      if (isPositioningSlider) {
        this.positionSliderAtSelected();
      }
      this.select(this.selectedIndex);
    }
  };

  // -----  ----- //

  return Flickity;
});

},{"./flickity":23,"fizzy-ui-utils":18}],20:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// animate
(function (window, factory) {
  // universal module definition
  /* jshint strict: false */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['fizzy-ui-utils/utils'], function (utils) {
      return factory(window, utils);
    });
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(window, require('fizzy-ui-utils'));
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.animatePrototype = factory(window, window.fizzyUIUtils);
  }
})(window, function factory(window, utils) {

  'use strict';

  // -------------------------- requestAnimationFrame -------------------------- //

  // get rAF, prefixed, if present

  var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;

  // fallback to setTimeout
  var lastTime = 0;
  if (!requestAnimationFrame) {
    requestAnimationFrame = function requestAnimationFrame(callback) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = setTimeout(callback, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  // -------------------------- animate -------------------------- //

  var proto = {};

  proto.startAnimation = function () {
    if (this.isAnimating) {
      return;
    }

    this.isAnimating = true;
    this.restingFrames = 0;
    this.animate();
  };

  proto.animate = function () {
    this.applyDragForce();
    this.applySelectedAttraction();

    var previousX = this.x;

    this.integratePhysics();
    this.positionSlider();
    this.settle(previousX);
    // animate next frame
    if (this.isAnimating) {
      var _this = this;
      requestAnimationFrame(function animateFrame() {
        _this.animate();
      });
    }
  };

  var transformProperty = function () {
    var style = document.documentElement.style;
    if (typeof style.transform == 'string') {
      return 'transform';
    }
    return 'WebkitTransform';
  }();

  proto.positionSlider = function () {
    var x = this.x;
    // wrap position around
    if (this.options.wrapAround && this.cells.length > 1) {
      x = utils.modulo(x, this.slideableWidth);
      x = x - this.slideableWidth;
      this.shiftWrapCells(x);
    }

    x = x + this.cursorPosition;
    // reverse if right-to-left and using transform
    x = this.options.rightToLeft && transformProperty ? -x : x;
    var value = this.getPositionValue(x);
    // use 3D tranforms for hardware acceleration on iOS
    // but use 2D when settled, for better font-rendering
    this.slider.style[transformProperty] = this.isAnimating ? 'translate3d(' + value + ',0,0)' : 'translateX(' + value + ')';

    // scroll event
    var firstSlide = this.slides[0];
    if (firstSlide) {
      var positionX = -this.x - firstSlide.target;
      var progress = positionX / this.slidesWidth;
      this.dispatchEvent('scroll', null, [progress, positionX]);
    }
  };

  proto.positionSliderAtSelected = function () {
    if (!this.cells.length) {
      return;
    }
    this.x = -this.selectedSlide.target;
    this.positionSlider();
  };

  proto.getPositionValue = function (position) {
    if (this.options.percentPosition) {
      // percent position, round to 2 digits, like 12.34%
      return Math.round(position / this.size.innerWidth * 10000) * 0.01 + '%';
    } else {
      // pixel positioning
      return Math.round(position) + 'px';
    }
  };

  proto.settle = function (previousX) {
    // keep track of frames where x hasn't moved
    if (!this.isPointerDown && Math.round(this.x * 100) == Math.round(previousX * 100)) {
      this.restingFrames++;
    }
    // stop animating if resting for 3 or more frames
    if (this.restingFrames > 2) {
      this.isAnimating = false;
      delete this.isFreeScrolling;
      // render position with translateX when settled
      this.positionSlider();
      this.dispatchEvent('settle');
    }
  };

  proto.shiftWrapCells = function (x) {
    // shift before cells
    var beforeGap = this.cursorPosition + x;
    this._shiftCells(this.beforeShiftCells, beforeGap, -1);
    // shift after cells
    var afterGap = this.size.innerWidth - (x + this.slideableWidth + this.cursorPosition);
    this._shiftCells(this.afterShiftCells, afterGap, 1);
  };

  proto._shiftCells = function (cells, gap, shift) {
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var cellShift = gap > 0 ? shift : 0;
      cell.wrapShift(cellShift);
      gap -= cell.size.outerWidth;
    }
  };

  proto._unshiftCells = function (cells) {
    if (!cells || !cells.length) {
      return;
    }
    for (var i = 0; i < cells.length; i++) {
      cells[i].wrapShift(0);
    }
  };

  // -------------------------- physics -------------------------- //

  proto.integratePhysics = function () {
    this.x += this.velocity;
    this.velocity *= this.getFrictionFactor();
  };

  proto.applyForce = function (force) {
    this.velocity += force;
  };

  proto.getFrictionFactor = function () {
    return 1 - this.options[this.isFreeScrolling ? 'freeScrollFriction' : 'friction'];
  };

  proto.getRestingPosition = function () {
    // my thanks to Steven Wittens, who simplified this math greatly
    return this.x + this.velocity / (1 - this.getFrictionFactor());
  };

  proto.applyDragForce = function () {
    if (!this.isPointerDown) {
      return;
    }
    // change the position to drag position by applying force
    var dragVelocity = this.dragX - this.x;
    var dragForce = dragVelocity - this.velocity;
    this.applyForce(dragForce);
  };

  proto.applySelectedAttraction = function () {
    // do not attract if pointer down or no cells
    if (this.isPointerDown || this.isFreeScrolling || !this.cells.length) {
      return;
    }
    var distance = this.selectedSlide.target * -1 - this.x;
    var force = distance * this.options.selectedAttraction;
    this.applyForce(force);
  };

  return proto;
});

},{"fizzy-ui-utils":18}],21:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Flickity.Cell
(function (window, factory) {
  // universal module definition
  /* jshint strict: false */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['get-size/get-size'], function (getSize) {
      return factory(window, getSize);
    });
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(window, require('get-size'));
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.Cell = factory(window, window.getSize);
  }
})(window, function factory(window, getSize) {

  'use strict';

  function Cell(elem, parent) {
    this.element = elem;
    this.parent = parent;

    this.create();
  }

  var proto = Cell.prototype;

  proto.create = function () {
    this.element.style.position = 'absolute';
    this.x = 0;
    this.shift = 0;
  };

  proto.destroy = function () {
    // reset style
    this.element.style.position = '';
    var side = this.parent.originSide;
    this.element.style[side] = '';
  };

  proto.getSize = function () {
    this.size = getSize(this.element);
  };

  proto.setPosition = function (x) {
    this.x = x;
    this.updateTarget();
    this.renderPosition(x);
  };

  // setDefaultTarget v1 method, backwards compatibility, remove in v3
  proto.updateTarget = proto.setDefaultTarget = function () {
    var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
    this.target = this.x + this.size[marginProperty] + this.size.width * this.parent.cellAlign;
  };

  proto.renderPosition = function (x) {
    // render position of cell with in slider
    var side = this.parent.originSide;
    this.element.style[side] = this.parent.getPositionValue(x);
  };

  /**
   * @param {Integer} factor - 0, 1, or -1
  **/
  proto.wrapShift = function (shift) {
    this.shift = shift;
    this.renderPosition(this.x + this.parent.slideableWidth * shift);
  };

  proto.remove = function () {
    this.element.parentNode.removeChild(this.element);
  };

  return Cell;
});

},{"get-size":30}],22:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// drag
(function (window, factory) {
  // universal module definition
  /* jshint strict: false */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['./flickity', 'unidragger/unidragger', 'fizzy-ui-utils/utils'], function (Flickity, Unidragger, utils) {
      return factory(window, Flickity, Unidragger, utils);
    });
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(window, require('./flickity'), require('unidragger'), require('fizzy-ui-utils'));
  } else {
    // browser global
    window.Flickity = factory(window, window.Flickity, window.Unidragger, window.fizzyUIUtils);
  }
})(window, function factory(window, Flickity, Unidragger, utils) {

  'use strict';

  // ----- defaults ----- //

  utils.extend(Flickity.defaults, {
    draggable: true,
    dragThreshold: 3
  });

  // ----- create ----- //

  Flickity.createMethods.push('_createDrag');

  // -------------------------- drag prototype -------------------------- //

  var proto = Flickity.prototype;
  utils.extend(proto, Unidragger.prototype);
  proto._touchActionValue = 'pan-y';

  // --------------------------  -------------------------- //

  var isTouch = 'createTouch' in document;
  var isTouchmoveScrollCanceled = false;

  proto._createDrag = function () {
    this.on('activate', this.bindDrag);
    this.on('uiChange', this._uiChangeDrag);
    this.on('childUIPointerDown', this._childUIPointerDownDrag);
    this.on('deactivate', this.unbindDrag);
    // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
    // #457, RubaXa/Sortable#973
    if (isTouch && !isTouchmoveScrollCanceled) {
      window.addEventListener('touchmove', function () {});
      isTouchmoveScrollCanceled = true;
    }
  };

  proto.bindDrag = function () {
    if (!this.options.draggable || this.isDragBound) {
      return;
    }
    this.element.classList.add('is-draggable');
    this.handles = [this.viewport];
    this.bindHandles();
    this.isDragBound = true;
  };

  proto.unbindDrag = function () {
    if (!this.isDragBound) {
      return;
    }
    this.element.classList.remove('is-draggable');
    this.unbindHandles();
    delete this.isDragBound;
  };

  proto._uiChangeDrag = function () {
    delete this.isFreeScrolling;
  };

  proto._childUIPointerDownDrag = function (event) {
    event.preventDefault();
    this.pointerDownFocus(event);
  };

  // -------------------------- pointer events -------------------------- //

  // nodes that have text fields
  var cursorNodes = {
    TEXTAREA: true,
    INPUT: true,
    OPTION: true
  };

  // input types that do not have text fields
  var clickTypes = {
    radio: true,
    checkbox: true,
    button: true,
    submit: true,
    image: true,
    file: true
  };

  proto.pointerDown = function (event, pointer) {
    // dismiss inputs with text fields. #403, #404
    var isCursorInput = cursorNodes[event.target.nodeName] && !clickTypes[event.target.type];
    if (isCursorInput) {
      // reset pointerDown logic
      this.isPointerDown = false;
      delete this.pointerIdentifier;
      return;
    }

    this._dragPointerDown(event, pointer);

    // kludge to blur focused inputs in dragger
    var focused = document.activeElement;
    if (focused && focused.blur && focused != this.element &&
    // do not blur body for IE9 & 10, #117
    focused != document.body) {
      focused.blur();
    }
    this.pointerDownFocus(event);
    // stop if it was moving
    this.dragX = this.x;
    this.viewport.classList.add('is-pointer-down');
    // bind move and end events
    this._bindPostStartEvents(event);
    // track scrolling
    this.pointerDownScroll = getScrollPosition();
    window.addEventListener('scroll', this);

    this.dispatchEvent('pointerDown', event, [pointer]);
  };

  proto.pointerDownFocus = function (event) {
    // focus element, if not touch, and its not an input or select
    var canPointerDown = getCanPointerDown(event);
    if (!this.options.accessibility || canPointerDown) {
      return;
    }
    var prevScrollY = window.pageYOffset;
    this.element.focus();
    // hack to fix scroll jump after focus, #76
    if (window.pageYOffset != prevScrollY) {
      window.scrollTo(window.pageXOffset, prevScrollY);
    }
  };

  var focusNodes = {
    INPUT: true,
    SELECT: true
  };

  function getCanPointerDown(event) {
    var isTouchStart = event.type == 'touchstart';
    var isTouchPointer = event.pointerType == 'touch';
    var isFocusNode = focusNodes[event.target.nodeName];
    return isTouchStart || isTouchPointer || isFocusNode;
  }

  proto.canPreventDefaultOnPointerDown = function (event) {
    // prevent default, unless touchstart or input
    var canPointerDown = getCanPointerDown(event);
    return !canPointerDown;
  };

  // ----- move ----- //

  proto.hasDragStarted = function (moveVector) {
    return Math.abs(moveVector.x) > this.options.dragThreshold;
  };

  // ----- up ----- //

  proto.pointerUp = function (event, pointer) {
    delete this.isTouchScrolling;
    this.viewport.classList.remove('is-pointer-down');
    this.dispatchEvent('pointerUp', event, [pointer]);
    this._dragPointerUp(event, pointer);
  };

  proto.pointerDone = function () {
    window.removeEventListener('scroll', this);
    delete this.pointerDownScroll;
  };

  // -------------------------- dragging -------------------------- //

  proto.dragStart = function (event, pointer) {
    this.dragStartPosition = this.x;
    this.startAnimation();
    window.removeEventListener('scroll', this);
    this.dispatchEvent('dragStart', event, [pointer]);
  };

  proto.pointerMove = function (event, pointer) {
    var moveVector = this._dragPointerMove(event, pointer);
    this.dispatchEvent('pointerMove', event, [pointer, moveVector]);
    this._dragMove(event, pointer, moveVector);
  };

  proto.dragMove = function (event, pointer, moveVector) {
    event.preventDefault();

    this.previousDragX = this.dragX;
    // reverse if right-to-left
    var direction = this.options.rightToLeft ? -1 : 1;
    var dragX = this.dragStartPosition + moveVector.x * direction;

    if (!this.options.wrapAround && this.slides.length) {
      // slow drag
      var originBound = Math.max(-this.slides[0].target, this.dragStartPosition);
      dragX = dragX > originBound ? (dragX + originBound) * 0.5 : dragX;
      var endBound = Math.min(-this.getLastSlide().target, this.dragStartPosition);
      dragX = dragX < endBound ? (dragX + endBound) * 0.5 : dragX;
    }

    this.dragX = dragX;

    this.dragMoveTime = new Date();
    this.dispatchEvent('dragMove', event, [pointer, moveVector]);
  };

  proto.dragEnd = function (event, pointer) {
    if (this.options.freeScroll) {
      this.isFreeScrolling = true;
    }
    // set selectedIndex based on where flick will end up
    var index = this.dragEndRestingSelect();

    if (this.options.freeScroll && !this.options.wrapAround) {
      // if free-scroll & not wrap around
      // do not free-scroll if going outside of bounding slides
      // so bounding slides can attract slider, and keep it in bounds
      var restingX = this.getRestingPosition();
      this.isFreeScrolling = -restingX > this.slides[0].target && -restingX < this.getLastSlide().target;
    } else if (!this.options.freeScroll && index == this.selectedIndex) {
      // boost selection if selected index has not changed
      index += this.dragEndBoostSelect();
    }
    delete this.previousDragX;
    // apply selection
    // TODO refactor this, selecting here feels weird
    // HACK, set flag so dragging stays in correct direction
    this.isDragSelect = this.options.wrapAround;
    this.select(index);
    delete this.isDragSelect;
    this.dispatchEvent('dragEnd', event, [pointer]);
  };

  proto.dragEndRestingSelect = function () {
    var restingX = this.getRestingPosition();
    // how far away from selected slide
    var distance = Math.abs(this.getSlideDistance(-restingX, this.selectedIndex));
    // get closet resting going up and going down
    var positiveResting = this._getClosestResting(restingX, distance, 1);
    var negativeResting = this._getClosestResting(restingX, distance, -1);
    // use closer resting for wrap-around
    var index = positiveResting.distance < negativeResting.distance ? positiveResting.index : negativeResting.index;
    return index;
  };

  /**
   * given resting X and distance to selected cell
   * get the distance and index of the closest cell
   * @param {Number} restingX - estimated post-flick resting position
   * @param {Number} distance - distance to selected cell
   * @param {Integer} increment - +1 or -1, going up or down
   * @returns {Object} - { distance: {Number}, index: {Integer} }
   */
  proto._getClosestResting = function (restingX, distance, increment) {
    var index = this.selectedIndex;
    var minDistance = Infinity;
    var condition = this.options.contain && !this.options.wrapAround ?
    // if contain, keep going if distance is equal to minDistance
    function (d, md) {
      return d <= md;
    } : function (d, md) {
      return d < md;
    };
    while (condition(distance, minDistance)) {
      // measure distance to next cell
      index += increment;
      minDistance = distance;
      distance = this.getSlideDistance(-restingX, index);
      if (distance === null) {
        break;
      }
      distance = Math.abs(distance);
    }
    return {
      distance: minDistance,
      // selected was previous index
      index: index - increment
    };
  };

  /**
   * measure distance between x and a slide target
   * @param {Number} x
   * @param {Integer} index - slide index
   */
  proto.getSlideDistance = function (x, index) {
    var len = this.slides.length;
    // wrap around if at least 2 slides
    var isWrapAround = this.options.wrapAround && len > 1;
    var slideIndex = isWrapAround ? utils.modulo(index, len) : index;
    var slide = this.slides[slideIndex];
    if (!slide) {
      return null;
    }
    // add distance for wrap-around slides
    var wrap = isWrapAround ? this.slideableWidth * Math.floor(index / len) : 0;
    return x - (slide.target + wrap);
  };

  proto.dragEndBoostSelect = function () {
    // do not boost if no previousDragX or dragMoveTime
    if (this.previousDragX === undefined || !this.dragMoveTime ||
    // or if drag was held for 100 ms
    new Date() - this.dragMoveTime > 100) {
      return 0;
    }

    var distance = this.getSlideDistance(-this.dragX, this.selectedIndex);
    var delta = this.previousDragX - this.dragX;
    if (distance > 0 && delta > 0) {
      // boost to next if moving towards the right, and positive velocity
      return 1;
    } else if (distance < 0 && delta < 0) {
      // boost to previous if moving towards the left, and negative velocity
      return -1;
    }
    return 0;
  };

  // ----- staticClick ----- //

  proto.staticClick = function (event, pointer) {
    // get clickedCell, if cell was clicked
    var clickedCell = this.getParentCell(event.target);
    var cellElem = clickedCell && clickedCell.element;
    var cellIndex = clickedCell && this.cells.indexOf(clickedCell);
    this.dispatchEvent('staticClick', event, [pointer, cellElem, cellIndex]);
  };

  // ----- scroll ----- //

  proto.onscroll = function () {
    var scroll = getScrollPosition();
    var scrollMoveX = this.pointerDownScroll.x - scroll.x;
    var scrollMoveY = this.pointerDownScroll.y - scroll.y;
    // cancel click/tap if scroll is too much
    if (Math.abs(scrollMoveX) > 3 || Math.abs(scrollMoveY) > 3) {
      this._pointerDone();
    }
  };

  // ----- utils ----- //

  function getScrollPosition() {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }

  // -----  ----- //

  return Flickity;
});

},{"./flickity":23,"fizzy-ui-utils":18,"unidragger":33}],23:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Flickity main
(function (window, factory) {
  // universal module definition
  /* jshint strict: false */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['ev-emitter/ev-emitter', 'get-size/get-size', 'fizzy-ui-utils/utils', './cell', './slide', './animate'], function (EvEmitter, getSize, utils, Cell, Slide, animatePrototype) {
      return factory(window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype);
    });
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(window, require('ev-emitter'), require('get-size'), require('fizzy-ui-utils'), require('./cell'), require('./slide'), require('./animate'));
  } else {
    // browser global
    var _Flickity = window.Flickity;

    window.Flickity = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, _Flickity.Cell, _Flickity.Slide, _Flickity.animatePrototype);
  }
})(window, function factory(window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype) {

  'use strict';

  // vars

  var jQuery = window.jQuery;
  var getComputedStyle = window.getComputedStyle;
  var console = window.console;

  function moveElements(elems, toElem) {
    elems = utils.makeArray(elems);
    while (elems.length) {
      toElem.appendChild(elems.shift());
    }
  }

  // -------------------------- Flickity -------------------------- //

  // globally unique identifiers
  var GUID = 0;
  // internal store of all Flickity intances
  var instances = {};

  function Flickity(element, options) {
    var queryElement = utils.getQueryElement(element);
    if (!queryElement) {
      if (console) {
        console.error('Bad element for Flickity: ' + (queryElement || element));
      }
      return;
    }
    this.element = queryElement;
    // do not initialize twice on same element
    if (this.element.flickityGUID) {
      var instance = instances[this.element.flickityGUID];
      instance.option(options);
      return instance;
    }

    // add jQuery
    if (jQuery) {
      this.$element = jQuery(this.element);
    }
    // options
    this.options = utils.extend({}, this.constructor.defaults);
    this.option(options);

    // kick things off
    this._create();
  }

  Flickity.defaults = {
    accessibility: true,
    // adaptiveHeight: false,
    cellAlign: 'center',
    // cellSelector: undefined,
    // contain: false,
    freeScrollFriction: 0.075, // friction when free-scrolling
    friction: 0.28, // friction when selecting
    namespaceJQueryEvents: true,
    // initialIndex: 0,
    percentPosition: true,
    resize: true,
    selectedAttraction: 0.025,
    setGallerySize: true
    // watchCSS: false,
    // wrapAround: false
  };

  // hash of methods triggered on _create()
  Flickity.createMethods = [];

  var proto = Flickity.prototype;
  // inherit EventEmitter
  utils.extend(proto, EvEmitter.prototype);

  proto._create = function () {
    // add id for Flickity.data
    var id = this.guid = ++GUID;
    this.element.flickityGUID = id; // expando
    instances[id] = this; // associate via id
    // initial properties
    this.selectedIndex = 0;
    // how many frames slider has been in same position
    this.restingFrames = 0;
    // initial physics properties
    this.x = 0;
    this.velocity = 0;
    this.originSide = this.options.rightToLeft ? 'right' : 'left';
    // create viewport & slider
    this.viewport = document.createElement('div');
    this.viewport.className = 'flickity-viewport';
    this._createSlider();

    if (this.options.resize || this.options.watchCSS) {
      window.addEventListener('resize', this);
    }

    Flickity.createMethods.forEach(function (method) {
      this[method]();
    }, this);

    if (this.options.watchCSS) {
      this.watchCSS();
    } else {
      this.activate();
    }
  };

  /**
   * set options
   * @param {Object} opts
   */
  proto.option = function (opts) {
    utils.extend(this.options, opts);
  };

  proto.activate = function () {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.element.classList.add('flickity-enabled');
    if (this.options.rightToLeft) {
      this.element.classList.add('flickity-rtl');
    }

    this.getSize();
    // move initial cell elements so they can be loaded as cells
    var cellElems = this._filterFindCellElements(this.element.children);
    moveElements(cellElems, this.slider);
    this.viewport.appendChild(this.slider);
    this.element.appendChild(this.viewport);
    // get cells from children
    this.reloadCells();

    if (this.options.accessibility) {
      // allow element to focusable
      this.element.tabIndex = 0;
      // listen for key presses
      this.element.addEventListener('keydown', this);
    }

    this.emitEvent('activate');

    var index;
    var initialIndex = this.options.initialIndex;
    if (this.isInitActivated) {
      index = this.selectedIndex;
    } else if (initialIndex !== undefined) {
      index = this.cells[initialIndex] ? initialIndex : 0;
    } else {
      index = 0;
    }
    // select instantly
    this.select(index, false, true);
    // flag for initial activation, for using initialIndex
    this.isInitActivated = true;
  };

  // slider positions the cells
  proto._createSlider = function () {
    // slider element does all the positioning
    var slider = document.createElement('div');
    slider.className = 'flickity-slider';
    slider.style[this.originSide] = 0;
    this.slider = slider;
  };

  proto._filterFindCellElements = function (elems) {
    return utils.filterFindElements(elems, this.options.cellSelector);
  };

  // goes through all children
  proto.reloadCells = function () {
    // collection of item elements
    this.cells = this._makeCells(this.slider.children);
    this.positionCells();
    this._getWrapShiftCells();
    this.setGallerySize();
  };

  /**
   * turn elements into Flickity.Cells
   * @param {Array or NodeList or HTMLElement} elems
   * @returns {Array} items - collection of new Flickity Cells
   */
  proto._makeCells = function (elems) {
    var cellElems = this._filterFindCellElements(elems);

    // create new Flickity for collection
    var cells = cellElems.map(function (cellElem) {
      return new Cell(cellElem, this);
    }, this);

    return cells;
  };

  proto.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  };

  proto.getLastSlide = function () {
    return this.slides[this.slides.length - 1];
  };

  // positions all cells
  proto.positionCells = function () {
    // size all cells
    this._sizeCells(this.cells);
    // position all cells
    this._positionCells(0);
  };

  /**
   * position certain cells
   * @param {Integer} index - which cell to start with
   */
  proto._positionCells = function (index) {
    index = index || 0;
    // also measure maxCellHeight
    // start 0 if positioning all cells
    this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
    var cellX = 0;
    // get cellX
    if (index > 0) {
      var startCell = this.cells[index - 1];
      cellX = startCell.x + startCell.size.outerWidth;
    }
    var len = this.cells.length;
    for (var i = index; i < len; i++) {
      var cell = this.cells[i];
      cell.setPosition(cellX);
      cellX += cell.size.outerWidth;
      this.maxCellHeight = Math.max(cell.size.outerHeight, this.maxCellHeight);
    }
    // keep track of cellX for wrap-around
    this.slideableWidth = cellX;
    // slides
    this.updateSlides();
    // contain slides target
    this._containSlides();
    // update slidesWidth
    this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
  };

  /**
   * cell.getSize() on multiple cells
   * @param {Array} cells
   */
  proto._sizeCells = function (cells) {
    cells.forEach(function (cell) {
      cell.getSize();
    });
  };

  // --------------------------  -------------------------- //

  proto.updateSlides = function () {
    this.slides = [];
    if (!this.cells.length) {
      return;
    }

    var slide = new Slide(this);
    this.slides.push(slide);
    var isOriginLeft = this.originSide == 'left';
    var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';

    var canCellFit = this._getCanCellFit();

    this.cells.forEach(function (cell, i) {
      // just add cell if first cell in slide
      if (!slide.cells.length) {
        slide.addCell(cell);
        return;
      }

      var slideWidth = slide.outerWidth - slide.firstMargin + (cell.size.outerWidth - cell.size[nextMargin]);

      if (canCellFit.call(this, i, slideWidth)) {
        slide.addCell(cell);
      } else {
        // doesn't fit, new slide
        slide.updateTarget();

        slide = new Slide(this);
        this.slides.push(slide);
        slide.addCell(cell);
      }
    }, this);
    // last slide
    slide.updateTarget();
    // update .selectedSlide
    this.updateSelectedSlide();
  };

  proto._getCanCellFit = function () {
    var groupCells = this.options.groupCells;
    if (!groupCells) {
      return function () {
        return false;
      };
    } else if (typeof groupCells == 'number') {
      // group by number. 3 -> [0,1,2], [3,4,5], ...
      var number = parseInt(groupCells, 10);
      return function (i) {
        return i % number !== 0;
      };
    }
    // default, group by width of slide
    // parse '75%
    var percentMatch = typeof groupCells == 'string' && groupCells.match(/^(\d+)%$/);
    var percent = percentMatch ? parseInt(percentMatch[1], 10) / 100 : 1;
    return function (i, slideWidth) {
      return slideWidth <= (this.size.innerWidth + 1) * percent;
    };
  };

  // alias _init for jQuery plugin .flickity()
  proto._init = proto.reposition = function () {
    this.positionCells();
    this.positionSliderAtSelected();
  };

  proto.getSize = function () {
    this.size = getSize(this.element);
    this.setCellAlign();
    this.cursorPosition = this.size.innerWidth * this.cellAlign;
  };

  var cellAlignShorthands = {
    // cell align, then based on origin side
    center: {
      left: 0.5,
      right: 0.5
    },
    left: {
      left: 0,
      right: 1
    },
    right: {
      right: 0,
      left: 1
    }
  };

  proto.setCellAlign = function () {
    var shorthand = cellAlignShorthands[this.options.cellAlign];
    this.cellAlign = shorthand ? shorthand[this.originSide] : this.options.cellAlign;
  };

  proto.setGallerySize = function () {
    if (this.options.setGallerySize) {
      var height = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
      this.viewport.style.height = height + 'px';
    }
  };

  proto._getWrapShiftCells = function () {
    // only for wrap-around
    if (!this.options.wrapAround) {
      return;
    }
    // unshift previous cells
    this._unshiftCells(this.beforeShiftCells);
    this._unshiftCells(this.afterShiftCells);
    // get before cells
    // initial gap
    var gapX = this.cursorPosition;
    var cellIndex = this.cells.length - 1;
    this.beforeShiftCells = this._getGapCells(gapX, cellIndex, -1);
    // get after cells
    // ending gap between last cell and end of gallery viewport
    gapX = this.size.innerWidth - this.cursorPosition;
    // start cloning at first cell, working forwards
    this.afterShiftCells = this._getGapCells(gapX, 0, 1);
  };

  proto._getGapCells = function (gapX, cellIndex, increment) {
    // keep adding cells until the cover the initial gap
    var cells = [];
    while (gapX > 0) {
      var cell = this.cells[cellIndex];
      if (!cell) {
        break;
      }
      cells.push(cell);
      cellIndex += increment;
      gapX -= cell.size.outerWidth;
    }
    return cells;
  };

  // ----- contain ----- //

  // contain cell targets so no excess sliding
  proto._containSlides = function () {
    if (!this.options.contain || this.options.wrapAround || !this.cells.length) {
      return;
    }
    var isRightToLeft = this.options.rightToLeft;
    var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
    var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
    var contentWidth = this.slideableWidth - this.getLastCell().size[endMargin];
    // content is less than gallery size
    var isContentSmaller = contentWidth < this.size.innerWidth;
    // bounds
    var beginBound = this.cursorPosition + this.cells[0].size[beginMargin];
    var endBound = contentWidth - this.size.innerWidth * (1 - this.cellAlign);
    // contain each cell target
    this.slides.forEach(function (slide) {
      if (isContentSmaller) {
        // all cells fit inside gallery
        slide.target = contentWidth * this.cellAlign;
      } else {
        // contain to bounds
        slide.target = Math.max(slide.target, beginBound);
        slide.target = Math.min(slide.target, endBound);
      }
    }, this);
  };

  // -----  ----- //

  /**
   * emits events via eventEmitter and jQuery events
   * @param {String} type - name of event
   * @param {Event} event - original event
   * @param {Array} args - extra arguments
   */
  proto.dispatchEvent = function (type, event, args) {
    var emitArgs = event ? [event].concat(args) : args;
    this.emitEvent(type, emitArgs);

    if (jQuery && this.$element) {
      // default trigger with type if no event
      type += this.options.namespaceJQueryEvents ? '.flickity' : '';
      var $event = type;
      if (event) {
        // create jQuery event
        var jQEvent = jQuery.Event(event);
        jQEvent.type = type;
        $event = jQEvent;
      }
      this.$element.trigger($event, args);
    }
  };

  // -------------------------- select -------------------------- //

  /**
   * @param {Integer} index - index of the slide
   * @param {Boolean} isWrap - will wrap-around to last/first if at the end
   * @param {Boolean} isInstant - will immediately set position at selected cell
   */
  proto.select = function (index, isWrap, isInstant) {
    if (!this.isActive) {
      return;
    }
    index = parseInt(index, 10);
    this._wrapSelect(index);

    if (this.options.wrapAround || isWrap) {
      index = utils.modulo(index, this.slides.length);
    }
    // bail if invalid index
    if (!this.slides[index]) {
      return;
    }
    this.selectedIndex = index;
    this.updateSelectedSlide();
    if (isInstant) {
      this.positionSliderAtSelected();
    } else {
      this.startAnimation();
    }
    if (this.options.adaptiveHeight) {
      this.setGallerySize();
    }

    this.dispatchEvent('select');
    // old v1 event name, remove in v3
    this.dispatchEvent('cellSelect');
  };

  // wraps position for wrapAround, to move to closest slide. #113
  proto._wrapSelect = function (index) {
    var len = this.slides.length;
    var isWrapping = this.options.wrapAround && len > 1;
    if (!isWrapping) {
      return index;
    }
    var wrapIndex = utils.modulo(index, len);
    // go to shortest
    var delta = Math.abs(wrapIndex - this.selectedIndex);
    var backWrapDelta = Math.abs(wrapIndex + len - this.selectedIndex);
    var forewardWrapDelta = Math.abs(wrapIndex - len - this.selectedIndex);
    if (!this.isDragSelect && backWrapDelta < delta) {
      index += len;
    } else if (!this.isDragSelect && forewardWrapDelta < delta) {
      index -= len;
    }
    // wrap position so slider is within normal area
    if (index < 0) {
      this.x -= this.slideableWidth;
    } else if (index >= len) {
      this.x += this.slideableWidth;
    }
  };

  proto.previous = function (isWrap, isInstant) {
    this.select(this.selectedIndex - 1, isWrap, isInstant);
  };

  proto.next = function (isWrap, isInstant) {
    this.select(this.selectedIndex + 1, isWrap, isInstant);
  };

  proto.updateSelectedSlide = function () {
    var slide = this.slides[this.selectedIndex];
    // selectedIndex could be outside of slides, if triggered before resize()
    if (!slide) {
      return;
    }
    // unselect previous selected slide
    this.unselectSelectedSlide();
    // update new selected slide
    this.selectedSlide = slide;
    slide.select();
    this.selectedCells = slide.cells;
    this.selectedElements = slide.getCellElements();
    // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
    // Remove in v3?
    this.selectedCell = slide.cells[0];
    this.selectedElement = this.selectedElements[0];
  };

  proto.unselectSelectedSlide = function () {
    if (this.selectedSlide) {
      this.selectedSlide.unselect();
    }
  };

  /**
   * select slide from number or cell element
   * @param {Element or Number} elem
   */
  proto.selectCell = function (value, isWrap, isInstant) {
    // get cell
    var cell;
    if (typeof value == 'number') {
      cell = this.cells[value];
    } else {
      // use string as selector
      if (typeof value == 'string') {
        value = this.element.querySelector(value);
      }
      // get cell from element
      cell = this.getCell(value);
    }
    // select slide that has cell
    for (var i = 0; cell && i < this.slides.length; i++) {
      var slide = this.slides[i];
      var index = slide.cells.indexOf(cell);
      if (index != -1) {
        this.select(i, isWrap, isInstant);
        return;
      }
    }
  };

  // -------------------------- get cells -------------------------- //

  /**
   * get Flickity.Cell, given an Element
   * @param {Element} elem
   * @returns {Flickity.Cell} item
   */
  proto.getCell = function (elem) {
    // loop through cells to get the one that matches
    for (var i = 0; i < this.cells.length; i++) {
      var cell = this.cells[i];
      if (cell.element == elem) {
        return cell;
      }
    }
  };

  /**
   * get collection of Flickity.Cells, given Elements
   * @param {Element, Array, NodeList} elems
   * @returns {Array} cells - Flickity.Cells
   */
  proto.getCells = function (elems) {
    elems = utils.makeArray(elems);
    var cells = [];
    elems.forEach(function (elem) {
      var cell = this.getCell(elem);
      if (cell) {
        cells.push(cell);
      }
    }, this);
    return cells;
  };

  /**
   * get cell elements
   * @returns {Array} cellElems
   */
  proto.getCellElements = function () {
    return this.cells.map(function (cell) {
      return cell.element;
    });
  };

  /**
   * get parent cell from an element
   * @param {Element} elem
   * @returns {Flickit.Cell} cell
   */
  proto.getParentCell = function (elem) {
    // first check if elem is cell
    var cell = this.getCell(elem);
    if (cell) {
      return cell;
    }
    // try to get parent cell elem
    elem = utils.getParent(elem, '.flickity-slider > *');
    return this.getCell(elem);
  };

  /**
   * get cells adjacent to a slide
   * @param {Integer} adjCount - number of adjacent slides
   * @param {Integer} index - index of slide to start
   * @returns {Array} cells - array of Flickity.Cells
   */
  proto.getAdjacentCellElements = function (adjCount, index) {
    if (!adjCount) {
      return this.selectedSlide.getCellElements();
    }
    index = index === undefined ? this.selectedIndex : index;

    var len = this.slides.length;
    if (1 + adjCount * 2 >= len) {
      return this.getCellElements();
    }

    var cellElems = [];
    for (var i = index - adjCount; i <= index + adjCount; i++) {
      var slideIndex = this.options.wrapAround ? utils.modulo(i, len) : i;
      var slide = this.slides[slideIndex];
      if (slide) {
        cellElems = cellElems.concat(slide.getCellElements());
      }
    }
    return cellElems;
  };

  // -------------------------- events -------------------------- //

  proto.uiChange = function () {
    this.emitEvent('uiChange');
  };

  proto.childUIPointerDown = function (event) {
    this.emitEvent('childUIPointerDown', [event]);
  };

  // ----- resize ----- //

  proto.onresize = function () {
    this.watchCSS();
    this.resize();
  };

  utils.debounceMethod(Flickity, 'onresize', 150);

  proto.resize = function () {
    if (!this.isActive) {
      return;
    }
    this.getSize();
    // wrap values
    if (this.options.wrapAround) {
      this.x = utils.modulo(this.x, this.slideableWidth);
    }
    this.positionCells();
    this._getWrapShiftCells();
    this.setGallerySize();
    this.emitEvent('resize');
    // update selected index for group slides, instant
    // TODO: position can be lost between groups of various numbers
    var selectedElement = this.selectedElements && this.selectedElements[0];
    this.selectCell(selectedElement, false, true);
  };

  // watches the :after property, activates/deactivates
  proto.watchCSS = function () {
    var watchOption = this.options.watchCSS;
    if (!watchOption) {
      return;
    }

    var afterContent = getComputedStyle(this.element, ':after').content;
    // activate if :after { content: 'flickity' }
    if (afterContent.indexOf('flickity') != -1) {
      this.activate();
    } else {
      this.deactivate();
    }
  };

  // ----- keydown ----- //

  // go previous/next if left/right keys pressed
  proto.onkeydown = function (event) {
    // only work if element is in focus
    if (!this.options.accessibility || document.activeElement && document.activeElement != this.element) {
      return;
    }

    if (event.keyCode == 37) {
      // go left
      var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
      this.uiChange();
      this[leftMethod]();
    } else if (event.keyCode == 39) {
      // go right
      var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
      this.uiChange();
      this[rightMethod]();
    }
  };

  // -------------------------- destroy -------------------------- //

  // deactivate all Flickity functionality, but keep stuff available
  proto.deactivate = function () {
    if (!this.isActive) {
      return;
    }
    this.element.classList.remove('flickity-enabled');
    this.element.classList.remove('flickity-rtl');
    // destroy cells
    this.cells.forEach(function (cell) {
      cell.destroy();
    });
    this.unselectSelectedSlide();
    this.element.removeChild(this.viewport);
    // move child elements back into element
    moveElements(this.slider.children, this.element);
    if (this.options.accessibility) {
      this.element.removeAttribute('tabIndex');
      this.element.removeEventListener('keydown', this);
    }
    // set flags
    this.isActive = false;
    this.emitEvent('deactivate');
  };

  proto.destroy = function () {
    this.deactivate();
    window.removeEventListener('resize', this);
    this.emitEvent('destroy');
    if (jQuery && this.$element) {
      jQuery.removeData(this.element, 'flickity');
    }
    delete this.element.flickityGUID;
    delete instances[this.guid];
  };

  // -------------------------- prototype -------------------------- //

  utils.extend(proto, animatePrototype);

  // -------------------------- extras -------------------------- //

  /**
   * get Flickity instance from element
   * @param {Element} elem
   * @returns {Flickity}
   */
  Flickity.data = function (elem) {
    elem = utils.getQueryElement(elem);
    var id = elem && elem.flickityGUID;
    return id && instances[id];
  };

  utils.htmlInit(Flickity, 'flickity');

  if (jQuery && jQuery.bridget) {
    jQuery.bridget('flickity', Flickity);
  }

  // set internal jQuery, for Webpack + jQuery v3, #478
  Flickity.setJQuery = function (jq) {
    jQuery = jq;
  };

  Flickity.Cell = Cell;

  return Flickity;
});

},{"./animate":20,"./cell":21,"./slide":29,"ev-emitter":17,"fizzy-ui-utils":18,"get-size":30}],24:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Flickity v2.0.10
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://flickity.metafizzy.co
 * Copyright 2017 Metafizzy
 */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['./flickity', './drag', './prev-next-button', './page-dots', './player', './add-remove-cell', './lazyload'], factory);
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(require('./flickity'), require('./drag'), require('./prev-next-button'), require('./page-dots'), require('./player'), require('./add-remove-cell'), require('./lazyload'));
  }
})(window, function factory(Flickity) {
  /*jshint strict: false*/
  return Flickity;
});

},{"./add-remove-cell":19,"./drag":22,"./flickity":23,"./lazyload":25,"./page-dots":26,"./player":27,"./prev-next-button":28}],25:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// lazyload
(function (window, factory) {
  // universal module definition
  /* jshint strict: false */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['./flickity', 'fizzy-ui-utils/utils'], function (Flickity, utils) {
      return factory(window, Flickity, utils);
    });
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(window, require('./flickity'), require('fizzy-ui-utils'));
  } else {
    // browser global
    factory(window, window.Flickity, window.fizzyUIUtils);
  }
})(window, function factory(window, Flickity, utils) {
  'use strict';

  Flickity.createMethods.push('_createLazyload');
  var proto = Flickity.prototype;

  proto._createLazyload = function () {
    this.on('select', this.lazyLoad);
  };

  proto.lazyLoad = function () {
    var lazyLoad = this.options.lazyLoad;
    if (!lazyLoad) {
      return;
    }
    // get adjacent cells, use lazyLoad option for adjacent count
    var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
    var cellElems = this.getAdjacentCellElements(adjCount);
    // get lazy images in those cells
    var lazyImages = [];
    cellElems.forEach(function (cellElem) {
      var lazyCellImages = getCellLazyImages(cellElem);
      lazyImages = lazyImages.concat(lazyCellImages);
    });
    // load lazy images
    lazyImages.forEach(function (img) {
      new LazyLoader(img, this);
    }, this);
  };

  function getCellLazyImages(cellElem) {
    // check if cell element is lazy image
    if (cellElem.nodeName == 'IMG' && cellElem.getAttribute('data-flickity-lazyload')) {
      return [cellElem];
    }
    // select lazy images in cell
    var imgs = cellElem.querySelectorAll('img[data-flickity-lazyload]');
    return utils.makeArray(imgs);
  }

  // -------------------------- LazyLoader -------------------------- //

  /**
   * class to handle loading images
   */
  function LazyLoader(img, flickity) {
    this.img = img;
    this.flickity = flickity;
    this.load();
  }

  LazyLoader.prototype.handleEvent = utils.handleEvent;

  LazyLoader.prototype.load = function () {
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this);
    // load image
    this.img.src = this.img.getAttribute('data-flickity-lazyload');
    // remove attr
    this.img.removeAttribute('data-flickity-lazyload');
  };

  LazyLoader.prototype.onload = function (event) {
    this.complete(event, 'flickity-lazyloaded');
  };

  LazyLoader.prototype.onerror = function (event) {
    this.complete(event, 'flickity-lazyerror');
  };

  LazyLoader.prototype.complete = function (event, className) {
    // unbind events
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);

    var cell = this.flickity.getParentCell(this.img);
    var cellElem = cell && cell.element;
    this.flickity.cellSizeChange(cellElem);

    this.img.classList.add(className);
    this.flickity.dispatchEvent('lazyLoad', event, cellElem);
  };

  // -----  ----- //

  Flickity.LazyLoader = LazyLoader;

  return Flickity;
});

},{"./flickity":23,"fizzy-ui-utils":18}],26:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// page dots
(function (window, factory) {
  // universal module definition
  /* jshint strict: false */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['./flickity', 'tap-listener/tap-listener', 'fizzy-ui-utils/utils'], function (Flickity, TapListener, utils) {
      return factory(window, Flickity, TapListener, utils);
    });
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(window, require('./flickity'), require('tap-listener'), require('fizzy-ui-utils'));
  } else {
    // browser global
    factory(window, window.Flickity, window.TapListener, window.fizzyUIUtils);
  }
})(window, function factory(window, Flickity, TapListener, utils) {

  // -------------------------- PageDots -------------------------- //

  'use strict';

  function PageDots(parent) {
    this.parent = parent;
    this._create();
  }

  PageDots.prototype = new TapListener();

  PageDots.prototype._create = function () {
    // create holder element
    this.holder = document.createElement('ol');
    this.holder.className = 'flickity-page-dots';
    // create dots, array of elements
    this.dots = [];
    // events
    this.on('tap', this.onTap);
    this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
  };

  PageDots.prototype.activate = function () {
    this.setDots();
    this.bindTap(this.holder);
    // add to DOM
    this.parent.element.appendChild(this.holder);
  };

  PageDots.prototype.deactivate = function () {
    // remove from DOM
    this.parent.element.removeChild(this.holder);
    TapListener.prototype.destroy.call(this);
  };

  PageDots.prototype.setDots = function () {
    // get difference between number of slides and number of dots
    var delta = this.parent.slides.length - this.dots.length;
    if (delta > 0) {
      this.addDots(delta);
    } else if (delta < 0) {
      this.removeDots(-delta);
    }
  };

  PageDots.prototype.addDots = function (count) {
    var fragment = document.createDocumentFragment();
    var newDots = [];
    while (count) {
      var dot = document.createElement('li');
      dot.className = 'dot';
      fragment.appendChild(dot);
      newDots.push(dot);
      count--;
    }
    this.holder.appendChild(fragment);
    this.dots = this.dots.concat(newDots);
  };

  PageDots.prototype.removeDots = function (count) {
    // remove from this.dots collection
    var removeDots = this.dots.splice(this.dots.length - count, count);
    // remove from DOM
    removeDots.forEach(function (dot) {
      this.holder.removeChild(dot);
    }, this);
  };

  PageDots.prototype.updateSelected = function () {
    // remove selected class on previous
    if (this.selectedDot) {
      this.selectedDot.className = 'dot';
    }
    // don't proceed if no dots
    if (!this.dots.length) {
      return;
    }
    this.selectedDot = this.dots[this.parent.selectedIndex];
    this.selectedDot.className = 'dot is-selected';
  };

  PageDots.prototype.onTap = function (event) {
    var target = event.target;
    // only care about dot clicks
    if (target.nodeName != 'LI') {
      return;
    }

    this.parent.uiChange();
    var index = this.dots.indexOf(target);
    this.parent.select(index);
  };

  PageDots.prototype.destroy = function () {
    this.deactivate();
  };

  Flickity.PageDots = PageDots;

  // -------------------------- Flickity -------------------------- //

  utils.extend(Flickity.defaults, {
    pageDots: true
  });

  Flickity.createMethods.push('_createPageDots');

  var proto = Flickity.prototype;

  proto._createPageDots = function () {
    if (!this.options.pageDots) {
      return;
    }
    this.pageDots = new PageDots(this);
    // events
    this.on('activate', this.activatePageDots);
    this.on('select', this.updateSelectedPageDots);
    this.on('cellChange', this.updatePageDots);
    this.on('resize', this.updatePageDots);
    this.on('deactivate', this.deactivatePageDots);
  };

  proto.activatePageDots = function () {
    this.pageDots.activate();
  };

  proto.updateSelectedPageDots = function () {
    this.pageDots.updateSelected();
  };

  proto.updatePageDots = function () {
    this.pageDots.setDots();
  };

  proto.deactivatePageDots = function () {
    this.pageDots.deactivate();
  };

  // -----  ----- //

  Flickity.PageDots = PageDots;

  return Flickity;
});

},{"./flickity":23,"fizzy-ui-utils":18,"tap-listener":32}],27:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// player & autoPlay
(function (window, factory) {
  // universal module definition
  /* jshint strict: false */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['ev-emitter/ev-emitter', 'fizzy-ui-utils/utils', './flickity'], function (EvEmitter, utils, Flickity) {
      return factory(EvEmitter, utils, Flickity);
    });
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(require('ev-emitter'), require('fizzy-ui-utils'), require('./flickity'));
  } else {
    // browser global
    factory(window.EvEmitter, window.fizzyUIUtils, window.Flickity);
  }
})(window, function factory(EvEmitter, utils, Flickity) {

  'use strict';

  // -------------------------- Page Visibility -------------------------- //
  // https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API

  var hiddenProperty, visibilityEvent;
  if ('hidden' in document) {
    hiddenProperty = 'hidden';
    visibilityEvent = 'visibilitychange';
  } else if ('webkitHidden' in document) {
    hiddenProperty = 'webkitHidden';
    visibilityEvent = 'webkitvisibilitychange';
  }

  // -------------------------- Player -------------------------- //

  function Player(parent) {
    this.parent = parent;
    this.state = 'stopped';
    // visibility change event handler
    if (visibilityEvent) {
      this.onVisibilityChange = function () {
        this.visibilityChange();
      }.bind(this);
      this.onVisibilityPlay = function () {
        this.visibilityPlay();
      }.bind(this);
    }
  }

  Player.prototype = Object.create(EvEmitter.prototype);

  // start play
  Player.prototype.play = function () {
    if (this.state == 'playing') {
      return;
    }
    // do not play if page is hidden, start playing when page is visible
    var isPageHidden = document[hiddenProperty];
    if (visibilityEvent && isPageHidden) {
      document.addEventListener(visibilityEvent, this.onVisibilityPlay);
      return;
    }

    this.state = 'playing';
    // listen to visibility change
    if (visibilityEvent) {
      document.addEventListener(visibilityEvent, this.onVisibilityChange);
    }
    // start ticking
    this.tick();
  };

  Player.prototype.tick = function () {
    // do not tick if not playing
    if (this.state != 'playing') {
      return;
    }

    var time = this.parent.options.autoPlay;
    // default to 3 seconds
    time = typeof time == 'number' ? time : 3000;
    var _this = this;
    // HACK: reset ticks if stopped and started within interval
    this.clear();
    this.timeout = setTimeout(function () {
      _this.parent.next(true);
      _this.tick();
    }, time);
  };

  Player.prototype.stop = function () {
    this.state = 'stopped';
    this.clear();
    // remove visibility change event
    if (visibilityEvent) {
      document.removeEventListener(visibilityEvent, this.onVisibilityChange);
    }
  };

  Player.prototype.clear = function () {
    clearTimeout(this.timeout);
  };

  Player.prototype.pause = function () {
    if (this.state == 'playing') {
      this.state = 'paused';
      this.clear();
    }
  };

  Player.prototype.unpause = function () {
    // re-start play if paused
    if (this.state == 'paused') {
      this.play();
    }
  };

  // pause if page visibility is hidden, unpause if visible
  Player.prototype.visibilityChange = function () {
    var isPageHidden = document[hiddenProperty];
    this[isPageHidden ? 'pause' : 'unpause']();
  };

  Player.prototype.visibilityPlay = function () {
    this.play();
    document.removeEventListener(visibilityEvent, this.onVisibilityPlay);
  };

  // -------------------------- Flickity -------------------------- //

  utils.extend(Flickity.defaults, {
    pauseAutoPlayOnHover: true
  });

  Flickity.createMethods.push('_createPlayer');
  var proto = Flickity.prototype;

  proto._createPlayer = function () {
    this.player = new Player(this);

    this.on('activate', this.activatePlayer);
    this.on('uiChange', this.stopPlayer);
    this.on('pointerDown', this.stopPlayer);
    this.on('deactivate', this.deactivatePlayer);
  };

  proto.activatePlayer = function () {
    if (!this.options.autoPlay) {
      return;
    }
    this.player.play();
    this.element.addEventListener('mouseenter', this);
  };

  // Player API, don't hate the ... thanks I know where the door is

  proto.playPlayer = function () {
    this.player.play();
  };

  proto.stopPlayer = function () {
    this.player.stop();
  };

  proto.pausePlayer = function () {
    this.player.pause();
  };

  proto.unpausePlayer = function () {
    this.player.unpause();
  };

  proto.deactivatePlayer = function () {
    this.player.stop();
    this.element.removeEventListener('mouseenter', this);
  };

  // ----- mouseenter/leave ----- //

  // pause auto-play on hover
  proto.onmouseenter = function () {
    if (!this.options.pauseAutoPlayOnHover) {
      return;
    }
    this.player.pause();
    this.element.addEventListener('mouseleave', this);
  };

  // resume auto-play on hover off
  proto.onmouseleave = function () {
    this.player.unpause();
    this.element.removeEventListener('mouseleave', this);
  };

  // -----  ----- //

  Flickity.Player = Player;

  return Flickity;
});

},{"./flickity":23,"ev-emitter":17,"fizzy-ui-utils":18}],28:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// prev/next buttons
(function (window, factory) {
  // universal module definition
  /* jshint strict: false */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['./flickity', 'tap-listener/tap-listener', 'fizzy-ui-utils/utils'], function (Flickity, TapListener, utils) {
      return factory(window, Flickity, TapListener, utils);
    });
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(window, require('./flickity'), require('tap-listener'), require('fizzy-ui-utils'));
  } else {
    // browser global
    factory(window, window.Flickity, window.TapListener, window.fizzyUIUtils);
  }
})(window, function factory(window, Flickity, TapListener, utils) {
  'use strict';

  var svgURI = 'http://www.w3.org/2000/svg';

  // -------------------------- PrevNextButton -------------------------- //

  function PrevNextButton(direction, parent) {
    this.direction = direction;
    this.parent = parent;
    this._create();
  }

  PrevNextButton.prototype = new TapListener();

  PrevNextButton.prototype._create = function () {
    // properties
    this.isEnabled = true;
    this.isPrevious = this.direction == -1;
    var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
    this.isLeft = this.direction == leftDirection;

    var element = this.element = document.createElement('button');
    element.className = 'flickity-prev-next-button';
    element.className += this.isPrevious ? ' previous' : ' next';
    // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
    element.setAttribute('type', 'button');
    // init as disabled
    this.disable();

    element.setAttribute('aria-label', this.isPrevious ? 'previous' : 'next');

    // create arrow
    var svg = this.createSVG();
    element.appendChild(svg);
    // events
    this.on('tap', this.onTap);
    this.parent.on('select', this.update.bind(this));
    this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
  };

  PrevNextButton.prototype.activate = function () {
    this.bindTap(this.element);
    // click events from keyboard
    this.element.addEventListener('click', this);
    // add to DOM
    this.parent.element.appendChild(this.element);
  };

  PrevNextButton.prototype.deactivate = function () {
    // remove from DOM
    this.parent.element.removeChild(this.element);
    // do regular TapListener destroy
    TapListener.prototype.destroy.call(this);
    // click events from keyboard
    this.element.removeEventListener('click', this);
  };

  PrevNextButton.prototype.createSVG = function () {
    var svg = document.createElementNS(svgURI, 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    var path = document.createElementNS(svgURI, 'path');
    var pathMovements = getArrowMovements(this.parent.options.arrowShape);
    path.setAttribute('d', pathMovements);
    path.setAttribute('class', 'arrow');
    // rotate arrow
    if (!this.isLeft) {
      path.setAttribute('transform', 'translate(100, 100) rotate(180) ');
    }
    svg.appendChild(path);
    return svg;
  };

  // get SVG path movmement
  function getArrowMovements(shape) {
    // use shape as movement if string
    if (typeof shape == 'string') {
      return shape;
    }
    // create movement string
    return 'M ' + shape.x0 + ',50' + ' L ' + shape.x1 + ',' + (shape.y1 + 50) + ' L ' + shape.x2 + ',' + (shape.y2 + 50) + ' L ' + shape.x3 + ',50 ' + ' L ' + shape.x2 + ',' + (50 - shape.y2) + ' L ' + shape.x1 + ',' + (50 - shape.y1) + ' Z';
  }

  PrevNextButton.prototype.onTap = function () {
    if (!this.isEnabled) {
      return;
    }
    this.parent.uiChange();
    var method = this.isPrevious ? 'previous' : 'next';
    this.parent[method]();
  };

  PrevNextButton.prototype.handleEvent = utils.handleEvent;

  PrevNextButton.prototype.onclick = function () {
    // only allow clicks from keyboard
    var focused = document.activeElement;
    if (focused && focused == this.element) {
      this.onTap();
    }
  };

  // -----  ----- //

  PrevNextButton.prototype.enable = function () {
    if (this.isEnabled) {
      return;
    }
    this.element.disabled = false;
    this.isEnabled = true;
  };

  PrevNextButton.prototype.disable = function () {
    if (!this.isEnabled) {
      return;
    }
    this.element.disabled = true;
    this.isEnabled = false;
  };

  PrevNextButton.prototype.update = function () {
    // index of first or last slide, if previous or next
    var slides = this.parent.slides;
    // enable is wrapAround and at least 2 slides
    if (this.parent.options.wrapAround && slides.length > 1) {
      this.enable();
      return;
    }
    var lastIndex = slides.length ? slides.length - 1 : 0;
    var boundIndex = this.isPrevious ? 0 : lastIndex;
    var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
    this[method]();
  };

  PrevNextButton.prototype.destroy = function () {
    this.deactivate();
  };

  // -------------------------- Flickity prototype -------------------------- //

  utils.extend(Flickity.defaults, {
    prevNextButtons: true,
    arrowShape: {
      x0: 10,
      x1: 60, y1: 50,
      x2: 70, y2: 40,
      x3: 30
    }
  });

  Flickity.createMethods.push('_createPrevNextButtons');
  var proto = Flickity.prototype;

  proto._createPrevNextButtons = function () {
    if (!this.options.prevNextButtons) {
      return;
    }

    this.prevButton = new PrevNextButton(-1, this);
    this.nextButton = new PrevNextButton(1, this);

    this.on('activate', this.activatePrevNextButtons);
  };

  proto.activatePrevNextButtons = function () {
    this.prevButton.activate();
    this.nextButton.activate();
    this.on('deactivate', this.deactivatePrevNextButtons);
  };

  proto.deactivatePrevNextButtons = function () {
    this.prevButton.deactivate();
    this.nextButton.deactivate();
    this.off('deactivate', this.deactivatePrevNextButtons);
  };

  // --------------------------  -------------------------- //

  Flickity.PrevNextButton = PrevNextButton;

  return Flickity;
});

},{"./flickity":23,"fizzy-ui-utils":18,"tap-listener":32}],29:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// slide
(function (window, factory) {
  // universal module definition
  /* jshint strict: false */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define(factory);
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.Slide = factory();
  }
})(window, function factory() {
  'use strict';

  function Slide(parent) {
    this.parent = parent;
    this.isOriginLeft = parent.originSide == 'left';
    this.cells = [];
    this.outerWidth = 0;
    this.height = 0;
  }

  var proto = Slide.prototype;

  proto.addCell = function (cell) {
    this.cells.push(cell);
    this.outerWidth += cell.size.outerWidth;
    this.height = Math.max(cell.size.outerHeight, this.height);
    // first cell stuff
    if (this.cells.length == 1) {
      this.x = cell.x; // x comes from first cell
      var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
      this.firstMargin = cell.size[beginMargin];
    }
  };

  proto.updateTarget = function () {
    var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
    var lastCell = this.getLastCell();
    var lastMargin = lastCell ? lastCell.size[endMargin] : 0;
    var slideWidth = this.outerWidth - (this.firstMargin + lastMargin);
    this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
  };

  proto.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  };

  proto.select = function () {
    this.changeSelectedClass('add');
  };

  proto.unselect = function () {
    this.changeSelectedClass('remove');
  };

  proto.changeSelectedClass = function (method) {
    this.cells.forEach(function (cell) {
      cell.element.classList[method]('is-selected');
    });
  };

  proto.getCellElements = function () {
    return this.cells.map(function (cell) {
      return cell.element;
    });
  };

  return Slide;
});

},{}],30:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * getSize v2.0.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false, console: false */

(function (window, factory) {
  'use strict';

  if (typeof define == 'function' && define.amd) {
    // AMD
    define(function () {
      return factory();
    });
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }
})(window, function factory() {
  'use strict';

  // -------------------------- helpers -------------------------- //

  // get a number from a string, not a percentage

  function getStyleSize(value) {
    var num = parseFloat(value);
    // not a percent like '100%', and a number
    var isValid = value.indexOf('%') == -1 && !isNaN(num);
    return isValid && num;
  }

  function noop() {}

  var logError = typeof console == 'undefined' ? noop : function (message) {
    console.error(message);
  };

  // -------------------------- measurements -------------------------- //

  var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];

  var measurementsLength = measurements.length;

  function getZeroSize() {
    var size = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    };
    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      size[measurement] = 0;
    }
    return size;
  }

  // -------------------------- getStyle -------------------------- //

  /**
   * getStyle, get style of element, check for Firefox bug
   * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
   */
  function getStyle(elem) {
    var style = getComputedStyle(elem);
    if (!style) {
      logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See http://bit.ly/getsizebug1');
    }
    return style;
  }

  // -------------------------- setup -------------------------- //

  var isSetup = false;

  var isBoxSizeOuter;

  /**
   * setup
   * check isBoxSizerOuter
   * do on first getSize() rather than on page load for Firefox bug
   */
  function setup() {
    // setup once
    if (isSetup) {
      return;
    }
    isSetup = true;

    // -------------------------- box sizing -------------------------- //

    /**
     * WebKit measures the outer-width on style.width on border-box elems
     * IE & Firefox<29 measures the inner-width
     */
    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.padding = '1px 2px 3px 4px';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px 2px 3px 4px';
    div.style.boxSizing = 'border-box';

    var body = document.body || document.documentElement;
    body.appendChild(div);
    var style = getStyle(div);

    getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize(style.width) == 200;
    body.removeChild(div);
  }

  // -------------------------- getSize -------------------------- //

  function getSize(elem) {
    setup();

    // use querySeletor if elem is string
    if (typeof elem == 'string') {
      elem = document.querySelector(elem);
    }

    // do not proceed on non-objects
    if (!elem || (typeof elem === 'undefined' ? 'undefined' : _typeof(elem)) != 'object' || !elem.nodeType) {
      return;
    }

    var style = getStyle(elem);

    // if hidden, everything is 0
    if (style.display == 'none') {
      return getZeroSize();
    }

    var size = {};
    size.width = elem.offsetWidth;
    size.height = elem.offsetHeight;

    var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

    // get all measurements
    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      var value = style[measurement];
      var num = parseFloat(value);
      // any 'auto', 'medium' value will be 0
      size[measurement] = !isNaN(num) ? num : 0;
    }

    var paddingWidth = size.paddingLeft + size.paddingRight;
    var paddingHeight = size.paddingTop + size.paddingBottom;
    var marginWidth = size.marginLeft + size.marginRight;
    var marginHeight = size.marginTop + size.marginBottom;
    var borderWidth = size.borderLeftWidth + size.borderRightWidth;
    var borderHeight = size.borderTopWidth + size.borderBottomWidth;

    var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

    // overwrite width and height if we can get it from style
    var styleWidth = getStyleSize(style.width);
    if (styleWidth !== false) {
      size.width = styleWidth + (
      // add padding and border unless it's already including it
      isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
    }

    var styleHeight = getStyleSize(style.height);
    if (styleHeight !== false) {
      size.height = styleHeight + (
      // add padding and border unless it's already including it
      isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
    }

    size.innerWidth = size.width - (paddingWidth + borderWidth);
    size.innerHeight = size.height - (paddingHeight + borderHeight);

    size.outerWidth = size.width + marginWidth;
    size.outerHeight = size.height + marginHeight;

    return size;
  }

  return getSize;
});

},{}],31:[function(require,module,exports){
"use strict";

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

},{}],32:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Tap listener v2.0.0
 * listens to taps
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

(function (window, factory) {
  // universal module definition
  /*jshint strict: false*/ /*globals define, module, require */

  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['unipointer/unipointer'], function (Unipointer) {
      return factory(window, Unipointer);
    });
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(window, require('unipointer'));
  } else {
    // browser global
    window.TapListener = factory(window, window.Unipointer);
  }
})(window, function factory(window, Unipointer) {

  'use strict';

  // --------------------------  TapListener -------------------------- //

  function TapListener(elem) {
    this.bindTap(elem);
  }

  // inherit Unipointer & EventEmitter
  var proto = TapListener.prototype = Object.create(Unipointer.prototype);

  /**
   * bind tap event to element
   * @param {Element} elem
   */
  proto.bindTap = function (elem) {
    if (!elem) {
      return;
    }
    this.unbindTap();
    this.tapElement = elem;
    this._bindStartEvent(elem, true);
  };

  proto.unbindTap = function () {
    if (!this.tapElement) {
      return;
    }
    this._bindStartEvent(this.tapElement, true);
    delete this.tapElement;
  };

  /**
   * pointer up
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto.pointerUp = function (event, pointer) {
    // ignore emulated mouse up clicks
    if (this.isIgnoringMouseUp && event.type == 'mouseup') {
      return;
    }

    var pointerPoint = Unipointer.getPointerPoint(pointer);
    var boundingRect = this.tapElement.getBoundingClientRect();
    var scrollX = window.pageXOffset;
    var scrollY = window.pageYOffset;
    // calculate if pointer is inside tapElement
    var isInside = pointerPoint.x >= boundingRect.left + scrollX && pointerPoint.x <= boundingRect.right + scrollX && pointerPoint.y >= boundingRect.top + scrollY && pointerPoint.y <= boundingRect.bottom + scrollY;
    // trigger callback if pointer is inside element
    if (isInside) {
      this.emitEvent('tap', [event, pointer]);
    }

    // set flag for emulated clicks 300ms after touchend
    if (event.type != 'mouseup') {
      this.isIgnoringMouseUp = true;
      // reset flag after 300ms
      var _this = this;
      setTimeout(function () {
        delete _this.isIgnoringMouseUp;
      }, 400);
    }
  };

  proto.destroy = function () {
    this.pointerDone();
    this.unbindTap();
  };

  // -----  ----- //

  return TapListener;
});

},{"unipointer":34}],33:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Unidragger v2.2.3
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

(function (window, factory) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['unipointer/unipointer'], function (Unipointer) {
      return factory(window, Unipointer);
    });
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(window, require('unipointer'));
  } else {
    // browser global
    window.Unidragger = factory(window, window.Unipointer);
  }
})(window, function factory(window, Unipointer) {

  'use strict';

  // -------------------------- Unidragger -------------------------- //

  function Unidragger() {}

  // inherit Unipointer & EvEmitter
  var proto = Unidragger.prototype = Object.create(Unipointer.prototype);

  // ----- bind start ----- //

  proto.bindHandles = function () {
    this._bindHandles(true);
  };

  proto.unbindHandles = function () {
    this._bindHandles(false);
  };

  /**
   * works as unbinder, as you can .bindHandles( false ) to unbind
   * @param {Boolean} isBind - will unbind if falsey
   */
  proto._bindHandles = function (isBind) {
    // munge isBind, default to true
    isBind = isBind === undefined ? true : !!isBind;
    // bind each handle
    var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';
    for (var i = 0; i < this.handles.length; i++) {
      var handle = this.handles[i];
      this._bindStartEvent(handle, isBind);
      handle[bindMethod]('click', this);
      // touch-action: none to override browser touch gestures
      // metafizzy/flickity#540
      if (window.PointerEvent) {
        handle.style.touchAction = isBind ? this._touchActionValue : '';
      }
    }
  };

  // prototype so it can be overwriteable by Flickity
  proto._touchActionValue = 'none';

  // ----- start event ----- //

  /**
   * pointer start
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto.pointerDown = function (event, pointer) {
    // dismiss range sliders
    if (event.target.nodeName == 'INPUT' && event.target.type == 'range') {
      // reset pointerDown logic
      this.isPointerDown = false;
      delete this.pointerIdentifier;
      return;
    }

    this._dragPointerDown(event, pointer);
    // kludge to blur focused inputs in dragger
    var focused = document.activeElement;
    if (focused && focused.blur) {
      focused.blur();
    }
    // bind move and end events
    this._bindPostStartEvents(event);
    this.emitEvent('pointerDown', [event, pointer]);
  };

  // base pointer down logic
  proto._dragPointerDown = function (event, pointer) {
    // track to see when dragging starts
    this.pointerDownPoint = Unipointer.getPointerPoint(pointer);

    var canPreventDefault = this.canPreventDefaultOnPointerDown(event, pointer);
    if (canPreventDefault) {
      event.preventDefault();
    }
  };

  // overwriteable method so Flickity can prevent for scrolling
  proto.canPreventDefaultOnPointerDown = function (event) {
    // prevent default, unless touchstart or <select>
    return event.target.nodeName != 'SELECT';
  };

  // ----- move event ----- //

  /**
   * drag move
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto.pointerMove = function (event, pointer) {
    var moveVector = this._dragPointerMove(event, pointer);
    this.emitEvent('pointerMove', [event, pointer, moveVector]);
    this._dragMove(event, pointer, moveVector);
  };

  // base pointer move logic
  proto._dragPointerMove = function (event, pointer) {
    var movePoint = Unipointer.getPointerPoint(pointer);
    var moveVector = {
      x: movePoint.x - this.pointerDownPoint.x,
      y: movePoint.y - this.pointerDownPoint.y
    };
    // start drag if pointer has moved far enough to start drag
    if (!this.isDragging && this.hasDragStarted(moveVector)) {
      this._dragStart(event, pointer);
    }
    return moveVector;
  };

  // condition if pointer has moved far enough to start drag
  proto.hasDragStarted = function (moveVector) {
    return Math.abs(moveVector.x) > 3 || Math.abs(moveVector.y) > 3;
  };

  // ----- end event ----- //

  /**
   * pointer up
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto.pointerUp = function (event, pointer) {
    this.emitEvent('pointerUp', [event, pointer]);
    this._dragPointerUp(event, pointer);
  };

  proto._dragPointerUp = function (event, pointer) {
    if (this.isDragging) {
      this._dragEnd(event, pointer);
    } else {
      // pointer didn't move enough for drag to start
      this._staticClick(event, pointer);
    }
  };

  // -------------------------- drag -------------------------- //

  // dragStart
  proto._dragStart = function (event, pointer) {
    this.isDragging = true;
    this.dragStartPoint = Unipointer.getPointerPoint(pointer);
    // prevent clicks
    this.isPreventingClicks = true;

    this.dragStart(event, pointer);
  };

  proto.dragStart = function (event, pointer) {
    this.emitEvent('dragStart', [event, pointer]);
  };

  // dragMove
  proto._dragMove = function (event, pointer, moveVector) {
    // do not drag if not dragging yet
    if (!this.isDragging) {
      return;
    }

    this.dragMove(event, pointer, moveVector);
  };

  proto.dragMove = function (event, pointer, moveVector) {
    event.preventDefault();
    this.emitEvent('dragMove', [event, pointer, moveVector]);
  };

  // dragEnd
  proto._dragEnd = function (event, pointer) {
    // set flags
    this.isDragging = false;
    // re-enable clicking async
    setTimeout(function () {
      delete this.isPreventingClicks;
    }.bind(this));

    this.dragEnd(event, pointer);
  };

  proto.dragEnd = function (event, pointer) {
    this.emitEvent('dragEnd', [event, pointer]);
  };

  // ----- onclick ----- //

  // handle all clicks and prevent clicks when dragging
  proto.onclick = function (event) {
    if (this.isPreventingClicks) {
      event.preventDefault();
    }
  };

  // ----- staticClick ----- //

  // triggered after pointer down & up with no/tiny movement
  proto._staticClick = function (event, pointer) {
    // ignore emulated mouse up clicks
    if (this.isIgnoringMouseUp && event.type == 'mouseup') {
      return;
    }

    // allow click in <input>s and <textarea>s
    var nodeName = event.target.nodeName;
    if (nodeName == 'INPUT' || nodeName == 'TEXTAREA') {
      event.target.focus();
    }
    this.staticClick(event, pointer);

    // set flag for emulated clicks 300ms after touchend
    if (event.type != 'mouseup') {
      this.isIgnoringMouseUp = true;
      // reset flag after 300ms
      setTimeout(function () {
        delete this.isIgnoringMouseUp;
      }.bind(this), 400);
    }
  };

  proto.staticClick = function (event, pointer) {
    this.emitEvent('staticClick', [event, pointer]);
  };

  // ----- utils ----- //

  Unidragger.getPointerPoint = Unipointer.getPointerPoint;

  // -----  ----- //

  return Unidragger;
});

},{"unipointer":34}],34:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Unipointer v2.2.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /*global define, module, require */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['ev-emitter/ev-emitter'], function (EvEmitter) {
      return factory(window, EvEmitter);
    });
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(window, require('ev-emitter'));
  } else {
    // browser global
    window.Unipointer = factory(window, window.EvEmitter);
  }
})(window, function factory(window, EvEmitter) {

  'use strict';

  function noop() {}

  function Unipointer() {}

  // inherit EvEmitter
  var proto = Unipointer.prototype = Object.create(EvEmitter.prototype);

  proto.bindStartEvent = function (elem) {
    this._bindStartEvent(elem, true);
  };

  proto.unbindStartEvent = function (elem) {
    this._bindStartEvent(elem, false);
  };

  /**
   * works as unbinder, as you can ._bindStart( false ) to unbind
   * @param {Boolean} isBind - will unbind if falsey
   */
  proto._bindStartEvent = function (elem, isBind) {
    // munge isBind, default to true
    isBind = isBind === undefined ? true : !!isBind;
    var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';

    if (window.PointerEvent) {
      // Pointer Events. Chrome 55, IE11, Edge 14
      elem[bindMethod]('pointerdown', this);
    } else {
      // listen for both, for devices like Chrome Pixel
      elem[bindMethod]('mousedown', this);
      elem[bindMethod]('touchstart', this);
    }
  };

  // trigger handler methods for events
  proto.handleEvent = function (event) {
    var method = 'on' + event.type;
    if (this[method]) {
      this[method](event);
    }
  };

  // returns the touch that we're keeping track of
  proto.getTouch = function (touches) {
    for (var i = 0; i < touches.length; i++) {
      var touch = touches[i];
      if (touch.identifier == this.pointerIdentifier) {
        return touch;
      }
    }
  };

  // ----- start event ----- //

  proto.onmousedown = function (event) {
    // dismiss clicks from right or middle buttons
    var button = event.button;
    if (button && button !== 0 && button !== 1) {
      return;
    }
    this._pointerDown(event, event);
  };

  proto.ontouchstart = function (event) {
    this._pointerDown(event, event.changedTouches[0]);
  };

  proto.onpointerdown = function (event) {
    this._pointerDown(event, event);
  };

  /**
   * pointer start
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto._pointerDown = function (event, pointer) {
    // dismiss other pointers
    if (this.isPointerDown) {
      return;
    }

    this.isPointerDown = true;
    // save pointer identifier to match up touch events
    this.pointerIdentifier = pointer.pointerId !== undefined ?
    // pointerId for pointer events, touch.indentifier for touch events
    pointer.pointerId : pointer.identifier;

    this.pointerDown(event, pointer);
  };

  proto.pointerDown = function (event, pointer) {
    this._bindPostStartEvents(event);
    this.emitEvent('pointerDown', [event, pointer]);
  };

  // hash of events to be bound after start event
  var postStartEvents = {
    mousedown: ['mousemove', 'mouseup'],
    touchstart: ['touchmove', 'touchend', 'touchcancel'],
    pointerdown: ['pointermove', 'pointerup', 'pointercancel']
  };

  proto._bindPostStartEvents = function (event) {
    if (!event) {
      return;
    }
    // get proper events to match start event
    var events = postStartEvents[event.type];
    // bind events to node
    events.forEach(function (eventName) {
      window.addEventListener(eventName, this);
    }, this);
    // save these arguments
    this._boundPointerEvents = events;
  };

  proto._unbindPostStartEvents = function () {
    // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
    if (!this._boundPointerEvents) {
      return;
    }
    this._boundPointerEvents.forEach(function (eventName) {
      window.removeEventListener(eventName, this);
    }, this);

    delete this._boundPointerEvents;
  };

  // ----- move event ----- //

  proto.onmousemove = function (event) {
    this._pointerMove(event, event);
  };

  proto.onpointermove = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerMove(event, event);
    }
  };

  proto.ontouchmove = function (event) {
    var touch = this.getTouch(event.changedTouches);
    if (touch) {
      this._pointerMove(event, touch);
    }
  };

  /**
   * pointer move
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */
  proto._pointerMove = function (event, pointer) {
    this.pointerMove(event, pointer);
  };

  // public
  proto.pointerMove = function (event, pointer) {
    this.emitEvent('pointerMove', [event, pointer]);
  };

  // ----- end event ----- //


  proto.onmouseup = function (event) {
    this._pointerUp(event, event);
  };

  proto.onpointerup = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerUp(event, event);
    }
  };

  proto.ontouchend = function (event) {
    var touch = this.getTouch(event.changedTouches);
    if (touch) {
      this._pointerUp(event, touch);
    }
  };

  /**
   * pointer up
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */
  proto._pointerUp = function (event, pointer) {
    this._pointerDone();
    this.pointerUp(event, pointer);
  };

  // public
  proto.pointerUp = function (event, pointer) {
    this.emitEvent('pointerUp', [event, pointer]);
  };

  // ----- pointer done ----- //

  // triggered on pointer up & pointer cancel
  proto._pointerDone = function () {
    // reset properties
    this.isPointerDown = false;
    delete this.pointerIdentifier;
    // remove events
    this._unbindPostStartEvents();
    this.pointerDone();
  };

  proto.pointerDone = noop;

  // ----- pointer cancel ----- //

  proto.onpointercancel = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerCancel(event, event);
    }
  };

  proto.ontouchcancel = function (event) {
    var touch = this.getTouch(event.changedTouches);
    if (touch) {
      this._pointerCancel(event, touch);
    }
  };

  /**
   * pointer cancel
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */
  proto._pointerCancel = function (event, pointer) {
    this._pointerDone();
    this.pointerCancel(event, pointer);
  };

  // public
  proto.pointerCancel = function (event, pointer) {
    this.emitEvent('pointerCancel', [event, pointer]);
  };

  // -----  ----- //

  // utility function for getting x/y coords from event
  Unipointer.getPointerPoint = function (pointer) {
    return {
      x: pointer.pageX,
      y: pointer.pageY
    };
  };

  // -----  ----- //

  return Unipointer;
});

},{"ev-emitter":17}],35:[function(require,module,exports){
module.exports={
    "asset-path": "'../..'",
    "sass-config-parser": "eval-config",
    "component-glue": "'_'",
    "modifier-glue": "'-'"
}
},{}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scrollSpy = exports.smoothScroll = exports.parse = exports.parents = exports.media = exports.isValidSelector = exports.inViewport = exports.evalConfig = exports.custom = exports.typography = exports.grid = exports.core = exports.colors = exports.sideNav = exports.search = exports.scrollTop = exports.preloader = exports.overlay = exports.header = exports.googleMap = exports.tooltips = exports.tabs = exports.progressBar = exports.modal = exports.carousel = exports.accordion = exports.Flickity = exports.deepextend = exports.Synergy = exports.config = exports.global = undefined;

var _app = require('./app.json');

Object.defineProperty(exports, 'global', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_app).default;
    }
});

var _app2 = require('./app');

var app = _interopRequireWildcard(_app2);

var _Synergy = require('Synergy');

var _Synergy2 = _interopRequireDefault(_Synergy);

var _deepExtend = require('deep-extend');

var _deepExtend2 = _interopRequireDefault(_deepExtend);

var _flickity = require('flickity');

var _flickity2 = _interopRequireDefault(_flickity);

var _accordions = require('./modules/elements/accordions/accordions');

var _carousels = require('./modules/elements/carousels/carousels');

var _modals = require('./modules/elements/modals/modals');

var _progressBars = require('./modules/elements/progress-bars/progress-bars');

var _tabs = require('./modules/elements/tabs/tabs');

var _tooltips = require('./modules/elements/tooltips/tooltips');

var _googleMap = require('./modules/objects/google-map/google-map');

var _header = require('./modules/objects/header/header');

var _overlay = require('./modules/objects/overlay/overlay');

var _preloader = require('./modules/objects/preloader/preloader');

var _scrollTop = require('./modules/objects/scroll-top/scroll-top');

var _search = require('./modules/objects/search/search');

var _sideNav = require('./modules/objects/side-nav/side-nav');

var _colors = require('./modules/utilities/colors/colors');

var _core = require('./modules/utilities/core/core');

var _grid = require('./modules/utilities/grid/grid');

var _typography = require('./modules/utilities/typography/typography');

var _app3 = require('./tools/js/app.custom');

var _app4 = require('./tools/js/app.evalConfig');

var _app5 = require('./tools/js/app.inViewport');

var _app6 = require('./tools/js/app.isValidSelector');

var _app7 = require('./tools/js/app.media');

var _app8 = require('./tools/js/app.parents');

var _app9 = require('./tools/js/app.parse');

var _app10 = require('./tools/js/app.smoothScroll');

var _app11 = require('./tools/js/app.scrollSpy');

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

// Instantiate the configuration object 
var config = exports.config = {};

// Vendor
//*****************************************************************

exports.Synergy = _Synergy2.default;
exports.deepextend = _deepExtend2.default;
exports.Flickity = _flickity2.default;

// Modules
//*****************************************************************

// Elements


// Objects


// Utilities

exports.accordion = _accordions.accordion;
exports.carousel = _carousels.carousel;
exports.modal = _modals.modal;
exports.progressBar = _progressBars.progressBar;
exports.tabs = _tabs.tabs;
exports.tooltips = _tooltips.tooltips;
exports.googleMap = _googleMap.googleMap;
exports.header = _header.header;
exports.overlay = _overlay.overlay;
exports.preloader = _preloader.preloader;
exports.scrollTop = _scrollTop.scrollTop;
exports.search = _search.search;
exports.sideNav = _sideNav.sideNav;
exports.colors = _colors.colors;
exports.core = _core.core;
exports.grid = _grid.grid;
exports.typography = _typography.typography;

// Tools
//*****************************************************************

exports.custom = _app3.custom;
exports.evalConfig = _app4.evalConfig;
exports.inViewport = _app5.inViewport;
exports.isValidSelector = _app6.isValidSelector;
exports.media = _app7.media;
exports.parents = _app8.parents;
exports.parse = _app9.parse;
exports.smoothScroll = _app10.smoothScroll;
exports.scrollSpy = _app11.scrollSpy;

// Attach `app` to the Window object

window.APPUI = window.APPUI || app;

// Global Methods
//*****************************************************************

Element.prototype.component = function (component, set) {
    return (0, _Synergy2.default)(this).component(component, set, this);
};

Element.prototype.modifier = function (modifier, set) {
    return (0, _Synergy2.default)(this).modifier(modifier, set, this);
};

Element.prototype.parents = function (selector) {
    return (0, _app8.parents)(this, selector);
};

},{"./app":36,"./app.json":35,"./modules/elements/accordions/accordions":38,"./modules/elements/carousels/carousels":40,"./modules/elements/modals/modals":42,"./modules/elements/progress-bars/progress-bars":44,"./modules/elements/tabs/tabs":46,"./modules/elements/tooltips/tooltips":48,"./modules/objects/google-map/google-map":50,"./modules/objects/header/header":52,"./modules/objects/overlay/overlay":54,"./modules/objects/preloader/preloader":56,"./modules/objects/scroll-top/scroll-top":58,"./modules/objects/search/search":60,"./modules/objects/side-nav/side-nav":62,"./modules/utilities/colors/colors":64,"./modules/utilities/core/core":66,"./modules/utilities/grid/grid":68,"./modules/utilities/typography/typography":70,"./tools/js/app.custom":73,"./tools/js/app.evalConfig":74,"./tools/js/app.inViewport":75,"./tools/js/app.isValidSelector":76,"./tools/js/app.media":77,"./tools/js/app.parents":78,"./tools/js/app.parse":79,"./tools/js/app.scrollSpy":80,"./tools/js/app.smoothScroll":81,"Synergy":2,"deep-extend":15,"flickity":24}],37:[function(require,module,exports){
module.exports={
    "accordions": {
        "name": "accordion",
        "section": {
            "vertical-rhythm": 0
        },
        "title": {
            "background": "transparent",
            "color": ["#CORE", "text-color"],
            "border": "1px solid rgba(black, 0.15)",
            "border-radius": 0,
            "padding": "1em",
            "transition": ["#CORE", "transition"],
            "hover": {
                "background": ["#COLOR", "brand", "brand-1"],
                "color": ["#COLOR", "greyscale", "white"]
            },
            "active": {
                "background": ["#COLOR", "brand", "brand-1"],
                "color": ["#COLOR", "greyscale", "white"],
                "border-color": "transparent",
                "border-radius": 0
            }
        },
        "content": {
            "background": ["#COLOR", "greyscale", "white"],
            "color": ["#CORE", "text-color"],
            "border": "1px solid rgba(black, 0.15)",
            "border-radius": 0,
            "padding": "1.5em"
        },
        "icon": {
            "glyph": "'\\f138'",
            "color": ["#COLOR", "opaque", "dark-4"]
        },
        "animationSpeed": 400,
        "keepOpenModifier": "keepOpen"
    }
}
},{}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.accordion = accordion;

var _app = require('../../../app');

var app = _interopRequireWildcard(_app);

var _accordions = require('./accordions.json');

var _accordions2 = _interopRequireDefault(_accordions);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

/**
 * Accordion
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
function accordion() {
    var els = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'accordion';
    var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    custom = app.custom('accordions', custom);

    app.Synergy(els, function (el, options) {

        if (!el.getAttribute('data-initialised')) {
            el.component('section').forEach(function (section, index) {
                if (section.modifier('active')) {
                    section.component('content')[0].modifier('active', 'set');
                }

                section.component('title')[0].addEventListener('click', function () {
                    clickHandler(el, section, options);
                }, false);
            });
            el.setAttribute('data-initialised', true);
        }

        exports.open = function (target) {
            return exports.toggle('open', target);
        };
        exports.close = function (target) {
            return exports.toggle('close', target);
        };

        exports.toggle = function (type, target) {
            return toggleAccordion(type, el, target, options);
        };
    }, _accordions2.default, custom, app.evalConfig);

    app.config.accordions = app.parse(_accordions2.default.accordions, custom);

    return exports;
}

/**
 * clickHandler
 * 
 * @access private
 * 
 * @param {Object} accordion
 * @param {Object} section
 * @param {Object} options
 */
function clickHandler(accordion, section, options) {
    var active = section.modifier('active', 'isset');

    if (!accordion.modifier(options.keepOpenModifier)) {
        accordion.component('section').forEach(function (el) {
            return toggleAccordion('close', accordion, el, options);
        });
    }

    if (active) {
        toggleAccordion('close', accordion, section, options);
    } else {
        toggleAccordion('open', accordion, section, options);
    }
}

/**
 * toggleAccordion
 * 
 * @access private
 * 
 * @param {('open'|'close')} type
 * @param {HTMLElement} parent
 * @param {(String|Number|HTMLElement|NodeList)} target
 * @param {Object} options
 */
function toggleAccordion(type, parent, target, options) {
    var section = void 0;

    var operator = type === 'open' ? 'set' : 'unset';

    if (typeof target === 'string') {
        section = parent.querySelectorAll(target);
    } else if (typeof target === 'number') {
        section = parent.children[target - 1];
    } else if (target instanceof HTMLElement || target instanceof NodeList) {
        section = target;
    } else if (!target) {
        section = parent.component('section');
    }

    if (section instanceof NodeList) {
        section.forEach(function (el) {
            return toggleActiveClass(el);
        });
    } else {
        toggleActiveClass(section);
    }

    function toggleActiveClass(el) {
        el.modifier('active', operator);
        el.component('title')[0].modifier('active', operator);
        el.component('content')[0].modifier('active', operator);
    }
}

},{"../../../app":36,"./accordions.json":37}],39:[function(require,module,exports){
module.exports={
    "carousels": {
        "name": "carousel",
        "navigationItem": {
            "disable": false,
            "size": ["#FONT-SIZE", "size-10"],
            "background-color": ["#COLOR", "opaque", "light-8"],
            "arrow-color": ["#COLOR", "opaque", "dark-4"],
            "arrow-size": "40%",
            "shape": "circle",
            "transition": ["#CORE", "transition"]
        },
        "bullet": {
            "disable": false,
            "size": "10px",
            "gutter": "25px",
            "fill": ["#COLOR", "opaque", "dark-4"],
            "active-fill": ["#COLOR", "brand", "brand-3"],
            "transition": ["#CORE", "transition"]
        },
        "Flickity": {
            "cellAlign": "left",
            "contain": true
        }
    }
}
},{}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () {
    function sliceIterator(arr, i) {
        var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;_e = err;
        } finally {
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }return _arr;
    }return function (arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
        } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
    };
}();

exports.carousel = carousel;

var _app = require('../../../app');

var app = _interopRequireWildcard(_app);

var _carousels = require('./carousels.json');

var _carousels2 = _interopRequireDefault(_carousels);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

/**
 * Carousel
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 */
function carousel() {
    var els = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'carousel';
    var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    custom = app.custom('carousels', custom);

    // Map Flickity elements to One-Nexus components
    var components = {
        'wrapper': '.flickity-viewport',
        'pagination': '.flickity-page-dots',
        'bullet': '.dot',
        'navigation': '',
        'navigationItem': '.flickity-prev-next-button',
        'navigationItem-prev': '.flickity-prev-next-button.previous',
        'navigationItem-next': '.flickity-prev-next-button.next'
    };

    app.Synergy(els, function (el, options) {
        // Get options from data-attr (if applicable)
        if (el.hasAttribute('data-carousel')) {
            var dataOptions = JSON.parse(el.getAttribute('data-carousel'));
            options.Flickity = Object.assign(options.Flickity, dataOptions);
        }

        // Create new Flickity instance
        var carousel = new app.Flickity(el, options.Flickity);

        carousel.on('select', function () {
            // add One-Nexus class to bullet
            el.querySelector('.dot.is-selected').classList.add(options.name + '_' + 'bullet');
        });

        // Add appropriate classes to carousel elements for styles
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.entries(components)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _step$value = _slicedToArray(_step.value, 2),
                    key = _step$value[0],
                    value = _step$value[1];

                if (value) {
                    var identifier = options.name + '_' + key;
                    var _components = el.querySelectorAll(value);

                    elInit(_components, identifier);
                }
            }

            // Compensate for pagination
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        if (!options.navigationItem.disable) {
            var offset = el.component('pagination')[0].clientHeight + parseInt(options.bullet.gutter, 10);
            el.style.marginBottom = offset + 'px';
        }

        exports.Flickity = carousel;

        function elInit(els, identifier) {
            els.forEach(function (el) {
                return el.classList.add(identifier);
            });
        }
    }, _carousels2.default, custom, app.evalConfig);

    app.config.carousels = app.parse(_carousels2.default.carousels, custom);

    return exports;
}

},{"../../../app":36,"./carousels.json":39}],41:[function(require,module,exports){
module.exports={
    "modals": {
        "name": "modal",
        "dafault-animation": "left",
        "background": ["#COLOR", "greyscale", "grey-1"],
        "color": ["#CORE", "text-color"],
        "width": "650px",
        "border-radius": 0,
        "transition": ["#CORE", "transition"],
        "z-index": 14,
        "content": {
            "padding": "2em"
        },
        "close": {
            "size": ["#FONT-SIZE", "size-6"],
            "top": "1rem",
            "right": "1rem",
            "color": ["#COLOR", "greyscale", "grey-3"],
            "hover-color": ["#COLOR", "brand", "brand-1"],
            "transition": ["#CORE", "transition"]
        },
        "overlay": {
            "module": "overlay",
            "enabled": true,
            "clickToClose": true
        }
    }
}
},{}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.modal = modal;

var _app = require('../../../app');

var app = _interopRequireWildcard(_app);

var _modals = require('./modals.json');

var _modals2 = _interopRequireDefault(_modals);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

/**
 * Modal
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 */
function modal() {
    var els = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'modal';
    var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    custom = app.custom('modals', custom);

    app.Synergy(els, function (el, options) {

        // Create any dynamic modals then re-run the function
        if (!(app.config.modals && 'initialised' in app.config.modals)) {
            if (app.config.modals) {
                app.config.modals.initialised = true;
            } else {
                app.config.modals = { initialised: true };
            }

            initModals(document.querySelectorAll('[data-modal-content]'), options.name);

            return app.modal(els);
        }

        var overlay = app.Synergy(options.overlay.module).query[0];

        var show = function show() {
            return toggleModal('show', els, el, options, overlay);
        };
        var hide = function hide() {
            return toggleModal('hide', els, el, options, overlay);
        };

        // setup animation modifier
        if (el.modifier('animate') !== true && options['dafault-animation']) {
            el.modifier('animate-' + options['dafault-animation'], 'add');
        }

        // setup overlay as modal close trigger
        if (options.overlay.clickToClose) {
            app.Synergy([overlay, options.name]).query.component('close', 'add');
        }

        // Open/Close Triggers
        var openTriggers = document.querySelectorAll('[data-modal-target="' + el.id + '"], [href="#' + el.id + '"]');
        // @todo add option to change to el.component('close') to protect outside influences
        var closeTriggers = app.Synergy(options.name).component('close');

        openTriggers.forEach(function (trigger) {
            return trigger.addEventListener('click', show, false);
        });
        closeTriggers.forEach(function (trigger) {
            return trigger.addEventListener('click', hide, false);
        });

        exports.toggle = function (operator) {
            if (el.modifier('visible') || operator === 'hide') exports.hide();else exports.show();
        };

        exports.show = function () {
            return toggleModal('show', els, el, options, overlay);
        };
        exports.hide = function () {
            return toggleModal('hide', els, el, options, overlay);
        };
    }, _modals2.default, custom, app.evalConfig);

    app.config.modals = app.parse(app.config.modals ? app.config.modals : '', _modals2.default.modals, custom);

    return exports;
}

/**
 * Show/Hide a Modal
 * 
 * @access private
 * 
 * @param {('show'|'hide')} type - the type of toggle to activate
 * @param {(String|HTMLElement|NodeList)} all - a Synergy selector to match all modals
 * @param {(String|HTMLElement)} target - a Synergy selector to match the modal of interest
 * @param {Object} options - the module options to use when running the function
 * @param {HTMLElement} [overlay] - the HTML element acting as the page overlay
 */
function toggleModal(type, all, target, options, overlay) {
    // close any other currently openened modals
    if (type === 'show' && app.isValidSelector(all) && document.querySelector(all) !== target) {
        app.Synergy(all, function (el) {
            return toggleModal('hide', all, el, options, overlay);
        });
    }

    // toggle the page overlay
    if (options.overlay.enabled) app.overlay(overlay)[type]('dialog');

    // toggle the target modal
    app.Synergy(target).modifier('visible', type === 'show' ? 'add' : 'remove');
}

/**
 * Initialise Modals from Data-Attributes
 * 
 * @access private
 * 
 * @param {NodeList} els - elements to initialise as modals
 * @param {String} namespace - name of modal module
 */
function initModals(els, namespace) {
    els.forEach(function (el, index) {
        var id = el.href ? el.href.substr(el.href.lastIndexOf('/') + 1).replace(/^#/, '') : '_modal_' + index;
        var style = el.getAttribute('data-modal-style') ? '-animate-' + el.getAttribute('data-modal-style') : '';
        var content = el.getAttribute('data-modal-content');

        var template = ['\n            <div class="' + namespace + style + '" id="' + id + '">\n                <div class="' + namespace + '_close"><i class="fa fa-times"></i></div>\n                <div class="' + namespace + '_content">' + content + '</div>\n            </div>\n        '];

        el.setAttribute('data-modal-target', id);

        document.body.insertAdjacentHTML('beforeend', template);
    });
}

},{"../../../app":36,"./modals.json":41}],43:[function(require,module,exports){
module.exports={
    "progress-bars": {
        "name": "progress-bar",
        "background": ["#COLOR", "opaque", "dark-1"],
        "height": "1.5em",
        "border-radius": "0",
        "fill-background": ["#COLOR", "brand", "brand-1"],
        "value-color": ["#COLOR", "greyscale", "white"],
        "value-size": ["#FONT-SIZE", "size-2"],
        "group-spacing": "0.5em"
    }
}
},{}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.progressBar = progressBar;

var _app = require('../../../app');

var app = _interopRequireWildcard(_app);

var _progressBars = require('./progress-bars.json');

var _progressBars2 = _interopRequireDefault(_progressBars);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

/**
 * Modal
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 */
function progressBar() {
    var els = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'progress-bar';
    var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    custom = app.custom('progress-bars', custom);

    app.Synergy(els, function (el, options) {
        var progress = el.getAttribute('data-progress');

        el.setAttribute('value', progress.replace(/[^-\d\.]/g, ''));
    }, _progressBars2.default, custom, app.evalConfig);

    app.config['progress-bars'] = app.deepextend(_progressBars2.default['progress-bars'], custom);

    return exports;
}

},{"../../../app":36,"./progress-bars.json":43}],45:[function(require,module,exports){
module.exports={
    "tabs": {
        "name": "tabs",
        "nav": {
            "item": {
                "transition": ["#CORE", "transition"],
                "color": ["#CORE", "text-color"],
                "background": "transparent",
                "round-radius": "0.6em",
                "padding": "0.75em 1.25em",
                "border": "1px solid",
                "border-color": ["#COLOR", "greyscale", "grey-3"],
                "hover": {
                    "color": ["#COLOR", "greyscale", "white"],
                    "background": ["#COLOR", "brand", "brand-3"],
                    "border-color": ["#COLOR", "brand", "brand-3"]
                },
                "active": {
                    "color": ["#COLOR", "greyscale", "white"],
                    "background": ["#COLOR", "brand", "brand-1"],
                    "border-color": ["#COLOR", "brand", "brand-1"]
                }
            }
        },
        "content": {
            "color": ["#CORE", "text-color"],
            "background": ["#COLOR", "greyscale", "white"],
            "border": "1px solid",
            "border-color": ["#COLOR", "greyscale", "grey-2"],
            "padding": "1.5em",
            "glueHeight": "6px",
            "glueColor": ["#COLOR", "brand", "brand-1"]
        }
    }
}
},{}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tabs = tabs;

var _app = require('../../../app');

var app = _interopRequireWildcard(_app);

var _tabs = require('./tabs.json');

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

/**
 * Tabs
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 */
function tabs() {
    var els = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tabs';
    var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    custom = app.custom('tabs', custom);

    app.Synergy(els, function (el, options) {
        // Get individual tab items
        var tabItems = function tabItems() {
            // get depth of target tab items as tabs may be nested
            var itemDepth = el.component('item')[0].parents().length;
            // get all items of same depth
            return Array.prototype.filter.call(el.component('item'), function (el) {
                return el.parents().length === itemDepth;
            });
        };

        Array.prototype.forEach.call(el.component('nav')[0].children, function (item, index) {
            item.addEventListener('click', function () {
                Array.prototype.forEach.call(item.parentNode.children, function (sibling) {
                    sibling.modifier('active', 'unset');

                    if (options.activeClass) sibling.classList.remove(options.activeClass);
                });

                item.modifier('active', 'set');

                if (options.activeClass) {
                    item.classList.add(options.activeClass);
                }

                // Hide previously selected item
                tabItems().forEach(function (tab) {
                    return tab.modifier('active', 'unset');
                });
                // Show new item
                tabItems()[index].modifier('active', 'set');
            });
        });
    }, _tabs2.default, custom, app.evalConfig);

    app.config.tabs = app.parse(_tabs2.default.tabs, custom);

    return exports;
}

},{"../../../app":36,"./tabs.json":45}],47:[function(require,module,exports){
module.exports={
    "tooltips": {
        "name": "tooltip",
        "distance": "-1em",
        "arrow-size": "0.5em",
        "arrow-color": ["#COLOR", "opaque", "dark-8"],
        "content": {
            "max-width": "500px",
            "padding": "0.5em 0.75em",
            "border-radius": "0",
            "line-height": "1.75",
            "background": ["#COLOR", "opaque", "dark-8"],
            "font-size": ["#FONT-SIZE", "size-2", true],
            "font-family": ["#CORE", "font-family"],
            "text-transform": "none",
            "font-weight": "normal",
            "color": "white",
            "transition": ["#CORE", "transition"],
            "z-index": 9999
        }
    }
}
},{}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tooltips = tooltips;

var _app = require('../../../app');

var app = _interopRequireWildcard(_app);

var _tooltips = require('./tooltips.json');

var _tooltips2 = _interopRequireDefault(_tooltips);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

/**
 * Tabs
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 */
function tooltips() {
    var els = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tooltip';
    var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    custom = app.custom('tooltips', custom);

    app.Synergy(els, function (el, options) {

        var position = 'top';
        var content = el.getAttribute('data-tooltip');

        ['top', 'bottom', 'left', 'right'].forEach(function (pos) {
            el.modifier().forEach(function (modifier) {
                if (modifier === pos) position = pos;
            });
        });

        var template = ['\n            <div class="tooltip_wrapper-' + position + '">\n                <div class="tooltip_content">' + content + '</div>\n            </div>\n        '];

        el.setAttribute('ontouchstart', '');
        el.insertAdjacentHTML('beforeend', template);
    }, _tooltips2.default, custom, app.evalConfig);

    app.config.tooltips = app.parse(_tooltips2.default.tooltips, custom);

    return exports;
}

},{"../../../app":36,"./tooltips.json":47}],49:[function(require,module,exports){
module.exports={
    "google-map": {
        "name": "google-map",
        "height": "375px",
        "longitude": -33.866758, 
        "latitude": 151.208514,
        "googleApi": {
            "scrollwheel": false,
            "draggable": false,
            "zoom": 13
        }
    }
}
},{}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.googleMap = googleMap;

var _app = require('../../../app');

var app = _interopRequireWildcard(_app);

var _googleMap = require('./google-map.json');

var _googleMap2 = _interopRequireDefault(_googleMap);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

/**
 * Google Map
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
function googleMap() {
    var els = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'google-map';
    var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    custom = app.custom('google-map', custom);

    app.Synergy(els, function (el, options) {

        // set some default map styles
        options.styles = options.styles || [{
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f7f1df"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [{
                "color": "#d0e3b4"
            }]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.business",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.medical",
            "elementType": "geometry",
            "stylers": [{
                "color": "#fbd3da"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#bde6ab"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffe15f"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#efd151"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "black"
            }]
        }, {
            "featureType": "transit.station.airport",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#cfb2db"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#a2daf2"
            }]
        }];

        // merge any data-attribute options
        if (el.hasAttribute('data-google-map')) {
            options = Object.assign(options, JSON.parse(el.getAttribute('data-google-map')));
        }

        // set final googleApi options
        options.googleApi = Object.assign(options.googleApi, {
            styles: options.styles,
            center: new google.maps.LatLng(options.longitude, options.latitude)
        });

        // set height of google map
        el.style.height = options.height;

        // create the google map
        google.maps.event.addDomListener(window, 'load', new google.maps.Map(el, options.googleApi));
    }, _googleMap2.default, custom, app.evalConfig);

    app.config['google-map'] = app.parse(_googleMap2.default['google-map'], custom);

    return exports;
}

},{"../../../app":36,"./google-map.json":49}],51:[function(require,module,exports){
module.exports={
    "header": {
        "name": "header",
        "background": ["#CORE", "background"],
        "font-size": "1em",
        "bar": true,
        "wrapper": {
            "height": "85px"
        },
        "absolute": {
            "enabled": false,
            "margin-top": 0,
            "z-index": 5
        },
        "dark": {
            "enabled": false,
            "background": ["#COLOR", "greyscale", "grey-6"]
        },
        "fixed": false,
        "sticky": {
            "enabled": false,
            "background": ["#COLOR", "greyscale", "grey-6"],
            "logo-height": "28px",
            "font-size": ["#FONT-SIZE", "size-2"],
            "wrapper": {
                "height": "70px"
            }
        },
        "overlay": "overlay",
        "navigation": "navigation"
    }
}
},{}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.header = header;

var _app = require('../../../app');

var app = _interopRequireWildcard(_app);

var _header = require('./header.json');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

/**
 * Header
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
function header() {
    var els = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'header';
    var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    custom = app.custom('header', custom);

    app.Synergy(els, function (el, options) {

        var stickyOffset = options.sticky.offset || el.offsetTop;

        if (options.sticky.enabled || el.modifier('sticky')) {
            window.addEventListener('load', stickyHeaderHandler);
            window.addEventListener('scroll', stickyHeaderHandler);
        }

        function stickyHeaderHandler() {
            return toggleStickyHeader({
                type: window.scrollY > stickyOffset ? 'stick' : 'unstick',
                target: el,
                navigation: app.Synergy(options.navigation).query[0],
                overlay: options.overlay,
                dropdownShowOverlay: exports.dropdownShowOverlay,
                dropdownHideOverlay: exports.dropdownHideOverlay,
                config: options
            });
        }

        exports.dropdownShowOverlay = function () {
            return app.overlay(options.overlay).show('navDropown');
        };
        exports.dropdownHideOverlay = function () {
            return app.overlay(options.overlay).hide('navDropown');
        };
    }, _header2.default, custom, app.evalConfig);

    app.config.header = app.parse(_header2.default.header, custom);

    return exports;
}

/**
 * Toggle Header Stickyness
 * 
 * @access private
 * 
 * @param {Object} options
 */
function toggleStickyHeader(options) {

    var operator = options.type === 'stick' ? 'add' : 'remove';

    app.Synergy([document.body, options.config.name]).component('isFixed', operator);

    // toggle fixed modifier
    app.Synergy(options.target).modifier('fixed', options.type === 'stick' ? 'add' : 'remove');

    if (options.navigation && options.navigation.children) {
        // loop over each top level navigation item
        Array.prototype.forEach.call(options.navigation.children[0].children, function (el) {
            // if the nav item has a child menu
            if (el.querySelector('ul') && options.overlay) {
                if (options.type === 'stick') {
                    el.addEventListener('mouseenter', options.dropdownShowOverlay, false);
                    el.addEventListener('mouseleave', options.dropdownHideOverlay, false);
                } else {
                    el.removeEventListener('mouseenter', options.dropdownShowOverlay, false);
                    el.removeEventListener('mouseleave', options.dropdownHideOverlay, false);
                }
            }
        });
    }

    if (options.overlay && options.type === 'unstick') {
        options.dropdownHideOverlay();
    }
}

},{"../../../app":36,"./header.json":51}],53:[function(require,module,exports){
module.exports={
    "overlay": {
		"name": "overlay",
        "background": ["#COLOR", "opaque", "dark-4"],
        "light-background": ["#COLOR", "greyscale", "white"],
        "z-index": 11,
        "transition": ["#CORE", "transition"]
    }
}
},{}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.overlay = overlay;

var _app = require('../../../app');

var app = _interopRequireWildcard(_app);

var _overlay = require('./overlay.json');

var _overlay2 = _interopRequireDefault(_overlay);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

/**
 * Page Overlay
 * 
 * @access public
 * 
 * @param {(String|Object)} els
 * @param {Object} custom
 */
function overlay() {
    var els = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'overlay';
    var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    custom = app.custom('overlay', custom);

    app.Synergy(els, function (el, options) {
        exports.show = function (flag) {
            return exports.toggle(flag, 'show');
        };
        exports.hide = function (flag) {
            return exports.toggle(flag, 'hide');
        };

        exports.toggle = function (flag, operator) {
            var state = el.modifier('visible') && operator !== 'show' || operator === 'hide' ? 'remove' : 'add';

            el.modifier((flag ? flag + '-' : '') + 'visible', state);
        };
    }, _overlay2.default, custom, app.evalConfig);

    app.config.overlay = app.parse(_overlay2.default.overlay, custom);

    return exports;
}

},{"../../../app":36,"./overlay.json":53}],55:[function(require,module,exports){
module.exports={
    "preloader": {
        "name": "preloader",
        "spinner": ["2.5em, 1s, background rgba(black, 0.2), border-width 8px"],
        "background": ["#COLOR", "greyscale", "grey-1"],
        "z-index": 99,
        "transition": ["#CORE", "transition"],
        "visible-at": ["#BREAKPOINT", "break-2"],
        "close": {
            "bottom": "4rem"
        }
    }
}
},{}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.preloader = preloader;

var _app = require('../../../app');

var app = _interopRequireWildcard(_app);

var _preloader = require('./preloader.json');

var _preloader2 = _interopRequireDefault(_preloader);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

/**
 * Preloader
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
function preloader() {
    var els = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'preloader';
    var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    custom = app.custom('preloader', custom);

    app.Synergy(els, function (el, options) {

        window.addEventListener('load', function () {
            return exports.hide();
        });

        app.Synergy(options.name).component('close').forEach(function (trigger) {
            trigger.addEventListener('click', function () {
                return exports.hide();
            });
        });

        exports.show = function () {
            return exports.toggle('show');
        };
        exports.hide = function () {
            return exports.toggle('hide');
        };

        exports.toggle = function (operator) {
            return el.modifier('hidden', el.modifier('hidden') && operator !== 'hide' || operator === 'show' ? 'unset' : 'set');
        };
    }, _preloader2.default, custom, app.evalConfig);

    app.config.preloader = app.parse(_preloader2.default.preloader, custom);

    return exports;
}

},{"../../../app":36,"./preloader.json":55}],57:[function(require,module,exports){
module.exports={
    "scroll-top": {
        "name": "scroll-top",
        "position": ["auto", "2rem", "2rem", "auto"],
        "hide-below": ["#BREAKPOINT", "break-5"],
        "activePosition": 350
    }
}
},{}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scrollTop = scrollTop;

var _app = require('../../../app');

var app = _interopRequireWildcard(_app);

var _scrollTop = require('./scroll-top.json');

var _scrollTop2 = _interopRequireDefault(_scrollTop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

/**
 * Preloader
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
function scrollTop() {
    var els = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'scroll-top';
    var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    custom = app.custom('scroll-top', custom);

    app.Synergy(els, function (el, options) {

        window.addEventListener('scroll', function () {
            exports[window.scrollY > options.activePosition ? 'show' : 'hide']();
        });

        exports.show = function () {
            return el.modifier('visible', 'add');
        };
        exports.hide = function () {
            return el.modifier('visible', 'remove');
        };
    }, _scrollTop2.default, custom, app.evalConfig);

    app.config['scroll-top'] = app.parse(_scrollTop2.default['scroll-top'], custom);

    return exports;
}

},{"../../../app":36,"./scroll-top.json":57}],59:[function(require,module,exports){
module.exports={
    "search": {
        "name": "searchBox",
        "background": ["#COLOR", "greyscale", "grey-5"],
        "height": "60px",
        "transition": ["#CORE", "transition"],
        "input": {
            "background": ["#COLOR", "greyscale", "grey-5"],
            "color": ["#COLOR", "greyscale", "white"],
            "font-weight": "lighter"
        },
        "placeholder": {
            "color": ["#CORE", "text-color"],
            "font-weight": "lighter",
            "transition": ["#CORE", "transition"]
        }
    }
}
},{}],60:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.search = search;

var _app = require('../../../app');

var app = _interopRequireWildcard(_app);

var _search = require('./search.json');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

/**
 * Search
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
function search() {
    var els = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'searchBox';
    var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    custom = app.custom('search', custom);

    app.Synergy(els, function (el, options) {

        app.Synergy(options.name).component('toggle').forEach(function (toggle) {
            toggle.addEventListener('click', function () {
                return exports.toggle();
            });
        });

        app.Synergy(options.name).component('close').forEach(function (close) {
            close.addEventListener('click', function () {
                return exports.hide();
            });
        });

        exports.show = function () {
            return exports.toggle('show');
        };
        exports.hide = function () {
            return exports.toggle('hide');
        };

        exports.toggle = function (operator) {
            var state = el.modifier('visible') && operator !== 'show' || operator === 'hide' ? 'unset' : 'set';

            el.modifier('visible', state);

            if (state === 'set') {
                window.setTimeout(function () {
                    return el.component('input')[0].focus();
                }, 100);
            }
        };
    }, _search2.default, custom, app.evalConfig);

    app.config.search = app.parse(_search2.default.search, custom);

    return exports;
}

},{"../../../app":36,"./search.json":59}],61:[function(require,module,exports){
module.exports={
    "side-nav": {
        "name": "sideNav",
        "width": "400px",
        "background": ["#COLOR", "greyscale", "grey-5"],
        "font-size": ["#FONT-SIZE", "size-2", true],
        "transition": ["#CORE", "transition"],
        "parent": {
            "color": ["#COLOR", "greyscale", "grey-2"],
            "background": "rgba(black, 0.15)",
            "border-left": "5px solid",
            "border-left-color": ["#COLOR", "brand", "brand-1"],
            "hover": {
                "background": ["#COLOR", "brand", "brand-1"]
            },
            "active": {
                "background": ["#COLOR", "brand", "brand-1"]
            }
        },
        "item": {
            "padding": "1.2em",
            "color": ["#COLOR", "greyscale", "grey-3"],
            "background": ["#COLOR", "opaque", "dark-1"],
            "border-top": "1px solid rgba(white, 0.05)",
            "border-top-color": ["#COLOR", "opaque", "dark-1"],
            "border-bottom": "1px solid",
            "border-bottom-color": ["#COLOR", "opaque", "dark-1"],
            "border-left": "5px solid rgba(black, 0.3)",
            "border-left-color": ["#COLOR", "opaque", "dark-4"],
            "border-right": "none",
            "hover": {
                "color": ["#COLOR", "greyscale", "white"],
                "background": ["#COLOR", "brand", "brand-1"],
                "border-left": "5px solid",
                "border-left-color": ["#COLOR", "brand", "brand-1"]
            }
        },
        "collapsible": {
            "open-by-default": true,
            "icon": "fa-chevron-circle-down"
        },
        "navigation": "navigation",
        "overlay": "overlay"
    }
}
},{}],62:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sideNav = sideNav;

var _app = require('../../../app');

var app = _interopRequireWildcard(_app);

var _sideNav = require('./side-nav.json');

var _sideNav2 = _interopRequireDefault(_sideNav);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

/**
 * Side-Nav
 * 
 * @access public
 * 
 * @param {(String|HTMLElement|NodeList)} els
 * @param {Object} custom
 */
function sideNav() {
    var els = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sideNav';
    var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    custom = app.custom('side-nav', custom);

    app.Synergy(els, function (el, options) {
        // populate the side-navigation
        if (options.navigation) {
            el.querySelector('nav').innerHTML = app.Synergy(options.navigation).query[0].innerHTML;
        }

        // toggle side nav on component click
        app.Synergy(options.name).component('toggle').forEach(function (toggle) {
            toggle.addEventListener('click', function () {
                return exports.toggle();
            });
        });

        // close side nav on component click
        Array.prototype.forEach.call(app.Synergy(options.name).component('close'), function (close) {
            close.addEventListener('click', function () {
                return exports.hide();
            });
        });

        // insert dropdown toggle element where appropriate
        el.querySelectorAll('li ul').forEach(function (dropdown) {
            dropdown.parentNode.insertBefore(sideNavDropdownIcon(options), dropdown);
            // set default collapse of dropdowns
            if (!options.collapsible['open-by-default']) {
                dropdown.classList.add('collapsed');
            }
        });

        // toggle dropdown on element click
        el.component('dropdown_toggle').forEach(function (toggle) {
            toggle.addEventListener('click', function () {
                toggle.nextSibling.classList.toggle('collapsed');
            });
        });

        exports.show = function () {
            return exports.toggle('show');
        };
        exports.hide = function () {
            return exports.toggle('hide');
        };

        exports.toggle = function (operator) {
            return toggleSideNav(el, operator, options);
        };
    }, _sideNav2.default, custom, app.evalConfig);

    app.config['side-nav'] = app.parse(_sideNav2.default['side-nav'], custom);

    return exports;
}

/**
 * Show/Hide the Side Navigation
 * 
 * @access private
 * 
 * @param {HTMLElement} el - the side-nav HTML element 
 * @param {('show'|'hide')} operator - the type of toggle to activate
 * @param {Object} options - the module options to use
 */
function toggleSideNav(el, operator, options) {
    // determine toggle state
    var state = el.modifier('visible') || operator === 'hide' ? 'unset' : 'set';
    var listener = state === 'set' ? 'addEventListener' : 'removeEventListener';

    // toggle sidenav
    el.modifier('visible', state);

    // toggle overlay
    if (options.overlay) {
        app.overlay(options.overlay).toggle('overlaySideNav');
        // toggle event handler to hide side-nav on overlay click
        app.Synergy(options.overlay).query[0][listener]('click', exports.hide);
    }
}

/**
 * Create Dropdown Toggle Icon
 * 
 * @access private
 * 
 * @param {Object} options - the module options to use
 */
function sideNavDropdownIcon(options) {
    var toggle = document.createElement('div');
    var icon = document.createElement('i');

    toggle.classList.add(options.name + '_dropdown_toggle');
    icon.classList.add('fa', options.collapsible.icon);

    toggle.appendChild(icon);

    return toggle;
}

},{"../../../app":36,"./side-nav.json":61}],63:[function(require,module,exports){
module.exports={
    "colors": {
        "brand": {
            "brand-1": "#2E3882",
            "brand-2": "#06d2ff",
            "brand-3": "#04CEC0"
        },
        "alert":{
            "error": "#D9434E",
            "help": "#F5BA42",
            "info": "#4B8CDC",
            "success": "#3BB85D"
        },
        "greyscale": {
            "white": "#ffffff",
            "grey-1": "#f8f8f8",
            "grey-2": "#dee0e2",
            "grey-3": "#bfc1c3",
            "grey-4": "#6f777b",
            "grey-5": "#232627",
            "grey-6": "#161819",
            "black": "#000000"
        },
        "opaque": {
            "dark-1": "rgba(black, 0.1)",
            "dark-2": "rgba(black, 0.2)",
            "dark-4": "rgba(black, 0.4)",
            "dark-8": "rgba(black, 0.8)",
            "light-8": "rgba(white, 0.8)"
        },
        "validation":{
            "valid": "#00B16A",
            "invalid": "#D91E18"	
        },
        "social":{
            "facebook": "#507CBD",
            "twitter": "#63CEF2",
            "linkedin": "#117BB8",
            "github": "#1C1C1C",
            "skype": "#63CEF2",
            "pinterest": "#C92228",
            "instagram": "#5280A5",
            "rss": "#FBA933",
            "youtube": "#CB312E",
            "flickr": "#ED1384",
            "vimeo": "#1EB8EB",
            "dribbble": "#EB4C89",
            "behance": "#0595FC",
            "deviantart": "#B3C434",
            "reddit": "#0D7CCD",
            "google-plus": "#dd4b39",
            "email": "#6cb42c",
            "stumbleupon": "#47AD20"
        },
        "gradients": {
            "brand": {
                "direction": "135deg",
                "color-stops": [
                    "brand-1 0%", 
                    "brand-2 20%", 
                    "brand-3 100%"
                ]
            }
        }
    }
}
},{}],64:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = colors;

var _app = require('../../../app');

var app = _interopRequireWildcard(_app);

var _colors = require('./colors.json');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

/**
 * Colors
 * 
 * @access public
 * 
 * @param {Object} custom
 */
function colors(custom) {
  app.config.colors = app.parse(_colors2.default.colors, app.custom('colors', custom));
}

},{"../../../app":36,"./colors.json":63}],65:[function(require,module,exports){
module.exports={
    "core": {
        "name": "core",
        "background": ["#COLOR", "greyscale", "grey-1"],
        "font-family": ["#TYPEFACE", "primary"],
        "text-color": ["#TYPOGRAPHY", "colors", "base"],
        "font-size": ["#TYPOGRAPHY", "sizes", "size-3"],
        "selection-background": ["#COLOR", "brand", "brand-1"],
        "selection-color": ["#COLOR", "greyscale", "white"],
        "margin": "2rem",
        "line-height": "1.4",
        "radius": "0.4em",
        "transition": "0.4s",
        "hrule-color": "rgba(black, 0.15)"
    }
}
},{}],66:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.core = core;

var _app = require('../../../app');

var app = _interopRequireWildcard(_app);

var _core = require('./core.json');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

/**
 * Core
 * 
 * @access public
 * 
 * @param {Object} custom
 */
function core(custom) {
  app.config.core = app.parse(_core2.default.core, app.custom('core', custom));
}

},{"../../../app":36,"./core.json":65}],67:[function(require,module,exports){
module.exports={
    "grid": {
        "name": "grid",
        "breakpoints": {
            "break-0": "0px",
            "break-1": "460px",
            "break-2": "720px",
            "break-3": "940px",
            "break-4": "1200px",
            "break-5": "1400px"
        }
    }
}
},{}],68:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grid = grid;

var _app = require('../../../app');

var app = _interopRequireWildcard(_app);

var _grid = require('./grid.json');

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

/**
 * Grid
 * 
 * @access public
 * 
 * @param {Object} custom
 */
function grid(custom) {
  app.config.grid = app.parse(_grid2.default.grid, app.custom('grid', custom));
}

},{"../../../app":36,"./grid.json":67}],69:[function(require,module,exports){
module.exports={
    "typography": {
        "name": "typography",
        "typefaces": {
            "primary": ["Raleway", "100,300,700,900"],
            "secondary": ["Lato", "300,700"]
        },
        "import-fonts": true,
        "colors": {
            "base": ["#COLOR", "greyscale", "grey-4"],
            "heading": ["#COLOR", "greyscale", "grey-5"],
            "heavy": ["#COLOR", "greyscale", "grey-5"],
            "link": ["#COLOR", "brand", "brand-1"],
            "link-hover": ["#COLOR", "brand", "brand-1"]
        },
        "sizes": {
            "size-1": "0.67em",
            "size-2": "0.83em",
            "size-3": "1em",
            "size-4": "1.17em",
            "size-5": "1.25em",
            "size-6": "1.5em",
            "size-7": "2em",
            "size-8": "2.4em",
            "size-9": "3em",
            "size-10": "3.4em"
        }
    }
}
},{}],70:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typography = typography;

var _app = require('../../../app');

var app = _interopRequireWildcard(_app);

var _typography = require('./typography.json');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

/**
 * Core
 * 
 * @access public
 * 
 * @param {Object} custom
 */
function typography(custom) {
  app.config.typography = app.parse(_typography2.default.typography, app.custom('typography', custom));
}

},{"../../../app":36,"./typography.json":69}],71:[function(require,module,exports){
module.exports={
    "app": {
        "buttons": {
            "border-palettes": ["brand", "alert"]
        },
        "colors": {},
        "core": {},
        "header": {},
        "billboard": {
            "fullscreen": {
                "enabled": false
            },
            "overlay": {
                "enabled": true
            }
        }
    }
}
},{}],72:[function(require,module,exports){
'use strict';

var _app = require('../../app');

var app = _interopRequireWildcard(_app);

var _config = require('./config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

app.theme = _config2.default.app;

///************************************************************
/// Utilities
///************************************************************

app.colors();
app.grid();
app.typography();
app.core();

///************************************************************
/// Elements
///************************************************************

app.accordion();
app.carousel();
app.modal();
app.overlay();
app.progressBar();
app.tabs();
app.tooltips();

///************************************************************
/// Objects
///************************************************************

app.googleMap();
app.header();
app.preloader();
app.scrollTop();
app.search();
app.sideNav();

///************************************************************
/// Export Options
///************************************************************

window.APPUI.config = app.evalConfig(app.config);

},{"../../app":36,"./config.json":71}],73:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.custom = custom;

var _app = require('../../app');

var app = _interopRequireWildcard(_app);

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

/**
 * Custom
 * 
 * @access public
 * 
 * @param {String} module
 * @param {Object} custom
 */
function custom(module, custom) {

    if (app.theme && typeof app.theme[module] !== 'undefined' && (!custom || custom !== {})) {
        custom = app.theme[module];
    }

    if (custom) {
        custom.componentGlue = app.global && app.global['component-glue'] ? app.global['component-glue'] : '_';
        custom.modifierGlue = app.global && app.global['modifier-glue'] ? app.global['modifier-glue'] : '-';
    }

    return custom;
}

},{"../../app":36}],74:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

exports.evalConfig = evalConfig;

var _app = require('../../app');

var app = _interopRequireWildcard(_app);

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

/**
 * Evaluate function values from configuration
 * 
 * @access public
 * 
 * @param {Object} config
 */
function evalConfig(config) {

    if (config instanceof Array) {
        return evalValue(config);
    } else if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(config)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                config[key] = evalConfig(config[key]);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }

    return config;
}

/**
 * Evaluate a single value
 * 
 * @param {String} value 
 */
function evalValue(value) {

    var FUNCTIONS = ['breakpoint', 'color', 'palette', 'core', 'typography', 'typeface', 'font-size'];

    var requiresEval = false;

    FUNCTIONS.forEach(function (func) {

        var FUNC_NAME = getFunctionName(value);
        var PARAMS = getParams(value);

        if (FUNC_NAME === func) {

            requiresEval = true;

            if (FUNC_NAME === 'breakpoint') {
                value = app.config.grid.breakpoints[PARAMS[0]];
            } else if (FUNC_NAME === 'color') {
                value = app.config.colors[PARAMS[0]][PARAMS[1]];
            } else if (FUNC_NAME === 'palette') {
                value = app.config.colors[PARAMS[0]];
            } else if (FUNC_NAME === 'core') {
                value = app.config.core[PARAMS[0]];
            } else if (FUNC_NAME === 'typography') {
                value = app.config.typography[PARAMS[0]][PARAMS[1]];
            } else if (FUNC_NAME === 'typeface') {
                value = app.config.typography.typefaces[PARAMS[0]];
            } else if (FUNC_NAME === 'font-size') {
                value = app.config.typography.sizes[PARAMS[0]];
            }
        }
    });

    // recurse the function if returned value also needs to be evaluated
    if (requiresEval) value = evalValue(value);

    return value;
}

/**
 * Get function name
 * 
 * @param {String} string 
 */
function getFunctionName(value) {
    if (value instanceof Array && typeof value[0] === 'string' && value[0].indexOf('#') === 0) {
        return value[0].slice(1).toLowerCase();
    }

    return value;
}

/**
 * Get function parameters
 * 
 * @param {String} value 
 */
function getParams(value) {
    return value instanceof Array ? value.slice(1) : value;
}

},{"../../app":36}],75:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.inViewport = inViewport;

var _app = require('../../app');

var app = _interopRequireWildcard(_app);

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

/**
 * Determine if an element is in the viewport
 * 
 * @access public
 * 
 * @param {Object} custom - where custom options are passed
 */
function inViewport(custom) {

    /**
     * @param {HTMLElement} options.target - the target element
     * @param {('top'|'middle'|'bottom')} options.coverage - point which the element is considered to be in the viepwport
     * @param {('reached'|'inView')} options.scope - determine how the scope should work
     */
    var options = Object.assign({
        container: document.body,
        target: null,
        coverage: 'top',
        scope: 'inView'
    }, custom);

    if (!options.target) {
        console.warn('inViewport: you must pass a value for "target"');
    }

    var scrollTop = options.container.scrollTop;

    var elemTop = options.target.getBoundingClientRect().top - window.innerHeight + scrollTop;
    var elemHeight = options.target.clientHeight;

    var scope = getScope();

    var reached = scrollTop > scope;
    var inView = reached && scrollTop < elemTop + elemHeight + window.innerHeight;

    function getScope() {
        if (options.coverage === 'top') return elemTop;else if (options.coverage === 'middle') return elemTop + elemHeight / 2;else if (options.coverage === 'bottom') return elemTop + elemHeight;else if (typeof options.coverage === 'string') {
            var value = Number(options.coverage.match(/\d+/)[0]);
            // value is a percentage
            if (options.coverage.indexOf('%') >= 0) return elemTop + elemHeight / 100 * value;
            // value is in pixels
            else if (options.coverage.indexOf('px') >= 0) return elemTop + value;
        } else return console.warn('inViewport: you must pass a valid value for "scope"');
    }

    return options.scope === 'reached' ? reached : inView;
}

},{"../../app":36}],76:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidSelector = isValidSelector;
/**
 * Test the validity (not existance) of a CSS selector
 * 
 * @access public
 * 
 * @param {String} selector
 */
function isValidSelector(selector) {
    var stub = document.createElement('br');

    try {
        stub.querySelector(selector);
    } catch (e) {
        return false;
    }

    return true;
}

},{}],77:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = media;
/**
 * Media
 * 
 * @access public
 * 
 * @param {String} media
 * @param {String} value
 * @param {Object} app
 */
function media(media, value, app) {
  if (value.indexOf('break') === 0) {
    return window.matchMedia('(' + media + ': ' + app.config.grid.breakpoints[value] + ')').matches;
  }
  return window.matchMedia('(' + media + ':' + value + ')').matches;
}

},{}],78:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parents = parents;
/**
 * Parents
 * 
 * @access public
 * @see https://gist.github.com/ziggi/2f15832b57398649ee9b
 * 
 * @param {HTMLElement} elem
 * @param {String} selector
 */
function parents(elem, selector) {
  var elements = [];
  var ishaveselector = selector !== undefined;

  while ((elem = elem.parentElement) !== null) {
    if (elem.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    if (!ishaveselector || elem.matches(selector)) {
      elements.push(elem);
    }
  }

  return elements;
}

},{}],79:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;

var _app = require('../../app');

var app = _interopRequireWildcard(_app);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

/**
 * Parse
 * 
 * @access public
 * 
 * @param {Object} default
 * @param {Object} custom
 */
function parse(defaults, custom) {
  var config = app.evalConfig(app.deepextend(defaults, custom));

  delete config.modifierGlue;
  delete config.componentGlue;

  return config;
}

},{"../../app":36}],80:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scrollSpy = scrollSpy;
/**
 * ScrollSpy
 * 
 * @access public
 * 
 * @param {Object} custom - where custom options are passed
 */
function scrollSpy(custom) {

    /**
     * @param {String} options.container - CSS selector for scrollSpy links container
     * @param {String} options.element - CSS selector for scrollSpy link elements
     * @param {String} options.activeClass - class to apply to link element when target is in view
     * @param {String} options.buffer - number of pixels to act as a buffer when the element is in view
     */
    var options = Object.assign({
        container: null,
        element: 'a',
        activeClass: 'active',
        buffer: 25
    }, custom);

    if (!options.container) {
        console.warn('ScrollSpy: you must pass a value for "container"');
    }

    var spyLinks = document.querySelector(options.container).querySelectorAll(options.element);

    var spyTargets = function spyTargets() {
        var targets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        spyLinks.forEach(function (el) {
            return targets.push(document.querySelector(el.getAttribute('href')));
        });
        return targets;
    };

    window.onscroll = function () {
        var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

        spyTargets().forEach(function (target, index) {
            if (target.offsetTop - options.buffer < scrollPosition) {
                spyLinks.forEach(function (el) {
                    return el.classList.remove(options.activeClass);
                });
                spyLinks[index].classList.add(options.activeClass);
            } else {
                spyLinks[index].classList.remove(options.activeClass);
            }
        });
    };
}

},{}],81:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.smoothScroll = smoothScroll;
/**
 * Animate scrolling to anchor links
 * 
 * @access public
 * @see https://codepen.io/rleve/pen/iCbgy
 * 
 * @todo fix downwards scroll when <html> tag has height value of 100% 
 * 
 * @param {Object} custom - where custom options are passed
 */
function smoothScroll(custom) {

    /**
     * @param {Number} [options.speed=300] - the animation duration (milliseconds)
     * @param {Number} [options.increments=16] - increments to scroll by
     */
    var options = Object.assign({
        speed: 300,
        increments: 16
    }, custom);

    // Define smooth scroll links
    var scrollToggle = document.querySelectorAll('a[href^="#"]:not([rel="modal"])');

    // Function to animate the scroll
    var smoothScroll = function smoothScroll(anchor, duration) {
        // Calculate how far and how fast to scroll
        var startLocation = window.pageYOffset;
        var endLocation = anchor.offsetTop;
        var distance = endLocation - startLocation;
        var increments = distance / (duration / options.increments);

        // Scroll the page by an increment, and check if it's time to stop
        var animateScroll = function animateScroll() {
            window.scrollBy(0, increments);
            stopAnimation();
        };

        // Stop animation when you reach the anchor OR the bottom of the page
        var stopAnimation = function stopAnimation() {
            var travelled = window.pageYOffset;
            var down = travelled >= endLocation - increments || window.innerHeight + travelled >= document.body.offsetHeight;
            var up = travelled <= (endLocation || 0);
            var shouldStop = increments >= 0 ? down : up;

            if (shouldStop) {
                clearInterval(runAnimation);
            }
        };

        // Loop the animation function
        var runAnimation = setInterval(animateScroll, options.increments);
    };

    // For each smooth scroll link
    scrollToggle.forEach(function (toggle) {
        // When the smooth scroll link is clicked
        toggle.addEventListener('click', function (e) {
            // Prevent the default link behavior
            e.preventDefault();

            // Get anchor link and calculate distance from the top
            var dataID = toggle.getAttribute('href');
            var dataTarget = document.querySelector(dataID);

            // If the anchor exists, scroll to it
            if (dataTarget) {
                smoothScroll(dataTarget, options.speed);
            }
        }, false);
    });
}

},{}]},{},[72]);
