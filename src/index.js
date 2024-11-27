let name = prompt("Hello, what is your name?");
let userElement = document.querySelector("#name");
userElement.innerHTML = `Hello, ${name}.`;

function updateTime() {
    // durban
    let durbanElement = document.querySelector("#durban");
    if (durbanElement) {
      let durbanDate = document.querySelector("#durban .date");
      let durbanTime = document.querySelector("#durban .time");
      let durbanTimeZone = moment().tz("Africa/Johannesburg");
  
      durbanTime.innerHTML = durbanTimeZone.format(
        "h:mm:ss [<small>]A[</small>]"
      );
      durbanDate.innerHTML = durbanTimeZone.format("MMMM Do, YYYY");
    }
  
    // detroit
    let detroitElement = document.querySelector("#detroit");
    if (detroitElement) {
      let detroitDate = document.querySelector("#detroit .date");
      let detroitTime = document.querySelector("#detroit .time");
      let detroitTimeZone = moment().tz("America/Detroit");
  
      detroitDate.innerHTML = detroitTimeZone.format("MMMM Do,YYYY");
      detroitTime.innerHTML = detroitTimeZone.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  }

  function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#location");
    citiesElement.innerHTML = `
    <div class="date-city">
      <div>
        <div class="city">${cityName}</div>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    `;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  
  let citiesSelectElement = document.querySelector("#cities");
  citiesSelectElement.addEventListener("change", updateCity);