import { showToast } from './toast.js';

export function initFormValidation() {
  const STORAGE_KEY = 'contact_draft_v1';

  function saveDraft(form) {
    const data = {
      name: form.querySelector('#name')?.value || '',
      email: form.querySelector('#email')?.value || '',
      message: form.querySelector('#message')?.value || ''
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function loadDraft(form) {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (data.name) form.querySelector('#name').value = data.name;
    if (data.email) form.querySelector('#email').value = data.email;
    if (data.message) form.querySelector('#message').value = data.message;
  }

  function setupForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    // Carrega o rascunho salvo
    loadDraft(form);

    // Salva sempre que o usuário digitar
    form.addEventListener('input', () => saveDraft(form));

    // Validação básica e envio
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');

      let valid = true;
      form.querySelectorAll('.form-error').forEach(e => e.textContent = '');

      if (name.value.trim().length < 2) {
        form.querySelector('#name + .form-error').textContent = 'Nome muito curto.';
        valid = false;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        form.querySelector('#email + .form-error').textContent = 'E-mail inválido.';
        valid = false;
      }

      if (message.value.trim().length < 10) {
        form.querySelector('#message + .form-error').textContent = 'Mensagem muito curta.';
        valid = false;
      }

      if (!valid) {
        showToast('Corrija os erros antes de enviar.');
        return;
      }

      // Limpa o localStorage ao enviar
      localStorage.removeItem(STORAGE_KEY);
      form.reset();
      showToast('Mensagem enviada com sucesso!');
    });
  }

  // Escuta navegação do SPA e reaplica o comportamento
  window.addEventListener('spa:navigated', (e) => {
    if (e.detail.route === 'contato') setupForm();
  });

  // Também tenta configurar imediatamente (caso a página inicial já seja o contato)
  setupForm();
}
