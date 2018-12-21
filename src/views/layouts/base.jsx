/**
 * Render Base layout
 */
const Base = props => (
    <main>
        <Header absolute {...props.header}>
            <Component name='logo'>
                <Logo {...props.logo} />
            </Component>
    
            <Component name='navigation'>
                <Navigation {...props.navigation} />
            </Component>
        </Header>

        <Billboard overlay image='http://hdqwalls.com/wallpapers/colorful-polygons.jpg'>
            Billboard <a href='google.com'>Google</a>
        </Billboard>

        {/* <Module name='foo'>
            <SubComponent name='bar'>
                <SubComponent name='bar'>fizzbuzz</SubComponent>
            </SubComponent>
        </Module> */}

        <Container>
            <Breadcrumb data={[
                {
                    label: 'level 1',
                    url: '/',
                    icon: 'home'
                },
                {
                    label: 'level 2',
                    url: '/'
                },
                {
                    label: 'level 3'
                }
            ]} />

            <Breadcrumb>
                <Breadcrumb.Item>Level 1</Breadcrumb.Item>
                <Breadcrumb.Item>Level 2</Breadcrumb.Item>
                <Breadcrumb.Item>Level 3</Breadcrumb.Item>
            </Breadcrumb>

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
                <Link to='/tables'>Table</Link>
                <Link to='/tabs'>Tabs</Link>
                <Link to='/tooltips'>Tooltip</Link>
                <Link to='/wells'>Well</Link>
            </div>

            {props.children}
        </Container>

        {/* <Footer>
            <a href='#'>Link 1</a>
        </Footer> */}

        <Overlay id='overlay' />

        {/*<Preloader />

        <Search />

        <SideNav navigation={props.navigation.items} /> */}
    </main>
);

export default Base