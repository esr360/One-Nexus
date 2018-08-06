/**
 * 
 * @param {Object} sizes 
 */
export default function fontSizes(element, sizes, custom, globals) {
    const defaults = {
        'fluid-scaling': 'modifier',
        'min-vw': 'break-1',
        'max-vw': 'break-3',
    }

    const config = { ...defaults, ...custom };

    // Break the font-sizes up into keys and values
    const keys = Object.keys(sizes);
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

    for (var i = 1; i < msList.length; i++) {
        let newValue = Math.pow(lowRes, msList[i]);
        let oldValue = parseFloat(values[i], 10);

        newValue = Math.min(newValue, oldValue);

        msLrValues.push(newValue);
    }

    console.log(msLrValues);

    for (let [key, value] of Object.entries(sizes)) {
        // console.log(key, value);
    }
}