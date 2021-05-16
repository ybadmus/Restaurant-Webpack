export default function home() {
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

  const listOfActions = ['Sunday: 8am - 8pm', 'Monday: 6am - 6pm', 'Tuesday: 6am - 6pm', 'Wednesday: 6am - 6pm', 'Thursday: 6am - 10pm', 'Friday: 6am - 10pm', 'Saturday: 8am - 10pm'];

  const listGroup = document.createElement('div');
  const listGroupClasses = ['list-group', 'my-5'];
  listGroup.classList.add(...listGroupClasses);

  const buttonActive = document.createElement('button');
  const classesActive = ['list-group-item', 'list-group-item-action', 'active'];
  buttonActive.classList.add(...classesActive);
  buttonActive.textContent = 'OPENING HOURS';

  listGroup.appendChild(buttonActive);

  for (let i = 0; i < listOfActions.length; i += 1) {
    const button = document.createElement('button');
    const classes = ['list-group-item', 'list-group-item-action'];
    button.classList.add(...classes);
    button.textContent = listOfActions[i];
    listGroup.appendChild(button);
  }

  app.appendChild(listGroup);

  const location = document.createElement('h6');
  location.textContent = 'Location - Dansoman, Accra';

  app.appendChild(location);

  return app;
}