const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {  

    const business = jsonObject['business'];
    
      let card = document.createElement('container');

      let name = document.createElement('h3');
      let contact = document.createElement('p');
      let website = document.createElement('p');
      let image = document.createElement('img');

      name.textContent = business[i].name;
      contact.textContent = 'Contact: ' + business[i].contact;
      website.textContent = 'Website: ' + business[i].website;
      image.setAttribute('src', 'images/'+ business[i].photo);
      image.setAttribute('alt', business[i].name + ' - ' + i);

      card.appendChild(name);
      card.appendChild(contact);
      card.appendChild(website);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card); 
  });

