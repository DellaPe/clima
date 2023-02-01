import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import { Skeleton, Grid } from '@mui/material'
import { WiCelsius } from 'react-icons/wi'
import { IconContext } from 'react-icons'
import IconState, { validValuesState } from './../IconState'

const Weather = ({ temperature, state }) => {
  const iconContextSize = useMemo(() => ({ size: '5em' }), [])
  return (
    <Grid
      container item
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={1}
    >
      <IconContext.Provider value={iconContextSize}>
        {
          state
            ? (<IconState state={state} />)
            : <Skeleton variant='circular' height={80} width={80} />
        }
      </IconContext.Provider>
      {
        temperature
          ? <Typography display='inline' variant='h2'> {temperature} </Typography>
          : <Skeleton variant='rectangular' height={80} width={80} />
      }
      <IconContext.Provider value={{ size: '5em' }}>
        <WiCelsius display='inline' />
      </IconContext.Provider>
    </Grid>
  )
}

Weather.propTypes = {
  temperature: PropTypes.number,
  state: PropTypes.oneOf(validValuesState) // oneOf() = uno de estos es valido
}

export default Weather
