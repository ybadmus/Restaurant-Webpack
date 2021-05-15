const header = () => {
    const navbar_class = ['navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark'];
    const navbar_collapse = ['collapse', 'navbar-collapse']

    const nav = document.createElement('nav');
    nav.classList.add(...navbar_class);

    const container_fluid = document.createElement('div');
    container_fluid.classList.add('container-fluid');

    const anchor = document.createElement('a');
    anchor.classList.add('navbar-brand');
    anchor.attributes.href = '#';
    anchor.textContent = 'Restaurant';

    container_fluid.appendChild(anchor);

    const button = document.createElement('button');
    button.classList = 'navbar-toggler';
    button.attributes.type = 'button';

    const span = document.createElement('span');
    span.classList.add('navbar-toggler-icon');
    button.appendChild(span);

    container_fluid.appendChild(button);

    const collapse = document.createElement('div');
    collapse.classList.add(...navbar_collapse);
    collapse.id = 'navbarNavAltMarkup';

    const navbar_nav = document.createElement('div');
    navbar_nav.classList.add('navbar-nav');

    const links = [{ name: 'Home', href: '#', active: true }, { name: 'Menu', href: '#', active: false }, { name: 'Contact', href: '#', active: false }];

    for (let i = 0; i < links.length; i++) {

        const nav_link = document.createElement('a');
        nav_link.classList.add('nav-link');
        if (links[i].active) nav_link.classList.add('active');
        nav_link.attributes.href = links[i].href;
        nav_link.textContent = links[i].name;

        navbar_nav.appendChild(nav_link);
    };

    collapse.appendChild(navbar_nav);
    container_fluid.appendChild(collapse);
    nav.appendChild(container_fluid);

    return nav;
}

export { header };