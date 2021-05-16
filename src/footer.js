const footer = () => {
    const fa_copyright = ['fas', 'fa-copyright'];
    const copyright_year = ` ${new Date().getFullYear()}`;

    const footer = document.createElement('selector');
    footer.classList.add('footer');

    const ul = document.createElement('ul');

    const footer_list = [copyright_year, 'Milkyway Inc'];

    for (let i = 0; i < footer_list.length; i++) {

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = footer_list[i];

        li.appendChild(p);
        ul.appendChild(li);
    }

    footer.appendChild(ul);

    return footer;
};

export { footer };