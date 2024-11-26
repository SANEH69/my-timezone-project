let name = prompt("What is your name?");
let localTimeZone = moment.tz.guess();
let username = document.querySelector("#name");
username.innerHTML = `Hello, ${name}.`;

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