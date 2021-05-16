import ghana_wakkye from './Ghana_Waakye.jpg';
import ghana_jollof from './ghana_jollof.jpg';
import banku_okro from './images_Banku_And_Okro_Soup.jpg';
import ghana_ampesi from './img_3021ghanas-shito.jpg';

const menu = () => {
    const app = document.createElement('div');
    const classes = ['app', 'container'];
    app.classList.add(...classes);

    const title = document.createElement('h1');
    title.textContent = 'Menu';
    title.className = 'mb-2';

    app.appendChild(title);

    const menus = [{ name: 'Banku & Okro Stew', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s', image: banku_okro }, { name: 'Garden egg stew with boiled yam and plantain', description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', image: ghana_ampesi }, { name: 'Ghana Jollof', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable', image: ghana_jollof }, { name: 'Waakye', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: ghana_wakkye }]

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
        img_wrapper.className = 'col-12 col-sm-3';

        const card_img = document.createElement('img');
        card_img.src = menus[i].image;
        card_img.alt = 'Card image cap';

        img_wrapper.appendChild(card_img);

        const card_body = document.createElement('div');
        card_body.className = 'card-body col-12 col-sm-9';

        const card_title = document.createElement('h4');
        card_title.className = 'card-title';
        card_title.textContent = menus[i].name;

        const card_text = document.createElement('p4');
        card_text.className = 'card-text';
        card_text.textContent = menus[i].description;

        const btn_div = document.createElement('div');
        const order_btn = document.createElement('button');
        order_btn.className = 'btn btn-success btn-md mt-2';
        order_btn.textContent = 'Order Now';

        btn_div.appendChild(order_btn);

        card_body.appendChild(card_title);
        card_body.appendChild(card_text);
        card_body.appendChild(btn_div);

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