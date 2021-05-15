import { footer } from './footer';
import { header } from './header';
import './style.css';

function render() {
    const content = document.querySelector('#content');
    content.appendChild(header());
    content.appendChild(footer());
    return content;
};

render();