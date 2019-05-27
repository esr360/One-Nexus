export { default as colors } from './colors/colors';
export { default as core } from './core/core';
export { default as typography } from './typography/typography';
export { default as grid } from './grid/grid';

const foo = {
    bar: 'red'
}

export { foo }

export function foundation(ui) {
    ui.css(`
        html, body {
            margin: 0;
            padding: 0;
        }

        html {
            overflow-x: hidden;
        }

        body {
            background: ${ui.core.background(ui.colors)};
            color: ${ui.core['text-color'](ui)};
            font-family: ${ui.core['font-family'](ui.typography)};
            font-size: ${ui.core['font-size'](ui.typography)};
            line-height: ${ui.core['line-height']};
        }

        ins {
            color: ${ui.colors.brand['brand-1']};
            font-weight: bold;
            text-decoration: none;
        }

        h1, h2, h3, h4, h5, h6 {
            font-size: ${ui.core['font-size'](ui.typography)};
        }

        ::selection {
            background-color: ${ui.core['selection-background'](ui.colors)};
            color: ${ui.core['selection-color'](ui.colors)};
            text-shadow: none;
        }

        *, *::before, *::after {
            box-sizing: border-box;
        }

        .object:not(:first-child) {
            margin-top: ${ui.core.margin};
        }

        .object:not(:last-child) {
            margin-bottom: ${ui.core.margin};
        }

        .object-small:not(:first-child) {
            margin-top: calc(${ui.core.margin} /2);
        }

        .object-small:not(:last-child) {
            margin-bottom: calc(${ui.core.margin} /2);
        }
    `);

    ui.googleFonts(ui.typography['google-fonts']);
}