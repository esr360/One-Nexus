///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import { parents } from '../../../assets/tools/js/app.parents';

const assert = require('assert');
const jsdom  = require('jsdom-global')();

describe('parents', () => {

    const element = document.createElement('div');

    element.innerHTML = `
        <div id="foo">
            <div id="bar">
                <div id="baz"></div>
            </div>
        </div>
    `;
    
    document.body.appendChild(element);

    const foo = document.getElementById('foo');
    const bar = document.getElementById('bar');
    const baz = document.getElementById('baz');

    it('function should exist', () => {
        assert.equal(typeof parents, 'function');
    });

    it('should return correct parent length', () => {
        assert.equal(parents(foo).length, 3);
        assert.equal(parents(bar).length, 4);
        assert.equal(parents(baz).length, 5);
    });

    it('should identify incorrect parent length', () => {
        assert.notEqual(parents(foo).length, 5);
    });

    it('should fetch correct parent element', () => {
        assert.equal(parents(baz, '#foo')[0] instanceof HTMLDivElement, true);
    });

    it('should not fetch incorrect parent element', () => {
        assert.equal(parents(baz, '#tax')[0] instanceof HTMLDivElement, false);
    });

});