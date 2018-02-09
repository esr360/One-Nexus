import * as app from '../../../ui';
import defaults from './alert.json';

/**
 * Alert
 * 
 * @access public
 * 
 * @param {Object} custom
 */
export default function alert(custom) {
    app.config.alert = app.parse(defaults.alert, custom);
}