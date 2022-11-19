import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './component/app-header';
import './component/app-nav';

import App from './view/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerBtn'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  swRegister();
});
