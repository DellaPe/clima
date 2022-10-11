import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from 'axios'
import convertUnit from 'convert-units'

import Grid from "@mui/material/grid";
import CityInfo from "./../CityInfo";
import Weather from "./../Weather";
import {Alert, List, ListItem} from "@mui/material"

const getCityCode = (city, countryCode) => `${city}-${countryCode}`

const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry, weather) => {
  const { city, countryCode,country } = cityAndCountry;
  
  //sm={8} para tamaños sm para arriba 8 + 4, para el resto 12
  return (
    <ListItem  button key={getCityCode(city, country)} 
      onClick={ () => eventOnClickCity(city, country)}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={8} sm={12} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
            <Weather temperature={weather && weather.temperature} state={weather && weather.state} />
        </Grid>
      </Grid>
    </ListItem>
  );
};

const CityList = ({ cities, onClickCity }) => {
  
  /*
      [Buenas Aires-Argentina]: { datos }
      [Lima-Peru]: { datos }...
  */
  const [allWeather, setAllWeather] = useState({})
  const [error, setError] = useState(null)

  //Aca invicamos anuestra api
  useEffect(() => {
    
    const setWeather = async (city, countryCode) => {
      const apiKey = "b1907a1349b8dc3a835d896d914dc02c";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`;
      
      try {
        const response = await axios.get(url) //Ingresa a cada ciudad y me trae los datos
        const { data } = response
        const temperature = Number(convertUnit(data.main.temp).from("K").to("C").toFixed(0))
        const state = data.weather[0].main
        const cityProps = getCityCode(city, countryCode)
        const valueProps = { temperature, state }

        setAllWeather(allWeather =>({ ...allWeather, [cityProps]: valueProps })) //[Buenas Aires-Argentina]: { datos }
      } catch (error) {
        if(error.response) {
          setError("Error de servidor")
        } else if (error.request){ //Error 2: El server no responde, no llegamos al server
          setError(" Error de coneccion")
        } else{ //Error 3: Que no conocemos. 
          setError("Error imprevisto")
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
    }
    //Recorremos el arreglo de ciuddades que carguemos
    cities.forEach(({ city, countryCode }) => {
      setWeather(city, countryCode)
    });


  }, [ cities ]) //Todo el useEffect se va a volver a correr si se modifica cities 
  

  //const weather = { temperature: 200, state:"sun"}
  return (
    <div>
      { //onClose para que salte la x
        error && 
        <Alert onClose={()=>setError(null)} variant="outlined" severity="error">
          {error}
        </Alert>
      }
      <List>
        {
          //renderCityAndCountry se transforma en una func que tetorna otra fucn
          cities.map((cityAndCountry) =>
            renderCityAndCountry(onClickCity)(cityAndCountry, 
              allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)])
          )
        }
      </List>
    </div>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      coutry:PropTypes.string.isRequired
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
