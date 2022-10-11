import React, { useState, useEffect} from 'react'
import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import axios from "axios"
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import AppFrame from '../components/AppFrame'
import { Paper } from '@mui/material'

const dataExample = [
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

const forecastItemListExample = [
  { weekDay: "Lunes", hour: 12, state: "Clouds", temperature: 20 },
  { weekDay: "Martes", hour: 13, state: "Clouds", temperature: 10 },
  { weekDay: "Miercoles", hour: 14, state: "Clouds", temperature: 15 },
  { weekDay: "Jueves", hour: 15, state: "Clouds", temperature: 13 },
  { weekDay: "Viernes", hour: 12, state: "Clouds", temperature: 20 },
  { weekDay: "Sabado", hour: 13, state: "Clear", temperature: 10 },
  { weekDay: "Domingo", hour: 14, state: "Clouds", temperature: 15 },
]

const CityPage = () => {

  const params = useParams()
  console.log(params)

  const city = "Buenas Aires"
  const country = "Argentina"
  const temperature = 23
  const state = "Clouds"
  const humidity = 20
  const wind = 12

  const apiKey = "b1907a1349b8dc3a835d896d914dc02c"
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${params.city}&appid=${apiKey}`
  
  const [data, setData] = useState(null)
  const [forecastItemList, setForecastItemList] = useState(null)

  useEffect(() => {
    setData(dataExample)
    setForecastItemList(forecastItemListExample)
  }, [])
  
  

  return (
    <AppFrame>
      <Paper>
        <Grid container
          justifyContent="center"
          direction="column">
          <Grid container item xs={12}
            justifyContent="center"
            alignItems="flex-end">
            <CityInfo city={params.city} country={params.country} />
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


