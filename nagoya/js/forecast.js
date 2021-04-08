const apiURL2 = 'https://api.openweathermap.org/data/2.5/onecall?lat=35.1815&lon=136.9064&appid=46095ba640f25e3b59b8f35b09589b86&units=imperial';

const d = new Date();
day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(d);

const todayNumber = d.getDay();
console.log(todayNumber);

fetch(apiURL2)
    .then((response) => response.json())
    .then((weatherInfo) => {
    //console.log(weatherInfo);

    console.log(weatherInfo.current.weather[0]);
    document.getElementById('condition').textContent = weatherInfo.current.weather[0].main;
    document.getElementById('current_temp').textContent = weatherInfo.current.temp;
    document.getElementById('humidity').textContent = weatherInfo.current.humidity;
    
    document.getElementById('first_day_temp').textContent = weatherInfo.daily[0].temp.day;
    document.getElementById('second_day_temp').textContent = weatherInfo.daily[1].temp.day;
    document.getElementById('third_day_temp').textContent = weatherInfo.daily[2].temp.day;

    });

 document.getElementById('first_day').innerHTML = `${day[(d.getDay() + 1) % 7]}`
 document.getElementById('second_day').innerHTML = `${day[(d.getDay() + 2) % 7]}`
 document.getElementById('third_day').innerHTML = `${day[(d.getDay() + 3) % 7]}`