/**
 * inArray
 * 
 * @description Determine if array contains string
 */
module.exports.register = function(Handlebars, options)  {

    Handlebars.registerHelper('inArray', function(list, string) {
        if(list && list.indexOf(string) > -1) {
            return options.fn(this);
        }
        return options.inverse(this);
    });

};