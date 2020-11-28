export function minWidth(query) {
  return window.matchMedia(`(min-width: ${query}`).matches
}

export function maxWidth(query) {
  return window.matchMedia(`(max-width: ${query}`).matches
}

// interactions
export { default as dynamicCallback } from './interactions/dynamicCallback';
export { default as inViewport } from './interactions/inViewport';
export { default as scrollSpy } from './interactions/scrollSpy';
export { default as smoothScroll } from './interactions/smoothScroll';

// styles
export { default as center } from './styles/center';
export { default as css } from './styles/css';
export { default as fontSize } from './styles/fontSize';
export { default as googleFonts } from './styles/googleFonts';
export { default as object } from './styles/object';
export { default as verticalRhythm } from './styles/verticalRhythm';