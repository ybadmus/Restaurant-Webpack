export default function header() {
  const navbarClass = ['navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark'];
  const navbarCollapse = ['collapse', 'navbar-collapse'];

  const nav = document.createElement('nav');
  nav.classList.add(...navbarClass);

  const containerFluid = document.createElement('div');
  containerFluid.classList.add('container-fluid');

  const anchor = document.createElement('a');
  anchor.classList.add('navbar-brand');
  anchor.attributes.href = '#';
  anchor.textContent = 'Villa Escudero';

  containerFluid.appendChild(anchor);

  const button = document.createElement('button');
  button.classList = 'navbar-toggler';
  button.attributes.type = 'button';

  const span = document.createElement('span');
  span.classList.add('navbar-toggler-icon');
  button.appendChild(span);

  containerFluid.appendChild(button);

  const collapse = document.createElement('div');
  collapse.classList.add(...navbarCollapse);
  collapse.id = 'navbarNavAltMarkup';

  const navbarNav = document.createElement('div');
  navbarNav.classList.add('navbar-nav');

  const links = [{ name: 'Home', href: '#', active: true }, { name: 'Menu', href: '#', active: false }, { name: 'Contact', href: '#', active: false }, { name: 'About', href: '#', active: false }];

  for (let i = 0; i < links.length; i += 1) {
    const navLink = document.createElement('a');
    navLink.classList.add('nav-link');
    navLink.id = links[i].name.toLowerCase();
    if (links[i].active) navLink.classList.add('active');
    navLink.attributes.href = links[i].href;
    navLink.textContent = links[i].name;

    navbarNav.appendChild(navLink);
  }

  collapse.appendChild(navbarNav);
  containerFluid.appendChild(collapse);
  nav.appendChild(containerFluid);

  return nav;
}