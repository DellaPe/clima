import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import ForCast from './../components/Forcast'

const CityPage = () => {
  const city = "Buenas Aires"
  const country = "Argentina"
  const temperature = 23
  const state = "sun"
  const humidity = 20
  const wind = 12

  const data = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
  ]

  const forecastItemList = [
    {weekDay:"Lunes", hour: 12, state:"sun", temperature:20},
    {weekDay:"Martes", hour: 13, state:"cloud", temperature:10},
    {weekDay:"Miercoles", hour: 14, state:"sun", temperature:15},
    {weekDay:"Jueves", hour: 15, state:"rain", temperature:13},
    {weekDay:"Viernes", hour: 12, state:"gusts", temperature:20},
    {weekDay:"Sabado", hour: 13, state:"hot", temperature:10},
    {weekDay:"Domingo", hour: 14, state:"cold", temperature:15},
]

  return (
    <Grid container
      justifyContent="center"
      direction="column">
      <Grid item xs={12}>
        <CityInfo city={city} country={country} />
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={8}>
          <Weather temperature={temperature} state={state} />
        </Grid>
        <Grid item xs={4}>
          <WeatherDetails humidity={humidity} wind={wind} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ForecastChart data={data} xs={12}/>
      </Grid>
      <Grid item xs={12}>
        <ForCast forecastItemList={forecastItemList}/>
      </Grid>
    </Grid>
  )
}

export default CityPage


