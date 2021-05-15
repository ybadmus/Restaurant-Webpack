const header = () => {
    const navbar_class = ['navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark']
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

    container_fluid.appendChild(button);

    const span = document.createElement('span');
    span.classList.add('navbar-toggler-icon');

    container_fluid.appendChild(span);

}

export { header };