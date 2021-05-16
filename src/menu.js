const menu = () => {
    const app = document.createElement('div');
    const classes = ['app', 'container'];
    app.classList.add(...classes);

    const menus = [{ name: 'Banku & Okro Stew', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s', image: 'http://via.placeholder.com/300x180' }]

    for (let i = 0; i < menus.length; i++) {
        const row = document.createElement('div');
        row.className = 'row';

        const col12 = document.createElement('div');
        const classes_col12 = ['col-12', 'mt-3', 'mx-2'];
        col12.classList.add(...classes_col12);

        const card = document.createElement('div');
        card.className = 'card';

        const card_horizontal = document.createElement('div');
        card_horizontal.className = 'card-horizontal';

        const img_wrapper = document.createElement('div');
        img_wrapper.className = 'img-square-wrapper';

        const card_img = document.createElement('img');
        card_img.src = menus[i].image;
        card_img.alt = 'Card image cap';

        img_wrapper.appendChild(card_img);

        const card_body = document.createElement('div');
        card_body.className = 'card-body';

        const card_title = document.createElement('h4');
        card_title.className = 'card-title';
        card_title.textContent = menus[i].name;

        const card_text = document.createElement('p4');
        card_text.className = 'card-text';
        card_text.textContent = menus[i].description;

        card_body.appendChild(card_title);
        card_body.appendChild(card_text);

        card_horizontal.appendChild(img_wrapper);
        card_horizontal.appendChild(card_body);

        card.appendChild(card_horizontal);

        col12.appendChild(card);

        row.appendChild(col12);

        app.appendChild(row);
    }

    return app;

};

export { menu };