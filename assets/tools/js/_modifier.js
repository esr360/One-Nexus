// Return a modifier
function _modifier(modifier, glue) {
    glue = glue || '-';
    return '[class*="' + glue + modifier + '"]';
}