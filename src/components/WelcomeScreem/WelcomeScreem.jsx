import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'

const WelcomeScreem = ({ children }) => {
    const myrefDiv = useRef(null)
    console.log("myRefDiv: ", myrefDiv.current)

    useEffect(() => {
        console.log("myRefDiv en Effe: ", myrefDiv.current)
    })
  return (
    <div ref = {myrefDiv}>
        WelcomeScreem
    </div>
  )
}

WelcomeScreem.propTypes = {}

export default WelcomeScreem