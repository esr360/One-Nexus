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

        <Container>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/accordions'>Accordion</Link>
                <Link to='/alerts'>Alert</Link>
                <Link to='/blockquotes'>Blockquote</Link>
                <Link to='/buttons'>Button</Link>
                <Link to='/carousels'>Carousel</Link>
                <Link to='/forms'>Form</Link>
                <Link to='/headings'>Heading</Link>
                <Link to='/images'>Image</Link>
                <Link to='/lists'>List</Link>
                <Link to='/modals'>Modal</Link>
                <Link to='/paragraphs'>Paragraph</Link>
                <Link to='/progress-bars'>Progress Bar</Link>
                <Link to='/tables'>Table</Link>
                <Link to='/tabs'>Tabs</Link>
                <Link to='/tooltips'>Tooltip</Link>
                <Link to='/wells'>Well</Link>
            </div>

            {props.children}
        </Container>

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