import footer from './footer';
import header from './header';
import home from './home';
import about from './about';
import contact from './contact';
import { menu } from './menu';
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
  if (event.target.className == 'nav-link') {
    render(event.target.id);

    const nav_links = document.querySelectorAll('.nav-link');
    nav_links.forEach((navlink) => navlink.className = 'nav-link');

    const nav_link = document.querySelector(`#${event.target.id}`);
    nav_link.classList.add('active');
  }
});