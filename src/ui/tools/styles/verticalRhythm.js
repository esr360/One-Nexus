export default function verticalRhythm(element, position) {
    let styles = {};

    if (position === 'bottom' || !position) {
        if (element === element.parentNode.lastChild) {
            styles['margin-bottom'] = 0
        }
    }

    if (position === 'top' || !position) {
        if (element === element.parentNode.firstChild) {
            styles['margin-top'] = 0;
        }
    }

    return styles;
};