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

    const listOfActions = ['Sunday: 8am - 8pm', 'Monday: 6am - 6pm', 'Tuesday: 6am - 6pm', 'Wednesday: 6am - 6pm', 'Thursday: 6am - 10pm', 'Friday: 6am - 10pm', 'Saturday: 8am - 10pm']

    const list_group = document.createElement('div');
    const list_group_classes = ['list-group', 'my-5'];
    list_group.classList.add(...list_group_classes);

    const button_active = document.createElement('button');
    const classes_active = ['list-group-item', 'list-group-item-action', 'active'];
    button_active.classList.add(...classes_active);
    button_active.textContent = 'OPENING HOURS';

    list_group.appendChild(button_active);

    for (let i = 0; i < listOfActions.length; i++) {
        const button = document.createElement('button');
        const classes = ['list-group-item', 'list-group-item-action'];
        button.classList.add(...classes);
        button.textContent = listOfActions[i];
        list_group.appendChild(button);
    }

    app.appendChild(list_group);

    const location = document.createElement('h6');
    location.textContent = 'Location - Dansoman, Accra';

    app.appendChild(location);

    return app;

};

export { home };