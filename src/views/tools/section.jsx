/**
 * Section
 */
export default class Section extends React.Component {
    render() {
        return(
            <div className='object' {...this.props}>
                {this.props.children}
            </div>
        )
    }
};