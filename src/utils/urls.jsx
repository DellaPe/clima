import { apiKey } from '../apiKey'

export const getWeatherUrl = (city, country) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
}

export const getForecastUrl = (city, country) => {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}`
}
