import verticalRhythm from './verticalRhythm';

export default function object(state, gutter) {
  let styles = {
    margin: `${gutter} 0`
  }

  return { ...styles, ...verticalRhythm(state) }
}