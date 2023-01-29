import React, { useRef, useEffect, useState } from 'react'
import Clouds from "vanta/dist/vanta.clouds.min"
import * as THREE from "three"

const WelcomeScreem = ({ children }) => {
  const myrefDiv = useRef(null)
  const [Vanta, setVanta] = useState(0)
  useEffect(() => {
    //Solo pasa una vez por el if
    //Vanta === False
    if (!Vanta) {
      //Aca se inicializa vanta 
      setVanta(1)
      //Aca activamos la animacion 
      setVanta(Clouds({
        THREE,
        el: myrefDiv.current //Como asosciar los elementos
      }))
    }
    //Para que deje de cargar cuando estemos en otra pantalla 
    return () => {
      if (Vanta) {
        Vanta.destroy()
      }
    }
  }, [Vanta]) //Array de dependencias 
  return (
    <div className="full" ref={myrefDiv}>
      {children}
    </div>
  )
}

WelcomeScreem.propTypes = {}

export default WelcomeScreem