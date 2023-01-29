import React, { useContext, useReducer, useCallback } from 'react'

export const WeatherStateContext = React.createContext()
export const WeatherDispatchContext = React.createContext()

// export const useWeatherStateContext = () => {
//   return useContext(WeatherStateContext)
// }

// export const useWeatherDispatchContext = () => {
//   const dispatch = useContext(WeatherDispatchContext)
//   return dispatch
// }

// export const WeatherContext = ({ children }) => {
//   const initialValue = {
//     allWeather: {},
//     allData: {},
//     allForecastItemList: {}
//   }

//   const reducer = useCallback((state, action) => {
//     // state va a traer el initialValue anterio
//     let data
//     let newData
//     switch (action.type) {
//       case 'SET_CHART_DATA':
//         data = action.payload
//         newData = { ...state.allData, ...data }
//         return { ...state, allData: newData }

//       case 'SET_FORECAST_ITEM_LIST':
//         data = action.payload
//         newData = { ...state.allForecastItemList, ...data }
//         return { ...state, allForecastItemList: newData }

//       case 'SET_ALL_WEATHER':
//         data = action.payload
//         newData = { ...state.allWeather, ...data }
//         return { ...state, allWeather: newData }

//       default:
//         return state
//     }
//   }, [])
//   const [state, dispatch] = useReducer(reducer, initialValue)
//   return (
//     <WeatherDispatchContext.Provider value={dispatch}>
//       <WeatherStateContext.Provider value={state}>
//         {children}
//       </WeatherStateContext.Provider>
//     </WeatherDispatchContext.Provider>
//   )
// }

/*
      const [allWeather, setAllWeather] = useState({});
      const [allData, setAllData] = useState({});
      const [allForecastItemList, setForecastItemList] = useState({});

      //Creamo esta funcion porque no podemos pasar como parametro setAllWeather a onSetAllWeather (pero esta funcuion si la podemos mandar)
      const onSetAllWeather = useCallback(
          (weatherCity) => {
              setAllWeather((allWeather) => ({ ...allWeather, ...weatherCity }));
          },
          [setAllWeather]
      ); //Asi no dijamos el listado anterior

      const onSetData = useCallback( (dataCity) => {
          setAllData( (data) => ({ ...data, ...dataCity}))
      },
      [setAllData]
      );

      const onSetForecastItemList = useCallback(
          (cityForecast) => {
              setForecastItemList( (forecastItemList) => ({ ...forecastItemList, ...cityForecast}))
          },
          [setForecastItemList]
      );

      const actions = useMemo(() => (
          {
              onSetAllWeather, onSetData, onSetForecastItemList
          }
      ),[onSetAllWeather, onSetData, onSetForecastItemList]);

      const dataAll = useMemo(() => (
          {
              allWeather, allData, allForecastItemList
          }
      ),[allWeather, allData, allForecastItemList]);
  */
