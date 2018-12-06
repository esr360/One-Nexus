import defaults from './assets/config';
import layout from './assets/layout.jss';
import RCTable from 'rc-table';

/**
 * Render Table module
 *
 * @prop {Array} name
 */
const Table = ({ columns, data, config = Table.config, ...props }) => {
    function ref(node) {
        const TABLE = ReactDOM.findDOMNode(node);

        ['content', 'body', 'thead', 'tbody'].forEach(component => {
            TABLE.querySelector(`.table-${component}`).setComponent('content', config.name, `table-${component}`);
        });

        TABLE.querySelectorAll('.table-row').forEach(ROW => {
            ROW.setComponent('row', config.name, 'table-row');

            [...ROW.classList].forEach(className => (className.indexOf('table-') === 0) && ROW.classList.remove(className));

            ROW.querySelectorAll('td').forEach(TD => TD.setComponent('cell', config.name));
        });

        Synergy.styleParser(TABLE, window[props.name].layout, config, props.ui || window.ui);
    }

    const componentProps = { ref, columns, data, prefixCls: config.name };

    return (
        <Module component={RCTable} componentProps={componentProps} {...props}  />
    );
}
export default Object.assign(Table, {
    layout, defaults, defaultProps: {
        name: 'Table',
        tag: 'div',
        fixed: true
    }
});