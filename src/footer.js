const footer = () => {
    const fa_copyright = ['fas', 'fa-copyright'];
    const copyright_year = ` ${new Date().getFullYear()}`;

    const footer = document.createElement('selector');
    footer.classList.add('footer');

    const ul = document.createElement('ul');
    const li = document.createElement('li');

    const i = document.createElement('i');
    i.classList.add(...fa_copyright);

    const p = document.createElement('p');
    p.textContent = copyright_year;

    li.appendChild(i);
    li.appendChild(p);
    ul.appendChild(li);
    footer.appendChild(ul);

    return footer;
};

export { footer };