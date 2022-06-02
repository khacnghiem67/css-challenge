const menu_icon = document.querySelector('.menu-icon');

const nav = document.querySelector('nav');

menu_icon.addEventListener('click', () => {
  menu_icon.classList.toggle('show');
  nav.classList.toggle('show');
});
