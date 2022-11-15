import { Weather } from "./Weather";

function weatherDisplay() {
  const MyWeather = new Weather();

  function build() {
    const main = document.querySelector("main");
    const container = document.createElement("section");
    container.setAttribute("id", "panel");
    main.appendChild(container);
    const header = document.createElement("h2");
    header.setAttribute("id", "cityname");
    container.appendChild(header);
    const row1 = document.createElement("div");
    row1.classList.add("row");
    container.appendChild(row1);
    const tempLabel = document.createElement("span");
    tempLabel.classList.add("label");
    tempLabel.innerText = "Current temperature:";
    row1.appendChild(tempLabel);
    const tempData = document.createElement("span");
    tempData.classList.add("data");
    tempData.setAttribute("id", "current");
    row1.appendChild(tempData);
    const row2 = document.createElement("div");
    row2.classList.add("row");
    container.appendChild(row2);
    const feelslikeLabel = document.createElement("span");
    feelslikeLabel.classList.add("label");
    feelslikeLabel.innerText = "Feels like:";
    row2.appendChild(feelslikeLabel);
    const feelsLikeData = document.createElement("span");
    feelsLikeData.classList.add("data");
    feelsLikeData.setAttribute("id", "feels-like");
    row2.appendChild(feelsLikeData);
    const row3 = document.createElement("div");
    row3.classList.add("row");
    container.appendChild(row3);
    const humidityLabel = document.createElement("span");
    humidityLabel.classList.add("label");
    humidityLabel.innerText = "Humidity:";
    row3.appendChild(humidityLabel);
    const humidityData = document.createElement("span");
    humidityData.classList.add("data");
    humidityData.setAttribute("id", "humidity");
    row3.appendChild(humidityData);
    const row4 = document.createElement("div");
    row4.classList.add("row");
    container.appendChild(row4);
    const pressureLabel = document.createElement("span");
    pressureLabel.classList.add("label");
    pressureLabel.innerText = "Pressure:";
    row4.appendChild(pressureLabel);
    const pressureData = document.createElement("span");
    pressureData.classList.add("data");
    pressureData.setAttribute("id", "pressure");
    row4.appendChild(pressureData);
    const row5 = document.createElement("div");
    row5.classList.add("row");
    container.appendChild(row5);
    const cloudLabel = document.createElement("span");
    cloudLabel.classList.add("label");
    cloudLabel.innerText = "Cloud coverage:";
    row5.appendChild(cloudLabel);
    const cloudData = document.createElement("span");
    cloudData.classList.add("data");
    cloudData.setAttribute("id", "clouds");
    row5.appendChild(cloudData);
    const row6 = document.createElement("div");
    row6.classList.add("row");
    container.appendChild(row6);
    const descLabel = document.createElement("span");
    descLabel.classList.add("label");
    descLabel.innerText = "Description:";
    row6.appendChild(descLabel);
    const shortDescData = document.createElement("span");
    shortDescData.classList.add("data");
    shortDescData.setAttribute("id", "shortDescription");
    row6.appendChild(shortDescData);
    const longDescData = document.createElement("span");
    longDescData.classList.add("data");
    longDescData.setAttribute("id", "longDescription");
    row6.appendChild(longDescData);
    const row7 = document.createElement("div");
    row7.classList.add("row");
    container.appendChild(row7);
    const windLabel = document.createElement("span");
    windLabel.classList.add("label");
    windLabel.innerText = "Wind:";
    row7.appendChild(windLabel);
    const windSpeedData = document.createElement("span");
    windSpeedData.classList.add("data");
    windSpeedData.setAttribute("id", "windSpeed");
    row7.appendChild(windSpeedData);
    const windDirData = document.createElement("span");
    windDirData.classList.add("data");
    windDirData.setAttribute("id", "windDir");
    row7.appendChild(windDirData);
    const windGustData = document.createElement("span");
    windGustData.classList.add("data");
    windGustData.setAttribute("id", "windGust");
    row7.appendChild(windGustData);
  }

  function getWeather() {
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
        // Set the properties of MyWeather object
        MyWeather.name = cityname;
        MyWeather.deg = deg;
        MyWeather.feelsLikeTemp = feelsLikeTemp;
        MyWeather.currentTemp = currentTemp;
        MyWeather.humidity = humidity;
        MyWeather.pressure = pressureRate;
        MyWeather.cloud = cloudCoverage;
        MyWeather.shortDesc = shortDescription;
        MyWeather.longDesc = longDescription;
        MyWeather.windDir = windDirCardinal;
        MyWeather.windSpeed = windSpeed;
        MyWeather.windGust = windGust;
        MyWeather.speed = speed;
        MyWeather.speedMultiplier = speedMultiplier;
        updateDisplay();
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function clearDisplay() {
    const main = document.querySelector("main");
    const panel = document.querySelector("section");
    main.removeChild(panel);
  }

  function updateDisplay() {
    // Get the displays
    const panel = document.getElementById("panel");
    const datacityname = document.getElementById("cityname");
    const current = document.getElementById("current");
    const feelsLike = document.getElementById("feels-like");
    const humidityEl = document.getElementById("humidity");
    const pressureEl = document.getElementById("pressure");
    const cloudCoverageEl = document.getElementById("clouds");
    const shortDescEl = document.getElementById("shortDescription");
    const longDescEl = document.getElementById("longDescription");
    const windDirEl = document.getElementById("windDir");
    const windSpeedEl = document.getElementById("windSpeed");
    const windGustEl = document.getElementById("windGust");

    // Display the values to the screen
    panel.classList.remove("hidden");
    datacityname.innerText = `Weather for ${MyWeather.name}`;
    current.innerText = `${MyWeather.currentTemp}\u00B0 ${MyWeather.deg}`;
    feelsLike.innerText = `${MyWeather.feelsLikeTemp}\u00B0 ${MyWeather.deg}`;
    humidityEl.innerText = `${MyWeather.humidity}%`;
    pressureEl.innerText = `${MyWeather.pressure}`;
    cloudCoverageEl.innerText = `${MyWeather.cloud}%`;
    shortDescEl.innerText = `${MyWeather.shortDesc}: `;
    longDescEl.innerText = `${MyWeather.longDesc}`;
    windDirEl.innerText = `${MyWeather.windDir}; `;
    windSpeedEl.innerText = `${Math.round(
      MyWeather.windSpeed * MyWeather.speedMultiplier
    )} ${MyWeather.speed} `;
    if (MyWeather.windGust != null) {
      windGustEl.innerText = `gusts of up to ${Math.round(
        MyWeather.windGust * MyWeather.speedMultiplier
      )} ${MyWeather.speed}`;
    }
  }

  return {
    build: build,
    getWeather: getWeather,
    updateDisplay: updateDisplay,
    clearDisplay: clearDisplay,
    MyWeather: MyWeather
  };
}

export { weatherDisplay };
