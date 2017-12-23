

import * as Theme from './ui/themes/One-Nexus/one-nexus';

import { Accordion } from './ui/modules/elements/accordions/accordions.jsx';

export { Accordion };

const panels = [
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'},
]

ReactDOM.render(
    <Accordion panels={panels} />, document.getElementById('react')
);

Theme.theme();