function Weather(name, deg, feelsLikeTemp, currentTemp, maxTemp, minTemp) {
    this.name = name;
    this.deg = deg;
    this.feelsLikeTemp = feelsLikeTemp;
    this.currentTemp = currentTemp;
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
}

export default function getWeather(city) {
    // Units: 
        // For temperature in Fahrenheit use units=imperial
        // For temperature in Celsius use units=metric
    let units = 'metric'; // Celsius by default
    let deg = 'C';
    let chosencity = document.getElementById('city').value;

    // get the unit
    let celsRadio = document.getElementById('cels');
    let fahrRadio = document.getElementById('fahr');
    if (celsRadio.checked) {
        deg = 'C';
        units = 'metric';
    } else if (fahrRadio.checked) {
        deg = 'F';
        units = 'imperial';
    } else {
        deg = 'K';
        units = 'standard'
    }

    const key = '15616b88f662a39612975210bd21e2b8';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${chosencity}&appid=${key}&units=${units}`;
    fetch(url, {
        method: 'GET',
        mode: 'cors'
    })
    .then(function(response) {return response.json();}) // get the response as a JSON object
    .then(function(response) {
        let cityname = response.name;
        let feelsLikeTemp = response.main.feels_like;
        let currentTemp = response.main.temp;
        let maxTemp = response.main.temp_max;
        let minTemp = response.main.temp_min;
        if (units === 'metric') {
            deg = 'C';
        } else if (units === 'imperial') {
            deg = 'F';
        }
        
        const weather = new Weather(cityname, deg, feelsLikeTemp, currentTemp, maxTemp, minTemp);

        // Get the displays
        const panel = document.getElementById('panel');
        const datacityname = document.getElementById('cityname');
        const current = document.getElementById('current');
        const feelsLike = document.getElementById('feels-like');
        const maxTempDisplay = document.getElementById('max');
        const minTempDisplay = document.getElementById('min');

        // Display the values to the screen
        panel.classList.remove('hidden');
        datacityname.innerText = `Weather for ${weather.name}`;
        current.innerText = `${weather.currentTemp}\u00B0 ${deg}`;
        feelsLike.innerText = `${weather.feelsLikeTemp}\u00B0 ${deg}`;
        maxTempDisplay.innerText = `${weather.maxTemp} \u00B0 ${weather.deg}`;
        minTempDisplay.innerText = `${weather.minTemp} \u00B0 ${weather.deg}`;

    }).catch(function(error) {
        console.error(error);
    })
    ;
};


