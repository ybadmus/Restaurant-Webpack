const contact = () => {

    const app = document.createElement('div');
    const classes = ['app', 'container'];
    app.classList.add(...classes);

    const title = document.createElement('h2');
    title.textContent = 'Contact Us';
    title.className = 'mb-5';

    app.appendChild(title);

    const support = document.createElement('p');
    support.textContent = 'For reservations or enquiries';

    app.appendChild(support);

    const email = document.createElement('p');
    email.textContent = 'E-mail: villaescudero@example.com';

    app.appendChild(email);

    const phone = document.createElement('p');
    phone.textContent = 'Phone: +(01)055-098-1101';

    app.appendChild(phone);

    return app;

};

export { contact };