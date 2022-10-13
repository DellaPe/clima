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

const CityPage = () => {

  

  const temperature = 23
  const state = "Clouds"
  const humidity = 20
  const wind = 12
  
  
  const {city, country, data, forecastItemList} = useCityPage()

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
              <WeatherDetails humidity={humidity} wind={wind} />
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


