import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import { WiCelsius } from "react-icons/wi";
import { IconContext }  from "react-icons"
import IconState, {validValuesState} from './../IconState';
import { Grid } from '@mui/material';

const Weather = ({temperature, state}) => {
  return (
    <Grid container item
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}>
      <IconContext.Provider value={{size: '5em'}}>
        <IconState  state={state} />
      </IconContext.Provider>
      <Typography  display="inline" variant='h2'> {temperature} </Typography>  
      <IconContext.Provider value={{size: '5em'}}>
        <WiCelsius display="inline"></WiCelsius>
      </IconContext.Provider>
    </Grid>
  )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValuesState).isRequired, //oneOf() = uno de estos es valido
}

export default Weather