import ghanaWaakye from './Ghana_Waakye.jpg';
import ghanaJollof from './ghana_jollof.jpg';
import bankuOkro from './images_Banku_And_Okro_Soup.jpg';
import ghanaAmpesi from './img_3021ghanas-shito.jpg';

export default function menu() {
  const app = document.createElement('div');
  const classes = ['app', 'container'];
  app.classList.add(...classes);

  const title = document.createElement('h1');
  title.textContent = 'Menu';
  title.className = 'mb-2';

  app.appendChild(title);

  const menus = [{ name: 'Banku & Okro Stew', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s', image: bankuOkro }, { name: 'Garden egg stew with boiled yam and plantain', description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', image: ghanaAmpesi }, { name: 'Ghana Jollof', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable', image: ghanaJollof }, { name: 'Waakye', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: ghanaWaakye }];

  for (let i = 0; i < menus.length; i += 1) {
    const row = document.createElement('div');
    row.className = 'row';

    const col12 = document.createElement('div');
    const classesCol12 = ['col-12', 'mt-3', 'mx-2'];
    col12.classList.add(...classesCol12);

    const card = document.createElement('div');
    card.className = 'card';

    const cardHorizontal = document.createElement('div');
    cardHorizontal.className = 'card-horizontal';

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'col-12 col-sm-3';

    const cardImg = document.createElement('img');
    cardImg.src = menus[i].image;
    cardImg.alt = 'Card image cap';

    imgWrapper.appendChild(cardImg);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body col-12 col-sm-9';

    const cardTitle = document.createElement('h4');
    cardTitle.className = 'card-title';
    cardTitle.textContent = menus[i].name;

    const cardText = document.createElement('p4');
    cardText.className = 'card-text';
    cardText.textContent = menus[i].description;

    const btnDiv = document.createElement('div');
    const orderBtn = document.createElement('button');
    orderBtn.className = 'btn btn-success btn-md mt-2';
    orderBtn.textContent = 'Order Now';

    btnDiv.appendChild(orderBtn);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(btnDiv);

    cardHorizontal.appendChild(imgWrapper);
    cardHorizontal.appendChild(cardBody);

    card.appendChild(cardHorizontal);
    col12.appendChild(card);
    row.appendChild(col12);
    app.appendChild(row);
  }

  return app;
}