import verticalRhythm from './verticalRhythm';

export default function object(element, gutter) {
    try {
        gutter = gutter || ui.core.margin;
    } catch(error) {
        console.warn('ui.globals.object: no gutter passed');
    }

    let styles = {
        margin: `${gutter} 0`
    };

    return { ...styles, ...verticalRhythm(element) };
}