import footer from './footer.js';
import header from './header.js';
import home from './home.js';
import about from './about.js';
import contact from './contact.js';
import menu from './menu.js';
import './style.css';

const render = (item) => {
  document.getElementById('content').innerHTML = '';

  const content = document.querySelector('#content');
  content.appendChild(header());

  switch (item) {
    case 'home':
      content.appendChild(home());
      break;
    case 'menu':
      content.appendChild(menu());
      break;
    case 'about':
      content.appendChild(about());
      break;
    case 'contact':
      content.appendChild(contact());
      break;
    default:
      content.appendChild(home());
  }

  content.appendChild(footer());
  return content;
};

render();

document.addEventListener('click', (event) => {
  if (event.target.className === 'nav-link') {
    render(event.target.id);

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((navlink) => {
      navlink.className = 'nav-link';
      return navlink;
    });

    const navLink = document.querySelector(`#${event.target.id}`);
    navLink.classList.add('active');
  }
});