const headerContent = document.querySelector('.header-content');
const menu = document.querySelector('.menu');
const button = document.querySelector('.btn-mobile');

console.log(headerContent, menu, button);

button.addEventListener('click', handleClick);

function handleClick() {
  button.classList.toggle('active');
  headerContent.classList.toggle('active');
  menu.classList.toggle('active');
}
