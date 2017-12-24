// Expose the app object
import * as app from './app';

// Theme
import Theme from './ui/themes/One-Nexus/one-nexus';

// UI Components
import { Accordion } from './ui/modules/elements/accordions/accordions.jsx';

export { Accordion };

// Views
import Index from './views/index.jsx';

Index();

Theme();