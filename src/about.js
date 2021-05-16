  const about = () => {

      const app = document.createElement('div');
      const classes = ['app', 'container'];
      app.classList.add(...classes);

      const title = document.createElement('h1');
      title.textContent = 'About';

      app.appendChild(title);

      const about = document.createElement('div');
      about.className = 'about';

      const aboutText = [
          'We provide our customers with luxurious dining and an overall unforgettable experience',
          'Steakhouse is currently situated in over 15 cities worldwide',
          'Book a reservation today',
      ];

      for (let i = 0; i < aboutText.length; i++) {
          const paragraph = document.createElement('p');
          paragraph.textContent = aboutText[i];
          about.appendChild(paragraph);
      };

      app.appendChild(about);

      return app;

  };

  export { about };