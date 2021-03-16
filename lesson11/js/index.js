const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {  

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven'){
    
        let card = document.createElement('section');

        let name = document.createElement('h3');
        let motto = document.createElement('h4')
        let year = document.createElement('p');
        let curPopu = document.createElement('p');
        let rain = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        year.textContent = 'Year Founded: ' + towns[i].yearFounded;
        curPopu.textContent = 'Population: ' + towns[i].currentPopulation;
        rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        image.setAttribute('src', 'images/'+ towns[i].photo);
        image.setAttribute('alt', towns[i].name + ' - ' + i);

        card.appendChild(name);
        card.appendChild(motto);
        card.appendChild(year);
        card.appendChild(curPopu);
        card.appendChild(rain);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
        }
    } 
  });

