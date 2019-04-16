//nav bar menu :
const menu = document.getElementById('menu');
const exit = document.getElementById('exit');
const nav = document.getElementById('nav')

menu.addEventListener('click', function(e) {
  nav.classList.toggle('hide-mobile');
  e.preventDefault();
});


exit.addEventListener('click', function(e) {
  nav.classList.add('hide-mobile');
  e.preventDefault();
});

//contact button:

const contact = document.getElementById("contact");

contact.addEventListener('click', function() {
  document.querySelector('.bg-modals').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.bg-modals').style.display = 'none';
});