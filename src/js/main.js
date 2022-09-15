/* Mobile Menu */

const hamburger = document.querySelector('.hamburger');
const mobileMenu =  document.querySelector('.mobile-menu');
const cross =  document.querySelector('.fa-xmark');
const menuOptions = document.querySelectorAll('.desktop-menu li');
let menuActivated = false;

hamburger.addEventListener('click', () => {
  open();
  if (menuActivated == false) {
    for(let option = 0; option < menuOptions.length; option += 1) {
      mobileMenu.innerHTML += menuOptions[option].innerHTML;
    }
  }
  menuActivated = true;
});

cross.addEventListener('click', close);
mobileMenu.addEventListener('click', close);


function open() {
  mobileMenu.classList.toggle('open');
  mobileMenu.style.display = 'block';
  mobileMenu.style.height = '100vh';
  mobileMenu.style.visibility = 'visible';
  hamburger.style.visibility = 'hidden';
  cross.style.visibility = 'visible';
}

function close() {
  mobileMenu.classList.remove('open');
  mobileMenu.style.height = '0';
  mobileMenu.style.visibility = 'hidden';
  hamburger.style.visibility = 'visible';
  cross.style.visibility = 'hidden';
  cross.style.display = 'none';
  cross.style.height = '0';
}
