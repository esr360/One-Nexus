import * as app from '../../app';
import config from './config.json';

Element.prototype.component = function(component, set) {
    return app.synergy(this).component(component, set, this);
};

Element.prototype.modifier = function(modifier, set) {
    return app.synergy(this).modifier(modifier, set, this);
};

app.accordion('accordion', config.accordions);

app.carousel('carousel', config.carousels);