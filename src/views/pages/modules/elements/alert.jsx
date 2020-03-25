import SyntaxHighlighter from '../../../tools/syntaxHighlighter';
import Section from '../../../tools/section';
import Base from '../../../layouts/base';

function DEMO__HIDE_ALERT() {
    document.getElementById('alert-demo').style.display = 'none';
}

const AlertBars = props =>  {
  const [demo1Visible, setDemo1Visibe] = useState(true);

  return (
    <Base {...props.config.views}>
      <Heading heading='2' size='7'>Alert</Heading>

      <Heading heading='3' size='5'>Quick Look</Heading>

      <SyntaxHighlighter language='jsx'>{
          '<Alert>This is a default alert</Alert>'
      }</SyntaxHighlighter>

      <Well>
          <Alert alert='success'>This is a <b>success</b> alert</Alert>
          <Alert alert='error'>This is an <b>error</b> alert</Alert>
          <Alert alert='info'>This is an <b>info</b> alert</Alert>
          <Alert alert='help'>This is a <b>help</b> alert</Alert>

          <Alert box alert='info' heading='Alert Heading'>This is an <b>info</b> alert box</Alert>

          <Alert alert={{ color: 'purple', icon: 'times' }}>This is a default alert</Alert>
          {demo1Visible && <Alert alert='carrot' dismiss={() => setDemo1Visibe(false)}>This is a carrot alert</Alert>}
      </Well>

      {/* <List>
          <List.Item><Link to='#configuration'>Configuration</Link></List.Item>
          <List.Item><Link to='#styles'>Styles</Link></List.Item>
          <List.Item><Link to='#interactions'>Interactions</Link></List.Item>
          <List.Item><Link to='#render-with-react'>Render With React</Link></List.Item>
      </List> */}

      <Section id='configuration'>
        <Heading heading='3' size='5'>Configuration</Heading>

        <Alert alert="help"><a href="#">Learn more</a> about module configutation</Alert>

        <SyntaxHighlighter language='json'>{`
            "alert": {
                "name": "alert",
                "alerts": {
                    "error": {
                        "color": ["#COLOR", "alert", "error"],
                        "icon": "times"
                    },
                    "success": {
                        "color": ["#COLOR", "alert", "success"],
                        "icon": "check"
                    },
                    "info": {
                        "color": ["#COLOR", "alert", "info"],
                        "icon": "info-circle"
                    },
                    "help": {
                        "color": ["#COLOR", "alert", "help"],
                        "icon": "question-circle"
                    }
                },
                "text-color": ["#COLOR", "greyscale", "white"],
                "icon": {
                    "default-enable": true,
                    "margin-right": "0.5em",
                    "line-height": "1.25",
                    "-right": {
                        "margin-left": "0.5em"
                    }
                },
                "-bar": {
                    "padding": "0.85em"
                },
                "-box": {
                    "padding": "1.5em"
                }
            }
        `}</SyntaxHighlighter>

        <Heading heading='5' size='4'>alert.alerts</Heading>

        {/* <List>
            <List.Item><b>color: </b> The background color of the alert</List.Item>
            <List.Item><b>icon:</b> <a href="https://fontawesome.com/v4.7.0/icons/" target="blank">FontAwesome</a> keyword for the alert's icon</List.Item>
        </List> */}

        <Heading heading='5' size='4'>alert.icon['default-enable']</Heading>

        <Well>
            <Paragraph>Set to show the alert's icon by default</Paragraph>
        </Well>
      </Section>

      <Section id='styles'>
        <Heading heading='3' size='5'>Styles</Heading>

        <Alert alert="info">Edit styles in <a href="#">ui/modules/elements/alert/_alert.scss</a></Alert>

        <Alert alert="help"><a href="#">Learn how to modify styles using the above configuration</a> so you don't have to touch the source code</Alert>
      </Section>

      <Section id='interactions'>
        <Heading heading='3' size='5'>Interactions</Heading>

        <Alert alert="info">Interactions are defined in <a href="#">ui/modules/elements/alert/alert.js</a></Alert>

        <Heading heading='4' size='4'>Dismiss</Heading>

        <Well>
            <Paragraph>Hide an Alert</Paragraph>
        </Well>

        <SyntaxHighlighter language='html'>{`
            <div class="alert-bar" id="alert-demo">...</div>
        `}</SyntaxHighlighter>

        <SyntaxHighlighter language='js'>{`
            const alert = document.getElementById('alert-demo');

            window.UI.alert().dismiss(alert);
        `}</SyntaxHighlighter>
      </Section>

      <Section id='render-with-react'>
          <Heading heading='3' size='5'>Render With React</Heading>

          <SyntaxHighlighter language='jsx'>{
              '<Alert>This is an alert</Alert>'
          }</SyntaxHighlighter>

          {/* <List>
              <List.Item><Link to='#props.bar'>[...Global.props]</Link></List.Item>
              <List.Item><Link to='#props.bar'>Props.bar</Link></List.Item>
              <List.Item><Link to='#props.box'>Props.box</Link></List.Item>
              <List.Item><Link to='#props.alert'>Props.alert</Link></List.Item>
              <List.Item><Link to='#props.icon'>Props.icon</Link></List.Item>
              <List.Item><Link to='#props.close'>Props.close</Link></List.Item>
          </List> */}

          <Section id='props.bar'>
              <Heading size='5'>Props.bar</Heading>

              {/* <app.Table small content={[{
                  default: 'true',
                  type: 'Bool'
              }]} /> */}

              <SyntaxHighlighter language='jsx'>{
                  '<Alert bar>This is an alert</Alert>'
              }</SyntaxHighlighter>

              <Heading heading='4' size='3'>Output:</Heading>

              <SyntaxHighlighter language='html'>{
                  '<div class="alert-bar">This is an alert</div>'
              }</SyntaxHighlighter>

              <Heading heading='4' size='3'>Preview:</Heading>

              <Well>
                  <Alert bar>This is an alert</Alert>
              </Well>
          </Section>

          <Section id='props.box'>
              <Heading size='5'>Props.box</Heading>

              {/* <app.Table small content={[{
                  default: 'false',
                  type: 'Bool'
              }]} /> */}

              <SyntaxHighlighter language='jsx'>{
                  '<Alert box>This is an alert</Alert>'
              }</SyntaxHighlighter>

              <Heading heading='4' size='3'>Output:</Heading>

              <SyntaxHighlighter language='html'>{
                  '<div class="alert-box">This is an alert</div>'
              }</SyntaxHighlighter>

              <Heading heading='4' size='3'>Preview:</Heading>

              <Well>
                  <Alert box>This is an alert</Alert>
              </Well>
          </Section>

          <Section id='props.alert'>
              <Heading size='5'>Props.alert</Heading>

              {/* <app.Table small content={[{
                  default: 'success',
                  type: 'String'
              }]} /> */}

              <SyntaxHighlighter language='jsx'>{
                  `<Alert alert='success'>This is an alert</Alert>`
              }</SyntaxHighlighter>

              <Heading heading='4' size='3'>Output:</Heading>

              <SyntaxHighlighter language='html'>{
                  '<div class="alert-bar-success">This is an alert</div>'
              }</SyntaxHighlighter>

              <p>You can directly reference available alerts as a prop name:</p>

              <SyntaxHighlighter language='jsx'>{`
                  <Alert success>This is an alert</Alert>
              `}</SyntaxHighlighter>
          </Section>

          <Section id='props.icon'>
              <Heading size='5'>Props.icon</Heading>

              {/* <app.Table small content={[{
                  default: 'undefined',
                  type: '(String|Array)'
              }]} /> */}

              {/* <List>
                  <List.Item>
                      <Link to='#overwrite-default-icon'>Overwrite default icon</Link>
                  </List.Item>
                  <List.Item>
                      <Link to='#disable-default-icon'>Disable default icon</Link>
                  </List.Item>
                  <List.Item>
                      <Link to='#right-aligned-icon'>Right-aligned icon</Link>
                  </List.Item>
                  <List.Item>
                      <Link to='#right-aligned-custom-icon'>Right-aligned custom icon</Link>
                  </List.Item>
              </List> */}

              <Section id='overwrite-default-icon'>
                  <Heading size='4'>Overwrite default icon</Heading>

                  <SyntaxHighlighter language='jsx'>{
                      `<Alert icon='exclamation-triangle'>This is an alert</Alert>`
                  }</SyntaxHighlighter>

                  <Heading heading='4' size='3'>Output:</Heading>

                  <SyntaxHighlighter language='html'>{`
                      <div class="alert-bar">
                          <div class="alert_icon fa fa-exclamation-triangle"></div> This is an alert
                      </div>
                  `}</SyntaxHighlighter>

                  <Heading heading='4' size='3'>Preview:</Heading>

                  <Well>
                      <Alert icon='exclamation-triangle'>This is an alert</Alert>
                  </Well>
              </Section>

              <Section id='disable-default-icon'>
                  <Heading size='4'>Disable default icon</Heading>

                  <SyntaxHighlighter language='jsx'>{
                      `<Alert icon={false}>This is an alert</Alert>`
                  }</SyntaxHighlighter>

                  <Heading heading='4' size='3'>Output:</Heading>

                  <SyntaxHighlighter language='html'>{`
                      <div class="alert-bar">This is an alert</div>
                  `}</SyntaxHighlighter>

                  <Heading heading='4' size='3'>Preview:</Heading>

                  <Well>
                      <Alert icon={false}>This is an alert</Alert>
                  </Well>
              </Section>

              <Section id='right-aligned-icon'>
                  <Heading size='4'>Right-aligned icon:</Heading>

                  <Alert info>A right-aligned icon cannot be used in conjunction with the <code className='code'>close</code> prop</Alert>

                  <SyntaxHighlighter language='jsx'>{
                      `<Alert icon='right'>This is an alert</Alert>`
                  }</SyntaxHighlighter>

                  <SyntaxHighlighter language='html'>{`
                      <div class="alert-bar">
                          <div class="alert_icon-right fa fa-check"></div> This is an alert
                      </div>
                  `}</SyntaxHighlighter>

                  <Well>
                      <Alert icon='right'>This is an alert</Alert>
                  </Well>
              </Section>

              <Section id='right-aligned-custom-icon'>
                  <Heading size='4'>Right-aligned custom icon:</Heading>

                  <SyntaxHighlighter language='jsx'>{
                      `<Alert icon={['exclamation-triangle', 'right']}>This is an alert</Alert>`
                  }</SyntaxHighlighter>

                  <SyntaxHighlighter language='html'>{`
                      <div class="alert-bar">
                          <div class="alert_icon-right fa fa-exclamation-triangle"></div> This is an alert
                      </div>
                  `}</SyntaxHighlighter>

                  <Well>
                      <Alert icon={['exclamation-triangle', 'right']}>This is an alert</Alert>
                  </Well>
              </Section>
          </Section>

          <Section id='props.close'>
              <Heading size='5'>Props.close</Heading>

              <Alert info>This prop cannot be used in conjunction with a right-aligned icon</Alert>

              <SyntaxHighlighter language='jsx'>{
                  `<Alert close>This is an alert</Alert>`
              }</SyntaxHighlighter>

              <SyntaxHighlighter language='html'>{`
                  <div class="alert-bar">
                      <div class="alert_icon-close-right fa fa-times"></div> This is an alert
                  </div>
              `}</SyntaxHighlighter>

              <Alert info>Clicking the close icon triggers the <code className='code'>dismiss</code> <Link to='#interactions'>interaction</Link> by default</Alert>

              <Well>
                  <Alert close>This is an alert</Alert>
              </Well>

              <Heading heading='4' size='4'>Custom callback function onClick:</Heading>

              <SyntaxHighlighter language='js'>{`
                  function hideAlert() {
                      document.getElementById('alert-demo').classList.add('hidden');
                  }
              `}</SyntaxHighlighter>

              <SyntaxHighlighter language='jsx'>{`
                  <Alert id='alert-demo' close={hideAlert}>...</Alert>
              `}</SyntaxHighlighter>

              <Well>
                  <Alert id='alert-demo' close dismiss={DEMO__HIDE_ALERT}>
                      Click the X icon to initiate the callback function
                  </Alert>
              </Well>
          </Section>
      </Section>
    </Base>
  );
}

export default AlertBars;