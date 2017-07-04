/**
 *  Add class to element & remove from siblings
 * 
 * @access public
 * 
 * @param {HTMLElement} parent
 * @param {String} targetClass
 */
export function clickHelper(parent, targetClass = 'active') {
    Array.prototype.forEach.call(parent.children, el => {
        el.addEventListener('click', () => {
            Array.prototype.forEach.call(parent.children, el => {
                el.classList.remove(targetClass);
            });

            el.classList.add(targetClass);
        });
    });
}