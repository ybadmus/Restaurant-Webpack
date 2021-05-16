const home = () => {

    const app = document.createElement('div');
    const classes = ['app', 'container'];
    app.classList.add(...classes);

    const restaurantName = document.createElement('h2');
    restaurantName.className = 'mb-3';
    restaurantName.textContent = 'Villa Escudero';

    app.appendChild(restaurantName);

    const title = document.createElement('h5');
    title.className = 'mb-3';
    title.textContent = 'Dinner at Villa Escudero means enjoying a meal while seated at the foot of a waterfall!';

    app.appendChild(title);

    const listOfActions = ['OPENING HOURS', 'MAKE A RESERVATION', 'PRIVATE DINING', 'EVENTS', 'LOCATION']

    const list_group = document.createElement('div');
    const list_group_classes = ['list-group', 'mt-4'];
    list_group.classList.add(...list_group_classes);

    for (let i = 0; i < listOfActions.length; i++) {
        const button = document.createElement('button');
        const classes = ['list-group-item', 'list-group-item-action'];
        button.classList.add(...classes);
        button.textContent = listOfActions[i];
        list_group.appendChild(button);
    }

    app.appendChild(list_group);

    return app;

};

export { home };