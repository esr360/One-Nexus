import * as app from '../../app';

/**
 * Get element's offset relative to parent
 * 
 * @access public
 * 
 * @param {String} module
 * @param {Object} custom
 */
export function elementOffset(element, parent) {
    const offsetElement = getClosesteOffsetElement(element, parent)[0];
    const storedOffset  = getClosesteOffsetElement(element, parent)[1];

    return storedOffset - element.offsetTop;
}

function getClosesteOffsetElement(element, parent, offset = 0) {
    let offsetElement = element;
    
    offset = offset + offsetElement.offsetTop;

    if (element.offsetParent !== parent) {
        offset = getClosesteOffsetElement(element.offsetParent, parent, offset)[1]
        offsetElement = getClosesteOffsetElement(element.offsetParent, parent, offset)[0];
    }

    return [offsetElement, offset];
}