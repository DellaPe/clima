import React from 'react'
import WeatherDetails from './WeatherDetails'

export default {
  component: WeatherDetails,
  title: 'Weather Details'
}

export const WeatherDetailsExample = () => (<WeatherDetails humidity={80} wind={20} />)
