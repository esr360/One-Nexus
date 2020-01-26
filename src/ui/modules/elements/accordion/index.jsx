import config from './assets/config';
// import styles from './assets/styles';
import './assets/layout.scss';

const Accordion = ({ panels, persist, ...props }) => {
  const [live, toggle] = useState(
    panels.reduce(($, { active, id }, index) => active ? $.concat(id || index) : $, [])
  );

  return (
    <Module {...props}>
      {panels.map(({ title, content, id }, index) => (
        <Component name='panel' active={live.includes(id || index)}>
          <Component name='title' onClick={() => toggle(updatePanels(live, id || index, persist))}>
            {title}
          </Component>
          <Component name='content'>
            {content}
          </Component>
        </Component>
      ))}
    </Module>
  );
}

Accordion.defaultProps = { name: 'Accordion', config }

export default Accordion;

/**
 * Utility Functions
 */

function updatePanels(live, id, persist) {
  return live.reduce(($, panel) => {
    panel === id ? $ = $.filter(item => item !== id) : !persist && $.push(panel);

    return $;
  }, [id]);
}