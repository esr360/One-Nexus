/**
 * Breadcrumb helper
 * @author [@esr360](http://twitter.com/esr360)
 * @description Create a breadcrumb from a specified path
 */
module.exports.register = function(Handlebars, options)  {

    Handlebars.registerHelper('breadcrumb', function(path) {

        var listItems = '', url = '';

        path = path.split('/');

        path.forEach(function(dir) {
            url = url + '/' + dir;
            listItems = listItems + '<li><a href="' + url + '">' + dir + '</a></li>';
        });

        return listItems;

    });

};