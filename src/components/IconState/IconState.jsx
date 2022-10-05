import React from 'react'
import PropTypes from 'prop-types'
import { WiDaySunny, WiCloud, WiRainWind, WiCloudyGusts, WiHot, WiSnowflakeCold} from 'react-icons/wi'

const stateByName = {
    sun: WiDaySunny,
    cloud: WiCloud,
    rain: WiRainWind,
    gusts: WiCloudyGusts,
    hot: WiHot,
    cold: WiSnowflakeCold
  } 
 export const validValuesState=['sun', 'cloud', 'rain', 'gusts', 'hot','cold']

const IconState = ({state}) => {
    const StateByName = stateByName[state]
    return (
        <StateByName />
     )
}

IconState.propTypes = {
  state: PropTypes.oneOf(validValuesState).isRequired
}

export default IconState








/*
//Esta func nos ayuda a renderizar 
const renderState = state => {
  let Icon = stateByName[state]
  return <Icon />
  /*
  const Icon = stateByName[state]
  return <Icon />
  */
/*
switch (state) {
  case "cloud": {
    const Icon = stateByName[state]  
    return <Icon/>
  }
  case "rain": {
    const Icon = stateByName[state]  
    return <Icon/>
  }
  case "gusts": {
    const Icon = stateByName[state]  
    return <Icon/>
  }
  case "hot": {
    const Icon = stateByName[state]  
    return <Icon/>
  }
  case "cold": {
    const Icon = stateByName[state]  
    return <Icon/>                
  }
  default: {
    const Icon = stateByName["sun"]  
    return <Icon/>
  }
}
 
}
*/