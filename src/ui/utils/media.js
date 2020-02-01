/**
 * Media
 */
export default function media(media, value, app) {
    if (value.indexOf('break') === 0) {
	    return window.matchMedia(`(${media}: ${app.config.grid.breakpoints[value]})`).matches;
    }
    return window.matchMedia('(' + media + ':' + value + ')').matches;
}