import React from 'react'
import AppFrame from "./../components/AppFrame"
import { useHistory } from 'react-router-dom'
import { Paper } from '@mui/material'
import CityList from "./../components/CityList"

const cities = [
  {city: "Tapalqué", country: "Argentina"},
  {city: "La Plata", country: "Argentina"},
  {city: "Lima", country: "Perú"},
  {city: "Madrid", country: "España"},
]

const MainPage = () => {
  const history = useHistory()
  const onClickHandler = (city, country) => {
    history.push(`/city/${country}/${city}`)
  }

  return (
    <AppFrame>
      <Paper elevation={4}>
        <CityList 
          cities={cities}
          onClickCity={onClickHandler}/>
      </Paper>
    </AppFrame>
  )
}

export default MainPage