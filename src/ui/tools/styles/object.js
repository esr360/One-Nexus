import verticalRhythm from './verticalRhythm';

export default function object(element, gutter) {
    let styles = {
        margin: `${gutter} 0`
    };

    return { ...styles, ...verticalRhythm(element) };
}