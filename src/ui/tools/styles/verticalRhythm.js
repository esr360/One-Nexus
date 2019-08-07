export default function verticalRhythm(state, position) {
  let styles = {};

  if (position === 'bottom' || !position) {
    if (state.isLastChild) {
      styles.marginBottom = 0
    }
  }

  if (position === 'top' || !position) {
    if (state.isFirstChild) {
      styles.marginTop = 0;
    }
  }

  return styles;
}