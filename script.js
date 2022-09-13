const menuIcon = document.querySelector
  ('.nav-menu');
const navList = document.querySelector('.nav-list')
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
  navList.classList.toggle('active')
  navbar.classList.toggle('change');
});

navList.addEventListener('click', () => {
  navList.style.display = 'none'
  navbar.classList.remove('change');

});