import * as app from '../../app';

/**
 * Render Base layout
 */
const Base = props => (
    <main>
        {/* <Header {...props.header}>
            <Logo {...props.logo} />
            <Navigation {...props.navigation} />

            <div className='sideNav_toggle button-icon-primary max-break-3'>
                <i className='fa fa-bars'></i>
            </div>
        </Header> */}

        <div className='container'>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/accordion'>Accordion</Link>
                <Link to='/alert'>Alert</Link>
                <Link to='/blockquote'>Blockquote</Link>
                <Link to='/button'>Button</Link>
                <Link to='/carousel'>Carousel</Link>
                <Link to='/form'>Form</Link>
                <Link to='/heading'>Heading</Link>
                <Link to='/image'>Image</Link>
                <Link to='/list'>List</Link>
                <Link to='/modal'>Modal</Link>
                <Link to='/paragraph'>Paragraph</Link>
                <Link to='/progress-bar'>Progress Bar</Link>
                <Link to='/table'>Table</Link>
                <Link to='/tabs'>Tabs</Link>
                <Link to='/tooltip'>Tooltip</Link>
                <Link to='/well'>Well</Link>
            </div>

            {props.children}
        </div>

        {/* <Footer>
            <a href='#'>Link 1</a>
        </Footer>

        <Overlay id='overlay' />

        <Preloader />

        <Search />

        <SideNav navigation={props.navigation.items} /> */}
    </main>
);

export default Base