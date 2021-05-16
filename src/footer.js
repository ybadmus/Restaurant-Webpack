export default function footer() {
  const faCopyright = ['fa', 'fa-copyright', 'p-1'];
  const copyrightYear = ` ${new Date().getFullYear()}`;

  const footer = document.createElement('footer');
  footer.className = 'footer mt-4';

  const ul = document.createElement('ul');

  const footerList = [copyrightYear, 'Milkyway Inc'];

  for (let i = 0; i < footerList.length; i += 1) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = footerList[i];

    if (i === 0) {
      const itag = document.createElement('i');
      itag.classList.add(...faCopyright);
      li.appendChild(itag);
    }

    li.appendChild(p);
    ul.appendChild(li);
  }

  footer.appendChild(ul);

  return footer;
}