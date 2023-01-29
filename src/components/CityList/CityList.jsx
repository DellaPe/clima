import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Alert, List } from '@mui/material'
// utils
import getCityCode from './../../utils/getCityCode'
// hooks
import useCityList from './../../hooks/useCityList'
// Nuevo componente
import CityListItem from '../CityListItem/CityListItem'
import { useWeatherDispatchContext, useWeatherStateContext } from '../../WeatherContext'

const renderCityAndCountry =
  (eventOnClickCity) => (cityAndCountry, weather) => {
    const { city, country } = cityAndCountry
    return (
      <CityListItem key={getCityCode(city, country)} eventOnClickCity={eventOnClickCity} weather={weather} {...cityAndCountry} />
    )
  }

const CityList = ({ cities, onClickCity }) => {
  const actions = useWeatherDispatchContext
  const { allWeather } = useWeatherStateContext()
  const { error, setError } = useCityList(cities, allWeather, actions) // Elimino el allWeather que habia aca porque me viene como dato
  return (
    <div>
      {
        // onClose para que salte la x
        error && (
          <Alert
            onClose={() => setError(null)}
            variant='outlined'
            severity='error'
          >
            {error}
          </Alert>
        )
      }
      <List>
        {
          // renderCityAndCountry se transforma en una func que tetorna otra fucn
          cities.map((cityAndCountry) =>
            renderCityAndCountry(onClickCity)(
              cityAndCountry,
              allWeather[
                getCityCode(cityAndCountry.city, cityAndCountry.country)
              ]
            )
          )
        }
      </List>
    </div>
  )
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      coutry: PropTypes.string.isRequired
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired
}

export default React.memo(CityList) // Se puede hacer aca el memo
