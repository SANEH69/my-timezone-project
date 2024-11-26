let name = prompt("What is your name?");
let username = document.querySelector("#name");
username.innerHTML = `Hello, ${name}.`;

function showCurrentTime() {
    let durbanElement = document.querySelector("#durban");
    if (durbanElement) {
     let durbanDate = document.querySelector(".date");
     let durbanTime = document.querySelector(".time");
     let durbanCurrentTime = moment().tz("Africa/Johannesburg");

     durbanTime.innerHTML = durbanCurrentTime.format("hh:mm:ss [<small>]A[</small>]");
     durbanDate.innerHTML = durbanCurrentTime.format("dddd, MMMM Do, YYYY");
    }
}
showCurrentTime();
setInterval(showCurrentTime, 1000);

function showDate(event) {
    if (event.target.value.length > 0) {
        let currentDate = moment().tz(event.target.value).format("dddd, MMMM Do, YYYY");
        let currentTime = moment(). tz(event.target.value).format("hh:mm:ss A");
        let cityElement = document.querySelector(".city");
        let dateElement = document.querySelector("#date");
        let timeElement = document.querySelector("#time");
        cityElement.innerHTML = `${event.target.value}`;
        dateElement.innerHTML = `${currentDate}`;
        timeElement.innerHTML = `${currentTime}`;
    }
}

let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", showDate);
