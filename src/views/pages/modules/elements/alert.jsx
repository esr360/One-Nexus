import SyntaxHighlighter from '../../../tools/syntaxHighlighter';
import Base from '../../../layouts/base';

function DEMO__HIDE_ALERT() {
    document.getElementById('alert-demo').style.display = 'none';
}

const AlertBars = props =>  {
  const [demo1Visible, setDemo1Visibe] = useState(true);

  console.time('foo');
  React.useEffect(() => console.timeEnd('foo'));

  return (
    <Base {...props.config.views}>
      <Heading heading='2' size='7'>Alert</Heading>

      <Heading heading='3' size='5'>Quick Look</Heading>

      <SyntaxHighlighter language='jsx'>{
          '<Alert foo="bar">This is a default alert</Alert>'
      }</SyntaxHighlighter>

      <Well>
          <Alert success icon={{ display: 'none' }}>This is a <b>default</b> alert</Alert>

          <Alert success>This is a <b>success</b> alert</Alert>
          <Alert error>This is a <b>success</b> alert</Alert>
          <Alert info>This is a <b>success</b> alert</Alert>
          <Alert help>This is a <b>success</b> alert</Alert>
          
          <Alert icon={{ glyph: 'times' }} background-color={props.theme.colors.brand['brand-2']}>This is a <b>custom</b> alert</Alert>

          <Alert success icon={{ display: 'none' }}>This is a <b>success</b> alert with no icon</Alert>

          {demo1Visible && <Alert carrot dismiss={() => setDemo1Visibe(false)}>This is a carrot alert</Alert>}

          <Alert icon={{ glyph: 'palette', right: true, onClick: (event) => console.log(event) }}>This is a default alert</Alert>

          <Alert dismiss={() => console.log('dismiss')}>This is a default alert</Alert>

          <Alert box info header={{ content: 'Alert Heading' }}>This is an <b>info</b> alert box</Alert>

          <Alert box success heading='Test Heading'>This is an <b>info</b> alert box</Alert>
      </Well>
    </Base>
  );
}

export default AlertBars;