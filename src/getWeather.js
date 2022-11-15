import { Weather } from "./Weather";

export default function getWeather() {
  // Units:
  // For temperature in Fahrenheit use units=imperial
  // For temperature in Celsius use units=metric
  let units = "metric"; // Celsius by default
  let deg = "C";
  let speed = "m/s";
  let chosencity = document.getElementById("city").value;

  // get the unit
  let celsRadio = document.getElementById("cels");
  let fahrRadio = document.getElementById("fahr");
  if (celsRadio.checked) {
    deg = "C";
    speed = "m/s";
    units = "metric";
  } else if (fahrRadio.checked) {
    deg = "F";
    speed = "m.p.h";
    units = "imperial";
  } else {
    deg = "K";
    units = "standard";
  }

  const key = "15616b88f662a39612975210bd21e2b8";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${chosencity}&appid=${key}&units=${units}`;
  fetch(url, {
    method: "GET",
    mode: "cors"
  })
    .then(function (response) {
      return response.json();
    }) // get the response as a JSON object
    .then(function (response) {
      let cityname = response.name;
      let feelsLikeTemp = response.main.feels_like;
      let currentTemp = response.main.temp;
      let humidity = response.main.humidity;
      let pressure = response.main.pressure;
      let cloudCoverage = response.clouds.all;
      let shortDescription = response.weather[0]["main"];
      let longDescription = response.weather[0]["description"];
      let windDir = response.wind.deg;
      let windSpeed = response.wind.speed;
      let windGust = response.wind.gust;
      let pressureRate;
      let windDirCardinal;
      let speedMultiplier;
      // get units
      if (units === "metric") {
        deg = "C";
        speed = "km/h";
        speedMultiplier = 3.6;
      } else if (units === "imperial") {
        deg = "F";
        speed = "m.p.h";
        speedMultiplier = 1;
      }
      // get pressure
      if (pressure > 1020) {
        pressureRate = "High";
      } else if (pressure > 989 && pressure < 1020) {
        pressureRate = "Medium";
      } else {
        pressureRate = "Low";
      }
      // get wind direction
      if (windDir > 348 || windDir <= 11) {
        windDirCardinal = "N";
      } else if (windDir >= 11 && windDir <= 33) {
        windDirCardinal = "NNE";
      } else if (windDir > 34 && windDir < 56) {
        windDirCardinal = "NE";
      } else if (windDir >= 56 && windDir < 79) {
        windDirCardinal = "ENE";
      } else if (windDir >= 79 && windDir < 101) {
        windDirCardinal = "E";
      } else if (windDir >= 101 && windDir <= 123) {
        windDirCardinal = "ESE";
      } else if (windDir >= 124 && windDir < 146) {
        windDirCardinal = "SE";
      } else if (windDir >= 146 && windDir <= 168) {
        windDirCardinal = "SSE";
      } else if (windDir >= 169 && windDir < 191) {
        windDirCardinal = "S";
      } else if (windDir >= 191 && windDir <= 213) {
        windDir = "SSW";
      } else if (windDir > 213 && windDir < 236) {
        windDirCardinal = "SW";
      } else if (windDir >= 236 && windDir <= 258) {
        windDirCardinal = "WSW";
      } else if (windDir >= 259 && windDir <= 280) {
        windDirCardinal = "W";
      } else if (windDir >= 281 && windDir <= 303) {
        windDirCardinal = "WNW";
      } else if (windDir >= 304 && windDir <= 325) {
        windDirCardinal = "NW";
      } else if (windDir >= 326 && windDir <= 348) {
        windDirCardinal = "NNW";
      }
      // make a new Weather object
      const MyWeather = new Weather(
        cityname,
        deg,
        feelsLikeTemp,
        currentTemp,
        humidity,
        pressureRate,
        cloudCoverage,
        shortDescription,
        longDescription,
        windDirCardinal,
        windSpeed,
        windGust,
        speed,
        speedMultiplier
      );
      return MyWeather;
    })
    .catch(function (error) {
      console.error(error);
    });
}
