import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/grid';

import {validValuesState} from './../IconState';

import ForecastItem from './../ForecastItem'





const renderForcastItem = forecast => {
  const {weekDay, hour, state, temperature} = forecast
  return (
    <Grid 
      data-testid="forecast-item-container"
      item key={`${weekDay}${hour}`}>
        <ForecastItem 
          weekDay={weekDay} 
          hour={hour} 
          state={state} 
          temperature={temperature} />
    </Grid>
  ) 
}


const Forcast = ({forecastItemList}) => {
  return (
    <>
      <Grid container
        justifyContent="space-around"
        alignItems="center">
          {
            forecastItemList.map(forecast => renderForcastItem(forecast))
          }

      </Grid>
    </>
  )
}

Forcast.propTypes = {
  forecastItemList: PropTypes.arrayOf(PropTypes.shape({
    weekDay: PropTypes.string.isRequired, 
    hour: PropTypes.number.isRequired, 
    state: PropTypes.oneOf(validValuesState).isRequired, 
    temperature: PropTypes.number.isRequired
  })).isRequired
}

export default Forcast