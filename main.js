const burger = document.querySelector('#toggle');
const nav = document.querySelector('#navItems');

burger.addEventListener('click', () => {
  nav.classList.toggle('.show');
});
