import getCityCode from './../getCityCode'
import convertUnit from 'convert-units'
const getAllWeather = (response, city, country) => {
  const { data } = response
  const temperature = Number(
    convertUnit(data.main.temp).from('K').to('C').toFixed(0)
  )
  const state = data.weather[0].main
  const humidity = data.main.humidity
  const speed = data.wind.speed

  const cityProps = getCityCode(city, country)
  const valueProps = { temperature, state, humidity, speed }

  return ({ [cityProps]: valueProps }) // [Buenas Aires-Argentina]: { datos }
}

export default getAllWeather
