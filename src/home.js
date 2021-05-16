const home = () => {

    const app = document.createElement('div');
    const classes = ['app', 'container'];
    app.classList.add(...classes);

    const restaurantName = document.createElement('h2');
    restaurantName.className = 'restaurant-name';
    restaurantName.textContent = 'RESTAURANT';

    app.appendChild(restaurantName);

    const title = document.createElement('h5');
    title.className = 'restaurant-title';
    title.textContent = 'Title Of Restaurant';

    app.appendChild(title);

    const listOfActions = ['OPENING HOURS', 'MAKE A RESERVATION', 'PRIVATE DINING', 'EVENTS', 'LOCATION']

    const ul = document.createElement('ul');
    ul.className = 'actions-list';

    for (let i = 0; i < listOfActions.length; i++) {
        const li = document.createElement('li');
        li.className = 'action';
        li.textContent = listOfActions[i];
        ul.appendChild(li);
    }

    app.appendChild(ul);

    return app;

};

export { home };