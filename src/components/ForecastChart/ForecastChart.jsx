import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const ForecastChart = ({ data }) => {
  const marginSize = useMemo(() => ({ top: 20, botton: 20, left: 5, right: 5 }), [])
  return (
    <ResponsiveContainer height={250} width='95%'>
      <LineChart
        margin={marginSize}
        data={data}
      >
        <CartesianGrid />
        <XAxis dataKey='dayHour' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='max' stroke='#0000FF' />
        <Line type='monotone' dataKey='min' stroke='#FF0000' />
      </LineChart>
    </ResponsiveContainer>
  )
}

ForecastChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      dayHour: PropTypes.string.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired
    })
  ).isRequired
}

export default ForecastChart
