'use strict';

const button = document.getElementById('burger-menu');
const menu = document.getElementById('menu');
const closedMenu = document.getElementById('burger-menu--closed');

button.addEventListener('click', () => {
  menu.classList.remove('burger-menu--open');
  menu.classList.add('burger-menu--closed');
});

closedMenu.addEventListener('click', () => {
  menu.classList.add('burger-menu--open');
  menu.classList.remove('burger-menu--closed');
});
