const requestURL = 'https://raw.githubusercontent.com/ima20002/ima20002.github.io/master/nagoya/business.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {  

    const business = jsonObject['business'];
    
    for (let i = 0; i < business.length; i++ ) {

      let card = document.createElement('section');

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
    }
  });

