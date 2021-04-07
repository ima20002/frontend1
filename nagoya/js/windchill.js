const tempNumber = parseFloat(document.getElementById("current_temp").textContent);
console.log(tempNumber);

const speedNumber = parseFloat(document.getElementById("wind_speed").textContent);
console.log(speedNumber);

let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
console.log(windchill);
windchill = Math.round(windchill);
console.log(windchill);

if(tempNumber <= 50 && speedNumber > 3){
    document.getElementById("chill").textContent = windchill;
}
else {
    document.getElementById("chill").textContent = "N/A";
}