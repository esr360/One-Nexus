export default props => {
  const [showOverlay, setShowOverlay, onOverlayClick] = [...useState(false), React.useRef()];

  const templateConfig = {
    // Modal: {
    //   onShow: (hideModal, closeOnOverlayClick = true) => {
    //     setShowOverlay(true);

    //     onOverlayClick.current = closeOnOverlayClick ? () => {
    //       hideModal();
    //       setShowOverlay(false);
    //     } : null;
    //   },
    //   onHide: () => setShowOverlay(false)
    // }
  }

  return (
    <Module name='template' {...templateConfig}>
      <Container large section>{props.children}</Container>

      <Overlay visible={showOverlay} onClick={onOverlayClick.current} />
    </Module>
  );
}

  // return (
  //   <Module name="template" {...templateConfig}>
  //     <Search />

  //     <Header absolute {...props.header}>
  //         <Component name='logo'>
  //             <Logo {...props.logo} />
  //         </Component>

  //         <Component name='navigation'>
  //             <Navigation {...props.navigation} />
  //             <div className='sideNav__toggle'>Toggle SideNav</div>
  //             <div className='search__toggle'>Toggle Search</div>
  //         </Component>
  //     </Header>

  //     <Billboard overlay image='http://hdqwalls.com/wallpapers/colorful-polygons.jpg'>
  //         Billboard <a href='google.com'>Google</a>  <a href='yahoo.com'>Yahoo</a>
  //     </Billboard>

  //     <Container large section>
  //       <Breadcrumb data={[
  //           {
  //               label: 'level 1',
  //               url: '/',
  //               icon: 'home'
  //           },
  //           {
  //               label: 'level 2',
  //               url: '/'
  //           },
  //           {
  //               label: 'level 3'
  //           }
  //       ]} />

  //       <Breadcrumb>
  //           <Breadcrumb.Item>Level 1</Breadcrumb.Item>
  //           <Breadcrumb.Item>Level 2</Breadcrumb.Item>
  //           <Breadcrumb.Item>Level 3</Breadcrumb.Item>
  //       </Breadcrumb>

  //       {props.children}
  //     </Container>

  //     <Footer>
  //         <a href='#'>Link 1</a>
  //     </Footer>

  //     <Overlay id='overlay' visible={showOverlay} dismissable={onOverlayClick} onClick={onOverlayClick} />

  //     <Preloader />

  //     <SideNav {...props.navigation} />
  //   </Module>
  // );