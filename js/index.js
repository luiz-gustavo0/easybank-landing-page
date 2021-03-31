const headerContent = document.querySelector('.header-content');
const menu = document.querySelector('.menu');
const button = document.querySelector('.btn-mobile');

button.addEventListener('click', handleClick);

function handleClick() {
  button.classList.toggle('active');
  headerContent.classList.toggle('active');
  menu.classList.toggle('active');
}
