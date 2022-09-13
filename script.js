const menuIcon = document.querySelector
  ('.nav-menu');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});


