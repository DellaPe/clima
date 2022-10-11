import React from 'react'
import PropTypes from 'prop-types'
import { WiDayCloudy,
  WiDaySunny,
  WiRain,
  WiSnow,
  WiRaindrop,
  WiThunderstorm} from 'react-icons/wi'

const stateByName = {
    Clouds: WiDayCloudy,
    Clear: WiDaySunny,
    Rain: WiRain,
    Snow: WiSnow,
    Drizzle: WiRaindrop,
    Thunderstorm: WiThunderstorm
  } 
 export const validValuesState = ["Clouds", "Clear", "Rain", "Snow", "Drizzle", "Thunderstorm"]

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