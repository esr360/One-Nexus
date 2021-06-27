import config from './assets/config';
import styles from './assets/styles';

const Accordion = ({ panels, ...props }) => {
  const { name, persist } = useConfig(props);

  const [live, setLive] = useState(
    panels.reduce(($, { active, id }, i) => active ? $.concat(id || i) : $, [])
  );

  return (
    <Module name={name} {...props}>
      {panels.map(({ title, content, callback, id = i }, i) => (
        <Component name='panel' active={live.includes(id)} key={id}>
          <Component name='title' onClick={() => setLive(panelUpdater(id, persist, callback))}>
            {title}
          </Component>
          <Component name='content'>
            {content}
          </Component>
        </Component>
      ))}
    </Module>
  );
  
  function panelUpdater(id, persist, callback) {
    callback?.(live.includes(id) ? 'close' : 'open');
  
    return live.reduce(($, panel) => {
      return panel === id ? ($ = $.filter(item => item !== id)) && $ : persist && $.push(panel), $;
    }, [id]);
  }
}

Accordion.defaultProps = { config, styles }

export default Accordion;