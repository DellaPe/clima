import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"


import {getForecastUrl} from './../utils/urls'
import  getData  from "./../utils/transform/getData"

const useCityPage = () => {
  const { city, country} = useParams();
  

  const [data, setData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);

  useEffect(() => {
    const url = getForecastUrl(city, country)

    const FuncAsync = async () => {
      try {
        const { data } = await axios.get(url);
        
        const {dataAux, forecastItemListAux} = getData(data)
        setData(dataAux);
        setForecastItemList(forecastItemListAux);
      } catch (error) {
        console.log(error);
      }
    };

    FuncAsync();
  }, [city, country]);

  return {city, country, data, forecastItemList}
};

export default useCityPage;
