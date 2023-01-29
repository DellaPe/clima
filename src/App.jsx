import React, { useReducer, useCallback } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

import { WeatherDispatchContext, WeatherStateContext } from './WeatherContext'

const initialValue = {
  allWeather: {},
  allData: {},
  allForecastItemList: {}
}

const App = () => {
  const reducer = useCallback((state, action) => {
    // state va a traer el initialValue anterio
    let data
    let newData
    switch (action.type) {
      case 'SET_CHART_DATA':
        data = action.payload
        newData = { ...state.allData, ...data }
        return { ...state, allData: newData }

      case 'SET_FORECAST_ITEM_LIST':
        data = action.payload
        newData = { ...state.allForecastItemList, ...data }
        return { ...state, allForecastItemList: newData }

      case 'SET_ALL_WEATHER':
        data = action.payload
        newData = { ...state.allWeather, ...data }
        return { ...state, allWeather: newData }

      default:
        return state
    }
  }, [])
  const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <WeatherDispatchContext.Provider value={dispatch}>
      <WeatherStateContext.Provider value={state}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <WelcomePage />
            </Route>
            <Route path='/main'>
              <MainPage />
            </Route>
            <Route path='/city/:country/:city'>
              <CityPage dataAll={state} actions={dispatch} />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </WeatherStateContext.Provider>
    </WeatherDispatchContext.Provider>
  )
}
// Poenr el Ruter de "/" al final o poner exact
export default App
