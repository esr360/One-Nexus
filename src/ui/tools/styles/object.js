import verticalRhythm from './verticalRhythm';

export default function object(state, gutter) {
  try {
    gutter = gutter || theme.core.margin;
  } catch(error) {
    console.warn('ui.globals.object: no gutter passed');
  }

  let styles = {
    margin: `${gutter} 0`
  }

  return { ...styles, ...verticalRhythm(state) }
}