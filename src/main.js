import './scss/styles.scss'

const btnOpen = document.querySelector('.navbar-toggler');
const btnClose = document.querySelector('.nav-close');
const menu = document.querySelector('#navMenu');

if (btnOpen && menu) {
  btnOpen.addEventListener('click', () => {
    menu.classList.add('open');
  });
}

if (btnClose && menu) {
  btnClose.addEventListener('click', () => {
    menu.classList.remove('open');
  });
}