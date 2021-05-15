import { footer } from './footer';
import { header } from './header';
import { home } from './home';
import './style.css';

function render() {
    const content = document.querySelector('#content');
    content.appendChild(header());
    content.appendChild(home());
    content.appendChild(footer());
    return content;
};

render();