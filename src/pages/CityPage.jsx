import React from 'react'
import { Grid, LinearProgress } from '@mui/material'

import 'moment/locale/es' //Para tener los formatos en español

import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import AppFrame from '../components/AppFrame'
import { Paper } from '@mui/material'

import useCityPage from '../hooks/useCityPage'
import useCityList from '../hooks/useCityList'

import getCityCode from "./../utils/getCityCode"

const CityPage = ({dataAll, actions}) => {
  const { allWeather, allData, allForecastItemList } = dataAll
  const { onSetAllWeather, onSetData, onSetForecastItemList } = actions
  const {city, country} = useCityPage(onSetData, onSetForecastItemList, allData, allForecastItemList)
  //Vemos si cambiar el valor de city y de country
  const cities = React.useMemo( () => ([{city, country}]),[city, country]) //Recordar que es como tener un return
  useCityList(cities, allWeather, onSetAllWeather)
  
  const cityCode = getCityCode(city, country)
  
  const weather = allWeather[cityCode]
  const data = allData[cityCode]
  const forecastItemList = allForecastItemList[cityCode]




  const temperature = weather && weather.temperature
  const state = weather && weather.state
  const humidity = weather && weather.humidity
  const speed = weather && weather.speed
  return (
    <AppFrame>
      <Paper>
        <Grid container
          justifyContent="center"
          direction="column">
          <Grid container item xs={12}
            justifyContent="center"
            alignItems="flex-end">
            <CityInfo city={city} country={country} />
          </Grid>
          <Grid container xs={12}
            justifyContent="space-evenly"
            alignItems="center">
            <Grid item >
              <Weather temperature={temperature} state={state} />
            </Grid>
            <Grid item>
              {humidity && speed && <WeatherDetails humidity={humidity} wind={speed} />}
            </Grid>
          </Grid>
          <Grid>
            {
              !data && !forecastItemList && <LinearProgress />
            }
          </Grid>
          <Grid item xs={12}>
            {data && <ForecastChart data={data} xs={12} />}
          </Grid>
          <Grid item xs={12}>
            {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
          </Grid>
        </Grid>
      </Paper>
    </AppFrame>
  )
}

export default CityPage


