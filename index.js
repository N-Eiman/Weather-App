function displayTemp(response) {
  /* //Icon update
  let icon = response.data.condition.icon_url;
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = icon;*/

  //update humidity
  let humidity = response.data.temperature.humidity;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = humidity;
  //update wind
  let wind = response.data.wind.speed;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = wind;
  //udate temperature
  let temperature = Math.round(response.data.temperature.current);
  let tempElement = document.querySelector("#temp");
  tempElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let apiKey = "3cb2babo00784f1f3eafe7ebatd350d2";
  cityElement.innerHTML = searchInputElement.value;
  let city = searchInputElement.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
