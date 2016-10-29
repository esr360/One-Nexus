module.exports.register = function (Handlebars, options)  {

    Handlebars.registerHelper('inArray', function(list, string, options) {
        if(list && list.indexOf(string) > -1) {
            return options.fn(this);
        }
        return options.inverse(this);
    });

};