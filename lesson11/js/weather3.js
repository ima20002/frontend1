const apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=83287,us&appid=46095ba640f25e3b59b8f35b09589b86&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((weaInfo) => {
    console.log(weaInfo);

    document.getElementById('descript').textContent = weaInfo.weather[0].description;
    document.getElementById('current_temp').textContent = weaInfo.main.temp;
    document.getElementById('max_temp').textContent = weaInfo.main.temp_max;
    document.getElementById('humidity').textContent = weaInfo.main.humidity;
    document.getElementById('wind_speed').textContent = weaInfo.wind.speed;

    //const iconcode = weaInfo.weather[0].icon;
    //console.log(iconcode);
    //const icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
    //console.log(icon_path);

    //document.getElementById('weather_icon').src = icon_path;

  });



