import config from './assets/config';
import styles from './assets/styles';

const Accordion = ({ panels, ...props }) => {
  const [live, setLive] = useState(
    panels.reduce(($, { active, id }, index) => active ? $.concat(id || index) : $, [])
  );

  return (
    <Module {...props}>
      {({ config }) => panels.map(({ title, content, id = index, callback }, index) => {
        const { persist } = config;
        const toggle = () => setLive(panelUpdater(live, id, persist, callback));
  
        return (
          <Component name='panel' active={live.includes(id)} key={id}>
            <Component name='title' onClick={toggle}>
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
}

Accordion.defaultProps = { name: 'Accordion', config, styles }

export default Accordion;

/**
 * Utility Functions
 */

function panelUpdater(live, id, persist, callback) {
  const state = live.includes(id) ? 'close' : 'open';

  callback && callback(state);

  return live.reduce(($, panel) => {
    panel === id ? $ = $.filter(item => item !== id) : persist && $.push(panel);

    return $;
  }, [id]);
}