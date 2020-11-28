const Accordions = ({ layouts, ...props }) => {
  const [isPartyTime, setPartyTime] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => setPartyTime(true), 3000);
  });

  const data = [
    {
      id: 'alpha', 
      title: 'foo', 
      content: 'bar', 
      active: true
    },
    {
      id: 'beta', 
      title: 'fizz',
      content: <div>potato</div>
    }
  ];

  const partyData = [
    {
      id: 'alpha', 
      title: 'foo', 
      content: 'bar', 
      active: true
    },
    {
      id: 'party', 
      title: 'party time', 
      content: 'bar',
      callback: (state) => {
        console.log(state);
      }
    },
    {
      id: 'beta', 
      title: 'fizz', 
      content: <div>potato</div>
    }
  ];

  return (
    <layouts.base {...props.config.views}>
      <Alert alert='success' close>
        <a href="#">Learn more</a> about module configutation
      </Alert>

      <Accordion title={{ background: 'red', 'panel-is-active': { background: 'green' } }} className='fizz' panels={data} />

      <Accordion panels={isPartyTime ? partyData : data} />
  
      <Accordion persist={false} panels={[
        {title: 'foo1', content: 'bar'},
        {title: 'fizz1', content: (
          <Accordion id='foo' panels={[
            {title: 'foo2', content: 'bar'},
            {title: 'fizz2', content: (
              <Accordion modifiers={['keepOpen']} panels={[
                {title: 'foo3', content: 'bar'},
                {title: 'fizz3', content: <div>potato</div>}
              ]} />
            )}
          ]} />
        )},
        {title: 'fizz4', content: <div>buzz</div>}
      ]} />
    </layouts.base>
  );
}

export default Accordions;