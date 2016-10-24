module.exports.register = function (Handlebars, options)  { 
    Handlebars.registerHelper('inArray', function(elem, list, options) {
        if(list.indexOf(elem) > -1) {
            return options.fn(this);
        }
        return options.inverse(this);
    });
};