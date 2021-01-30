let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let x = new Date()
let date = days[x.getDay()] + ", " + x.getDate() + " " + months[x.getMonth()] + " " + x.getFullYear()
document.getElementById("currentTime").innerHTML = date;