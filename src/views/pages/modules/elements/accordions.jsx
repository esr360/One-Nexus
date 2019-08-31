import Base from '../../../layouts/base';

const Accordions = props => {
  const [isPartyTime, setPartyTime] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => setPartyTime(true), 3000);
  });

  const data = [
    {title: 'foo', content: 'bar', active: true},
    {title: 'fizz', content: <div>potato</div>}
  ];

  const partyData = [
    {title: 'foo', content: 'bar', active: true},
    {title: 'party time', content: 'bar'},
    {title: 'fizz', content: <div>potato</div>}
  ];

  return (
    <Base {...props.config.views}>
      <Alert alert='success' close>
        <a href="#">Learn more</a> about module configutation
      </Alert>

      <Accordion className='fizz' panels={isPartyTime ? partyData : data} />
  
      <Accordion persist panels={[
        {title: 'foo', content: 'bar'},
        {title: 'fizz', content: (
          <Accordion id='foo' panels={[
            {title: 'foo', content: 'bar'},
            {title: 'fizz', content: (
              <Accordion modifiers={['keepOpen']} panels={[
                {title: 'foo', content: 'bar'},
                {title: 'fizz', content: <div>potato</div>}
              ]} />
            )}
          ]} />
        )},
        {title: 'fizz', content: <div>buzz</div>}
      ]} />
    </Base>
  );
}

export default Accordions;