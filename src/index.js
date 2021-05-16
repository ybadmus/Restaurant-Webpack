import { footer } from './footer';
import { header } from './header';
import { home } from './home';
import { about } from './about';
import { contact } from './contact';
import { menu } from './menu';
import './style.css';

const render = (menu) => {
    const content = document.querySelector('#content');
    content.appendChild(header());

    content.appendChild(home());

    content.appendChild(footer());
    return content;
};

render();