/* Mobile Menu */

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const cross = document.querySelector('.fa-xmark');
const menuOptions = document.querySelectorAll('.desktop-menu li');
let menuActivated = false;

function open() {
  mobileMenu.classList.toggle('open');
  mobileMenu.style.display = 'block';
  mobileMenu.style.height = '100vh';
  mobileMenu.style.visibility = 'visible';
  hamburger.style.visibility = 'hidden';
  cross.style.visibility = 'visible';
  cross.style.position = 'inherit';
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
hamburger.addEventListener('click', () => {
  open();
  if (menuActivated === false) {
    mobileMenu.innerHTML += '<a href="./index.html">Home</a>';
    for (let option = 0; option < menuOptions.length; option += 1) {
      mobileMenu.innerHTML += menuOptions[option].innerHTML;
    }
  }
  menuActivated = true;
});

cross.addEventListener('click', close);
mobileMenu.addEventListener('click', close);

/* Create speaker cards */

const array = [
  {
    id: '1',
    image: './src/img/speakers/ariel-camus-microverse.jpeg',
    name: 'Ariel Camus',
    company: 'Microverse CEO',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam, iure reprehenderit molestiae provident commodi, voluptatum enim atque optio debitis qui numquam magnam quidem voluptatibus repudiandae.',
  },
  {
    id: '2',
    image: './src/img/speakers/brian-chesky-airbnb.jpg',
    name: 'Brian Chesky',
    company: 'Airbnb CEO',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam, iure reprehenderit molestiae provident commodi, voluptatum enim atque optio debitis qui numquam magnam quidem voluptatibus repudiandae.',
  },
  {
    id: '3',
    image: './src/img/speakers/jeff-weiner-linkedin.jpg',
    name: 'Jeff Weiner',
    company: 'LinkedIn CEO',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam, iure reprehenderit molestiae provident commodi, voluptatum enim atque optio debitis qui numquam magnam quidem voluptatibus repudiandae.',
  },
  {
    id: '4',
    image: './src/img/speakers/leadership-nat-friedman-github.jpg',
    name: 'Mat Friedman',
    company: 'GitHub CEO',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam, iure reprehenderit molestiae provident commodi, voluptatum enim atque optio debitis qui numquam magnam quidem voluptatibus repudiandae.',
  },
  {
    id: '5',
    image: './src/img/speakers/Mark_Zuckerberg.jpg',
    name: 'Mark Zuckerberg',
    company: 'Meta CEO',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam, iure reprehenderit molestiae provident commodi, voluptatum enim atque optio debitis qui numquam magnam quidem voluptatibus repudiandae.',
  },
  {
    id: '5',
    image: './src/img/speakers/Sundar_pichai_google.png',
    name: 'Sundar Pichai',
    company: 'Google CEO',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam, iure reprehenderit molestiae provident commodi, voluptatum enim atque optio debitis qui numquam magnam quidem voluptatibus repudiandae.',
  },
];

const speakerSection = document.querySelector('.speakers');

for (let i = 0; i < array.length; i += 1) {
  speakerSection.innerHTML += `
  <!-- speaker card -->
          <div class="speaker-card">
            <div class="upper-part">
              <div class="speaker-image-container">
                <div class="speaker-bg"></div>
                <img class="speaker-image" src="${array[i].image}" alt="${array[i].name} image">
              </div>
              <div class="speakers-headings">
                <h4 class="speaker-name">${array[i].name}</h4>
                <h5 class="speaker-company"> ${array[i].company}</h5>
                <div class="line desktop"></div>
                <p class="speaker-introduction-desktop">
                ${array[i].description}
                </p>
              </div>
            </div>
            <div class="lower-part">
              <p class="speaker-introduction-mobile">
              ${array[i].description}
              </p>
            </div>
          </div>
          <!-- speaker card -->
  `;
}