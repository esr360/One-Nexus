/**
 * Format theme name by converting hyphens to underscores
 * e.g 'One-Nexus' > 'One_Nexus'
 * 
 * @access public
 * 
 * @param {String} theme - the name of the name
 */
export function formatThemeName(theme) {
    return theme.replace(/-/g, '_');
}