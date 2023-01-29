import { useState, useEffect } from "react";
import axios from "axios";

import { getWeatherUrl } from "./../utils/urls";
import getCityCode from "./../utils/getCityCode"
import getAllWeather from "./../utils/transform/getAllWeather";

const useCityList = (cities, allWeather, actions) => {
  /*
        [Buenas Aires-Argentina]: { datos }
        [Lima-Peru]: { datos }...
    */
  //const [allWeather, setAllWeather] = useState({}); Este se va por la creacion de onSetAllWeather
  const [error, setError] = useState(null);

  //Aca invicamos anuestra api
  useEffect(() => {
    const setWeather = async (city, country) => {
      const url = getWeatherUrl(city, country);
      try {
        const propsName = [getCityCode(city, country)];
        // onSetAllWeather({ [propsName]: {} })
        actions({ type: 'SET_ALL_WEATHER', payload: { [propsName]: {} } })
        const response = await axios.get(url); //Ingresa a cada ciudad y me trae los datos
        const setAllWeatherAux = getAllWeather(response, city, country);

        //setAllWeather((allWeather) => ({...allWeather, ...setAllWeatherAux})); //[Buenas Aires-Argentina]: { datos }
        // onSetAllWeather({...setAllWeatherAux}); //De aca eliminamos allWeather
        actions({ type: 'SET_ALL_WEATHER', payload: setAllWeatherAux })
      } catch (error) {
        if (error.response) {
          setError("Error de servidor");
        } else if (error.request) {
          //Error 2: El server no responde, no llegamos al server
          setError(" Error de coneccion");
        } else {
          //Error 3: Que no conocemos.
          setError("Error imprevisto");
        }
      }

      /*.then(response =>{//Lo que venga en then es porque la peticion fue exitosa
          const { data } = response
          const temperature = Number(convertUnit(data.main.temp).from("K").to("C").toFixed(0))
          const state = "sun"
        })
        .catch( error => {
          //Error 1: El servidor responde algo que no queremos. 
          if(error.response) {
            setError("Error de servidor")
          } else if (error.request){ //Error 2: El server no responde, no llegamos al server
            setError(" Error de coneccion")
          } else{ //Error 3: Que no conocemos. 
            setError("Error imprevisto")
          }
        })*/
    };
    //Recorremos el arreglo de ciuddades que carguemos
    cities.forEach(({ city, country }) => {
      if (!allWeather[getCityCode(city, country)]) {
        setWeather(city, country);
      }
    });
  }, [cities, actions, allWeather]); //Todo el useEffect se va a volver a correr si se modifica cities (Array de dependencias)
  return { error, setError };
};

export default useCityList;
