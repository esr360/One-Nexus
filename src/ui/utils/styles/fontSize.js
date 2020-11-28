/**
 * Determine font-size of element based off modifier
 */
export default function fontSize(state, sizes, theme, custom) {
  const defaults = {
    fluidScaling: 'modifier',
    'min-vw': theme.grid.breakpoints['break-1'],
    'max-vw': theme.grid.breakpoints['break-3']
  }

  const config = { ...defaults, ...custom };

  // Break the font-sizes up into keys and values
  const values = Object.values(sizes);

  // Create our modular-scale values for fluid-scaling
  const lowRes = 1.067;
  const highRes = 1.333;

  // Set the values between which sizes should scale
  const minVw = config['min-vw'];
  const maxVw = config['max-vw'];

  // Get the index of the value closest to our low-res
  // modular-scale value
  let msIndex = 1;

  values.forEach(value => {
    if (parseFloat(value, 10) < lowRes) {
      msIndex = values.indexOf(value) + 1;
    }
  });

  // Identify where our scale should start and end
  const scaleStart = (1 - msIndex);
  const scaleEnd = values.length + scaleStart;
  
  // Create the scale to use to create our new values
  let msList = [];

  for (var i = scaleStart; i < scaleEnd; i++) {
    msList.push(i);
  }

  // Create a set of minimum sizes to use for low resolutions
  let msLrValues = [];

  for (var i = 0; i < msList.length; i++) {
    let newValue = Math.pow(lowRes, msList[i]);
    let oldValue = parseFloat(values[i], 10);

    newValue = Math.min(newValue, oldValue);

    msLrValues.push(newValue);
  }

  for (let [key, value] of Object.entries(sizes)) {
    // Get current index
    const index = values.indexOf(value) + 1;

    // Set min/max value for scaling
    const minFontsize = msLrValues[index - 1] + 'em';
    const maxFontSize = value;

    if (state[key]) {
      if (config.fluidScaling === true || config.fluidScaling === 'modifier' && state.fluid) {
        return fluidScaling(minFontsize, maxFontSize, minVw, maxVw, value);
      }

      return value;
    }
  }
}

/**
 * Calculate fluid-scale value
 */
function fluidScaling(minFontSize, maxFontSize, minVw, maxVw, defaultFontSize) {
  let fontSize = defaultFontSize;

  const sizeDiff = parseFloat(maxFontSize, 10) - parseFloat(minFontSize, 10);
  const vwDiff = parseFloat(maxVw, 10) - parseFloat(minVw, 10);

  if (window.matchMedia(`(min-width: ${minVw})`).matches) {
    fontSize = `calc(${minFontSize} + ${sizeDiff} * ((100vw - ${minVw}) / (${vwDiff} / 10)))`;
  }

  if (window.matchMedia(`(min-width: ${maxVw})`).matches) {
    fontSize = maxFontSize;
  }

  return fontSize;
}