export default function googleFonts(fonts) {
  fonts.forEach(font => {
    const typeface = font.name.split(' ').join('+');
    const styles = font.styles.join(',');
    const googleFont = `${typeface}:${styles}`;
    const link = document.createElement('link');

    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', `https://fonts.googleapis.com/css?family=${googleFont}`);

    document.head.appendChild(link);
  });
}