export { default as colors } from './colors/colors';
export { default as core } from './core/core';
export { default as typography } from './typography/typography';
export { default as grid } from './grid/grid';

export function foundation() {
    document.querySelectorAll('body, html').forEach(element => {
        element.style.cssText = `
            margin: 0;
            padding: 0;
        `;
    });

    document.querySelector('html').style.cssText = `
        overflow-x: hidden;
    `;

    document.querySelector('body').style.cssText = `
        background: ${ui.core.background(window.ui.colors)};
        color: ${ui.core['text-color'](window.ui)};
        font-family: ${ui.core['font-family'](window.ui.typography)};
        font-size: ${ui.core['font-size'](window.ui.typography)};
        line-height: ${ui.core['line-height']};
    `;
}