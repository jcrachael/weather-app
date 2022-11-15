import { Weather } from "./Weather";
function userGeo() {
  const MyLocalWeather = new Weather();
  const location = {};

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      let msg = "Geolocation not supported";
      return msg;
    }
  }

  function showPosition(position) {
    location.lat = position.coords.latitude.toFixed(4);
    location.long = position.coords.longitude.toFixed(4);

    const key = "15616b88f662a39612975210bd21e2b8";
    const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${location.lat}&lon=${location.long}&appid=${key}`;

    fetch(url, {
      method: "GET",
      mode: "cors"
    })
      .then(function (response) {
        return response.json();
      }) // get the response as a JSON object
      .then(function (response) {
        if (response.cod === "404") {
          let errorMsg = response.message;
          console.error(errorMsg);
          return errorMsg;
        }
        if (!response.cod) {
          let deg = "C";
          let speed = "km/h";
          let speedMultiplier = 3.6;
          let cityname = response[0]["name"];

          // make a new Weather object
          MyLocalWeather.name = cityname;
          MyLocalWeather.state = response[0]["state"];
          MyLocalWeather.country = response[0]["country"];
          MyLocalWeather.deg = deg;
          MyLocalWeather.speed = speed;
          MyLocalWeather.speedMultiplier = speedMultiplier;
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${MyLocalWeather.name}&appid=${key}&units=metric`;
          fetch(url, {
            method: "GET",
            mode: "cors"
          })
            .then(function (response) {
              return response.json();
            }) // get the response as a JSON object
            .then(function (response) {
              if (response.cod === "404") {
                let errorMsg = response.message;
                console.error(errorMsg);
                return errorMsg;
              }
              if (response.cod === 200) {
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
                // Set the properties of MyWeather object

                MyLocalWeather.feelsLikeTemp = feelsLikeTemp;
                MyLocalWeather.currentTemp = currentTemp;
                MyLocalWeather.humidity = humidity;
                MyLocalWeather.pressure = pressureRate;
                MyLocalWeather.cloud = cloudCoverage;
                MyLocalWeather.shortDesc = shortDescription;
                MyLocalWeather.longDesc = longDescription;
                MyLocalWeather.windDir = windDirCardinal;
                MyLocalWeather.windSpeed = windSpeed;
                MyLocalWeather.windGust = windGust;
                MyLocalWeather.speed = speed;
                MyLocalWeather.speedMultiplier = speedMultiplier;

                updateLocalWeather();
              }
            })
            .catch(function (error) {
              console.error(error);
            });
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function build() {
    const aside = document.querySelector("aside");
    const container = document.createElement("div");
    container.setAttribute("id", "geo-container");
    aside.appendChild(container);
    const header = document.createElement("h4");
    header.innerText = "Current location";
    container.appendChild(header);
    getLocation();
  }

  function updateLocalWeather() {
    const container = document.getElementById("geo-container");
    const location = document.createElement("p");
    location.innerText = MyLocalWeather.name + ", " + MyLocalWeather.country;
    container.appendChild(location);
    const currentTemp = document.createElement("p");
    currentTemp.innerText = `${MyLocalWeather.currentTemp}\u00B0 ${MyLocalWeather.deg}`;
    container.appendChild(currentTemp);
    const desc = document.createElement("p");
    let myDesc =
      MyLocalWeather.longDesc.charAt(0).toUpperCase() +
      MyLocalWeather.longDesc.slice(1);
    desc.innerText = myDesc;
    container.appendChild(desc);
  }

  return {
    getLocation: getLocation,
    build: build,

    updateLocalWeather
  };
}

export { userGeo };
