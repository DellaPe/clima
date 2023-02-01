import React from 'react'
import Grid from '@mui/material/grid'
import CityInfo from './../CityInfo'
import Weather from './../Weather'
import { ListItem } from '@mui/material'

const CityListItem = ({ city, country, weather, eventOnClickCity }) => {
  return (
  // sm={8} para tamaños sm para arriba 8 + 4, para el resto 12
    <ListItem
      button
      onClick={() => eventOnClickCity(city, country, weather.temperature, weather.state, weather.humidity, weather.speed)}
    >
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item md={8} sm={12} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Weather
            temperature={weather && weather.temperature}
            state={weather && weather.state}
          />
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default React.memo(CityListItem)
