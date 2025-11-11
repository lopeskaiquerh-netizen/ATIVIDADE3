export function initToasts() {
  if (!document.getElementById('toasts')) {
    const div = document.createElement('div');
    div.id = 'toasts';
    div.className = 'toasts';
    document.body.appendChild(div);
  }
}

export function showToast(msg, duration = 3000) {
  const container = document.getElementById('toasts');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), duration);
}
