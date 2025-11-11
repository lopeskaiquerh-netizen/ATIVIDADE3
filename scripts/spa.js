import { templates } from './templates.js';

export function initRouter() {
  function render() {
    const route = location.hash.replace('#', '') || 'home';
    const content = templates[route] ? templates[route]() : templates.home();
    document.getElementById('app').innerHTML = content;
    document.querySelectorAll('.nav-list a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${route}`);
    });
    window.dispatchEvent(new CustomEvent('spa:navigated', { detail: { route } }));
  }

  window.addEventListener('hashchange', render);
  render();
}
