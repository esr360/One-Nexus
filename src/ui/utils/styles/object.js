import verticalRhythm from './verticalRhythm';

export default function object(state, gutter) {
  const styles = { marginTop: gutter, marginBottom: gutter }

  return { ...styles, ...verticalRhythm(state) }
}