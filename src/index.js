import { footer } from './footer';
import './style.css';

function index() {
    return footer();
};

const content = document.querySelector('#content');
content.appendChild(index());