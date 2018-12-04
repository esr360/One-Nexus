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
        const ROWS = TABLE.querySelectorAll('.table-row');
        const THEAD = TABLE.querySelector('.table-thead');
        const TBODY = TABLE.querySelector('.table-tbody');

        // @TODO this is needed for polymorph to work properly - look into
        // polymorph update to remove need for this
        TABLE.setAttribute('data-module', config.name);

        ROWS.forEach(ROW => {
            ROW.setComponent('row', config.name);

            ROW.querySelectorAll('td').forEach(TD => TD.setComponent('cell', config.name));
        });

        THEAD.setComponent('thead', config.name);
        TBODY.setComponent('tbody', config.name);

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