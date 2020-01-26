export default function foundation({ theme }) {
  // console.log(theme);
  theme.css(`
    html, body {
      margin: 0;
      padding: 0;
    }

    html {
      overflow-x: hidden;
    }

    body {
      background: ${theme.core.background(theme)};
      color: ${theme.core['text-color'](theme)};
      font-family: ${theme.core['font-family'](theme)};
      font-size: ${theme.core['font-size'](theme)};
      line-height: ${theme.core['line-height']};
    }

    ins {
      color: ${theme.colors.brand['brand-1']};
      font-weight: bold;
      text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6 {
      font-size: ${theme.core['font-size'](theme)};
    }

    ::selection {
      background-color: ${theme.core['selection-background'](theme)};
      color: ${theme.core['selection-color'](theme)};
      text-shadow: none;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    .object:not(:first-child) {
      margin-top: ${theme.core.margin};
    }

    .object:not(:last-child) {
      margin-bottom: ${theme.core.margin};
    }

    .object-small:not(:first-child) {
      margin-top: calc(${theme.core.margin} /2);
    }

    .object-small:not(:last-child) {
      margin-bottom: calc(${theme.core.margin} /2);
    }
  `);

  theme.googleFonts(theme.typography['google-fonts']);
}