import config from './assets/config.js';
import layout from './assets/layout.js';
// import './assets/layout.scss';

const Accordion = ({ panels, toggle, ...props }) => (
  <Module {...props}>
    {panels.map(({ title, content }) => {
      const [active, toggle] = useState(false);

      return (
        <Component name='panel' active={active}>
          <Component name='title' onClick={() => toggle(!active)}>
            {title}
          </Component>
          <Component name='content'>
            {content}
          </Component>
        </Component>
      );
    })}
  </Module>
);

export default Object.assign(Accordion, {
  config, layout, defaultProps: {
    name: 'Accordion'
  }
});