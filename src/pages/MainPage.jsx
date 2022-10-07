import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import CityList from "./../components/CityList"
const MainPage = () => {
  const history = useHistory()
  const onClickHandler = () => {
    history.push("/city")
  }

  const cities = [
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Bogotá", country: "Colombia"},
    {city: "Lima", country: "Perú"},
    {city: "Madrid", country: "España"},
  ]


  return (
    <div>
       <h2>Lista de Ciudades</h2>
      <CityList 
         cities={cities}
        onClickCity={onClickHandler}/>
    </div>
  )
}

export default MainPage