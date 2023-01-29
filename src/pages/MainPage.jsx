import React from 'react'
import AppFrame from './../components/AppFrame'
import { useHistory } from 'react-router-dom'
import { Paper } from '@mui/material'
import CityList from './../components/CityList'
import { getCities } from './../utils/serviceCities'

const MainPage = () => {
  const history = useHistory()
  const onClickHandler = React.useCallback((city, country) => {
    history.push(`/city/${country}/${city}`)
  }, [history])

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
