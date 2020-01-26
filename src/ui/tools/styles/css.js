export default function css(css, insertTarget = document.head) {
  const style = document.createElement('style');

  style.appendChild(document.createTextNode(css));

  insertTarget.appendChild(style);
}