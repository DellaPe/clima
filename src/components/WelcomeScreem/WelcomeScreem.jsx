import React, {useRef, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Clouds from "vanta/dist/vanta.clouds.min"
import * as THREE from "three"

const WelcomeScreem = ({ children }) => {
    const myrefDiv = useRef(null)
    const [ Vanta, setVanta ] = useState(0)
    console.log("myRefDiv: ", myrefDiv.current)

    useEffect(() => {
        console.log("myRefDiv en Effe: ", myrefDiv.current)
        //Solo pasa una vez por el if
        //Vanta === False
        if (!Vanta){
          //Aca se inicializa vanta 
          setVanta(1)
          //Aca activamos la animacion 
          Clouds({
            THREE,
            el: myrefDiv.current //Como asosciar los elementos
        })
        }
    }, [Vanta]) //Array de dependencias 
  return (
    <div ref = {myrefDiv}>
        WelcomeScreem
    </div>
  )
}

WelcomeScreem.propTypes = {}

export default WelcomeScreem