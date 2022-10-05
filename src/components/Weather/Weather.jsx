import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import { WiCelsius } from "react-icons/wi";
import { IconContext }  from "react-icons"
import IconState, {validValuesState} from './../IconState';

const Weather = ({temperature, state}) => {
  return (
    <div>
      <IconContext.Provider value={{size: '3em'}}>
        <IconState  state={state} />
      </IconContext.Provider>
      <Typography  display="inline" variant='h2'> {temperature} </Typography>  
      <IconContext.Provider value={{size: '4em'}}>
        <WiCelsius display="inline"></WiCelsius>
      </IconContext.Provider>
    </div>
  )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValuesState).isRequired, //oneOf() = uno de estos es valido
}

export default Weather