const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == 'Springfield' || towns[i].name == 'Soda Springs' || towns[i].name == 'Franklin'){
    
        let card = document.createElement('section');
        let divText = document.createElement('div');
        let divImg = document.createElement('div');
        let name = document.createElement('h3');
        let motto = document.createElement('p')
        let yearFounded = document.createElement('p');
        let currentPopulation = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let image = document.createElement('img');

        divText.className = "textContainer";
        divImg.className = "imgContainer";
        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
        averageRainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        image.setAttribute('src', 'images/' + towns[i].photo);
        image.setAttribute('alt', towns[i].name + ' - ' + i);

        divText.appendChild(name);
        divText.appendChild(motto);
        divText.appendChild(yearFounded);
        divText.appendChild(currentPopulation);
        divText.appendChild(averageRainfall);
        divImg.appendChild(image);
        card.appendChild(divText);
        card.appendChild(divImg);

        document.querySelector('div.cards').appendChild(card);
        }
    } 
  })

