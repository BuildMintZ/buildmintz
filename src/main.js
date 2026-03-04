import './style.css';
import { observeElements, initParallax } from './utils/animations';

document.addEventListener('DOMContentLoaded', () => {
  observeElements();
  initParallax();
});
