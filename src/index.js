function currentDate(event) {
    let parisDate = moment().tz("Europe/Paris").format("dddd, MMMM Do, YYYY h:m A");
    if (event.target.value = "paris") {
        alert(`It is ${parisDate} in Europe/Paris`);
    }
    let tokyoDate = moment().tz("Asia/Tokyo").format("dddd, MMMM Do, YYYY h:m A");
    if (event.target.value = "tokyo") {
        alert(`It is ${tokyoDate} in Asia/Tokyo`);
    }
    let sydneyDate = moment().tz("Australia/Sydney").format("dddd, MMMM Do, YYYY h:m A");
    if (event.target.value = "sydney") {
        alert(`It is ${sydneyDate} in Australia/Sydney`);
    }
}

let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", currentDate);