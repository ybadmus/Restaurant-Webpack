import { footer } from './footer';
import { header } from './header';
import { home } from './home';
import { about } from './about';
import { contact } from './contact';
import { menu } from './menu';
import './style.css';

function render() {
    const content = document.querySelector('#content');
    content.appendChild(header());

    content.appendChild(menu());
    //content.appendChild(about());

    content.appendChild(footer());
    return content;
};

render();