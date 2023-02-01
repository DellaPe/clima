import React from 'react'
import AppFrame from './../components/AppFrame'
import { useNavigate } from 'react-router-dom'
import { Paper } from '@mui/material'
import CityList from './../components/CityList'
import { getCities } from './../utils/serviceCities'

const MainPage = () => {
  const navigate = useNavigate()
  const onClickHandler = React.useCallback((city, country) => {
    navigate(`/city/${country}/${city}`)
  }, [navigate])

  return (
    <AppFrame>
      <Paper elevation={4}>
        <CityList
          cities={getCities()}
          onClickCity={onClickHandler}
        />
      </Paper>
    </AppFrame>
  )
}

export default MainPage
