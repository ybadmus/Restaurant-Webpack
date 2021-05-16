const footer = () => {
    const fa_copyright = ['fa', 'fa-copyright', 'p-1'];
    const copyright_year = ` ${new Date().getFullYear()}`;

    const footer = document.createElement('footer');
    footer.className = 'footer mt-4';

    const ul = document.createElement('ul');

    const footer_list = [copyright_year, 'Milkyway Inc'];

    for (let i = 0; i < footer_list.length; i++) {

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = footer_list[i];

        if (i == 0) {
            const itag = document.createElement('i');
            itag.classList.add(...fa_copyright);
            li.appendChild(itag);
        }

        li.appendChild(p);
        ul.appendChild(li);
    }

    footer.appendChild(ul);

    return footer;
};

export { footer };