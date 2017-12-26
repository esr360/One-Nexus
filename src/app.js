// Expose the app object
import * as app from './app';

// Theme
import Theme from './ui/themes/One-Nexus/one-nexus';

// UI Components
import { Accordion } from './ui/modules/elements/accordions/accordions.jsx';
import { Ideal } from './ui/modules/elements/accordions/accordions.jsx';

export { Accordion, Ideal };

// Views
import Index from './views/index.jsx';

Index();

Theme();