import '@babel/polyfill';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'regenerator-runtime'; /* for async await transpile */
import './component/app-header';
import './component/app-nav';
import './component/app-footer';

import App from './view/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerBtn'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', async () => {
  await app._createSkeleton();
  app.renderPage();
});

window.addEventListener('load', async () => {
  await app._createSkeleton();
  app.renderPage();
  swRegister();
});
