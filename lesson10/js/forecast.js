const d = new Date();
console.log(d);

const todayDayNumber = d.getDay();
console.log(todayDayNumber);

const weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

let theDay = document.createElement("table");

let tableR1 = document.createElement("tr");
let tableR2 = document.createElement("tr");
let tableR3 = document.createElement("tr");


const apiURL2 = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=46095ba640f25e3b59b8f35b09589b86&units=imperial';

fetch(apiURL2)
    .then((response) => response.json())
    .then((weatherInfo) => {
    //console.log(weatherInfo);

    let forecastDayNumber = todayDayNumber;
    //console.log(forecastDayNumber);

        for (i = 0; i < weatherInfo.list.length; i++) {
            var time = weatherInfo.list[i].dt_txt;

            if (time.includes('18:00:00')){
            
                forecastDayNumber += 1;
                if (forecastDayNumber === 7){
                    forecastDayNumber = 0;
                }
                
                
                let theDayName = document.createElement("th");
                theDayName.textContent = weekday[forecastDayNumber];
                tableR1.appendChild(theDayName);

                let theTemp = document.createElement("th");
                theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";
                tableR3.appendChild(theTemp);

               

                let th = document.createElement("th");
                let iconcode = weatherInfo.list[i].weather[0].icon;
                let iconPath = "https://openweathermap.org/img/w/" + iconcode + ".png";
                let theIcon = document.createElement("img");
                theIcon.src = iconPath;
                th.appendChild(theIcon);
                tableR2.appendChild(th);
                
                
                theDay.appendChild(tableR1);
                theDay.appendChild(tableR2);
                theDay.appendChild(tableR3);

                document.getElementById('fivedays').appendChild(theDay);

            }
        }
    });