function showDate(event) {
    if (event.target.value.length > 0) {
        let currentDate = moment().tz(event.target.value).format("dddd, MMMM Do, YYYY h:mm A");
        alert(`It is ${currentDate} in ${event.target.value}`);
    }
}

let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", showDate);