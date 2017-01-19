/**
 * Breadcrumb helper
 * @author [@esr360](http://twitter.com/esr360)
 * @description Create a breadcrumb from a specified path
 */
module.exports.register = function(Handlebars, options) {

    Handlebars.registerHelper('breadcrumb', function(path) {
        // Define the variables we will later populate
        var listItems = '', url = '';

        // Split the path into multiple parts
        path = path.split('/');

        // Create a tag for each part
        path.forEach(function(dir) {
            // We don't want to include the destination directory in the breadcrumb
            if (dir + '/' !== options.dest) {
                url = url + '/' + dir;
                listItems = listItems + '<li><a href="' + url + '">' + dir + '</a></li>';
            }
        });

        return listItems;
    });

};