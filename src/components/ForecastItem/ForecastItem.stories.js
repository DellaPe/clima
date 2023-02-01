import React from 'react'
import ForecastItem from './ForecastItem'

export default {
  component: ForecastItem,
  title: 'Forecast Item'
}

export const ForecastItemExample = () => (
  <ForecastItem weekDay='Lunes' hour={22} state='sun' temperature={13} />
)
