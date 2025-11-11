import { showToast } from './toast.js';

export function initFormValidation() {
  window.addEventListener('spa:navigated', (e) => {
    if (e.detail.route !== 'contato') return;
    const form = document.getElementById('contactForm');
    if (!form) return;

    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');

    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      let valid = true;

      form.querySelectorAll('.form-error').forEach(el => el.textContent = '');

      if (name.value.trim().length < 2) {
        form.querySelector('#name + .form-error').textContent = 'Nome muito curto.';
        valid = false;
      }

      if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.value)) {
        form.querySelector('#email + .form-error').textContent = 'E-mail inválido.';
        valid = false;
      }

      if (message.value.trim().length < 10) {
        form.querySelector('#message + .form-error').textContent = 'Mensagem muito curta.';
        valid = false;
      }

      if (/http|https/.test(message.value)) {
        form.querySelector('#message + .form-error').textContent = 'Não inclua links na mensagem.';
        valid = false;
      }

      if (!valid) {
        showToast('Corrija os erros antes de enviar.');
        return;
      }

      showToast('Mensagem enviada com sucesso!');
      form.reset();
    });
  });
}
