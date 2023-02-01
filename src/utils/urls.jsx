const apiKey = 'b1907a1349b8dc3a835d896d914dc02c'

export const getWeatherUrl = (city, country) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
}

export const getForecastUrl = (city, country) => {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}`
}
