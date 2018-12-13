export default {
    init
}

export function init(element, config) {
    config = config || Tooltip.config;

    const content = element.getComponent('wrapper');

    document.body.appendChild(content);

    window.addEventListener('load', () => {
        const clientRect = element.getBoundingClientRect();

        let newtop, newleft;

        if (element.hasModifier('top')) {
            newtop = clientRect.top - content.offsetHeight - 10;
            newleft = clientRect.left - (content.offsetWidth / 2) + (element.offsetWidth / 2);
        }

        if (element.hasModifier('bottom')) {
            newtop = clientRect.top + content.offsetHeight - 10;
            newleft = clientRect.left - (content.offsetWidth / 2) + (element.offsetWidth / 2);
        }

        if (element.hasModifier('left')) {
            newtop = clientRect.top - (element.offsetHeight / 2);
            newleft = clientRect.left - (content.offsetWidth) - 12;
        }

        if (element.hasModifier('right')) {
            newtop = clientRect.top - (element.offsetHeight / 2);
            newleft = clientRect.left + (element.offsetWidth) + 12;
        }

        content.style.top  = newtop;
        content.style.left = newleft;

        element.addEventListener('mouseenter', () => {
            content.style.visibility = 'visible';
            content.style.opacity = 1;
        });
    
        element.addEventListener('mouseleave', () => {
            content.style.visibility = 'hidden';
            content.style.opacity = 0;
        });
    });
}