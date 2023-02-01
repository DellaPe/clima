import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { getForecastUrl } from './../utils/urls'
import getData from './../utils/transform/getData'

import getCityCode from './../utils/getCityCode'

const useCityPage = (actions, allData, allForecastItemList) => {
  const { city, country } = useParams()

  // const [data, setData] = useState(null);
  // const [forecastItemList, setForecastItemList] = useState(null);

  useEffect(() => {
    const url = getForecastUrl(city, country)
    const cityCode = getCityCode(city, country)

    const FuncAsync = async () => {
      try {
        const { data } = await axios.get(url)

        const { dataAux, forecastItemListAux } = getData(data)
        actions({ type: 'SET_CHART_DATA', payload: { [cityCode]: dataAux } })
        actions({ type: 'SET_FORECAST_ITEM_LIST', patload: { [cityCode]: forecastItemListAux } })
      } catch (error) {
        console.log(error)
      }
    }

    if (allData && allForecastItemList && !allData[cityCode] && !allForecastItemList[cityCode]) {
      FuncAsync()
    }
  }, [city, country, actions, allData, allForecastItemList])

  return { city, country }
}

export default useCityPage
