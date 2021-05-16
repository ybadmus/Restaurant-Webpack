import { footer } from './footer';
import { header } from './header';
import { home } from './home';
import { about } from './about';
import { contact } from './contact';
import './style.css';

function render() {
    const content = document.querySelector('#content');
    content.appendChild(header());

    content.appendChild(contact());
    //content.appendChild(about());

    content.appendChild(footer());
    return content;
};

render();