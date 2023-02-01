import React from 'react'
import WeatherDetails from './WeatherDetails'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('Weather Details Render', async () => {
  const { findByText } = render(<WeatherDetails humidity={80} wind={10} />)

  const humi = await findByText(/80/)
  const wind = await findByText(/10/)

  expect(humi).toHaveTextContent('Humedad: 80 %')
  expect(wind).toHaveTextContent('Viento: 10 km/h')
})
