function showDetails(response) {
  console.log(response);
  document.querySelector(".cityOfInterest").innerHTML = response.data.name;
  document.querySelector(".temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(".highTemp").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector(".lowTemp").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector(".tempDescription").innerHTML =
    response.data.weather[0].description;
  document.querySelector(".feelValue").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector(".humValue").innerHTML = Math.round(
    response.data.main.humidity
  );
}

function searchedCity(event) {
  event.preventDefault();

  let city = document.querySelector(".cityInput").value;
  let apiKey = "d1bfa8b608cc07b251c544946b2756ed";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showDetails);
}

let submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", searchedCity);

let now = new Date();

let year = document.querySelector(".year");
year.innerHTML = now.getFullYear();

let date = document.querySelector(".date");
date.innerHTML = now.getDate();

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = document.querySelector(".day");
day.innerHTML = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = document.querySelector(".month");
month.innerHTML = months[now.getMonth()];
let timeHr = document.querySelector(".hr");
timeHr.innerHTML = now.getHours();

let timeMin = document.querySelector(".min");
timeMin.innerHTML = now.getMinutes();
