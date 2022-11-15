function Weather(
  name,
  deg,
  feelsLikeTemp,
  currentTemp,
  humidity,
  pressure,
  cloud,
  shortDesc,
  longDesc,
  windDir,
  windSpeed,
  windGust,
  speed,
  speedMultiplier
) {
  this.name = name;
  this.deg = deg;
  this.feelsLikeTemp = feelsLikeTemp;
  this.currentTemp = currentTemp;
  this.humidity = humidity;
  this.pressure = pressure;
  this.cloud = cloud;
  this.shortDesc = shortDesc;
  this.longDesc = longDesc;
  this.windDir = windDir;
  this.windSpeed = windSpeed;
  this.windGust = windGust;
  this.speed = speed;
  this.speedMultiplier = speedMultiplier;
}

export { Weather };
