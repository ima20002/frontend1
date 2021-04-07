const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Nagoya,JPN&appid=46095ba640f25e3b59b8f35b09589b86&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((weaInfo) => {
    console.log(weaInfo);

    document.getElementById('current_temp').textContent = weaInfo.main.temp;
    document.getElementById('descript').textContent = weaInfo.weather[0].description;
    document.getElementById('humidity').textContent = weaInfo.main.humidity;

  });



