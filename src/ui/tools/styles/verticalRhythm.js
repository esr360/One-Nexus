export default function verticalRhythm(element, position) {
    if (position === 'bottom' || !position) {
        if (element === element.parentNode.lastChild) {
            return {
                'margin-bottom': 0
            }
        }
    }

    if (position === 'top' || !position) {
        if (element === element.parentNode.firstChild) {
            return {
                'margin-top': 0
            }
        }
    }
};