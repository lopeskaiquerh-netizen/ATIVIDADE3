import { initRouter } from './spa.js';
import { initFormValidation } from './form-validation.js';
import { initToasts } from './toast.js';

document.addEventListener('DOMContentLoaded', () => {
  initToasts();
  initRouter();
  initFormValidation();
});
