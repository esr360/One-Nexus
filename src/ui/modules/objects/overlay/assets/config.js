export default (theme) => ({
  name: 'Overlay',
  'background': theme.colors.opaque['dark-4'],
  'light-background': theme.colors.greyscale.white,
  'z-index': 11,
  'transition': theme.tokens.transition,
})