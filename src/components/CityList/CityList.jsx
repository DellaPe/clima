import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from 'axios'
import convertUnit from 'convert-units'
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/grid";
import CityInfo from "./../CityInfo";
import Weather from "./../Weather";
import {List, ListItem} from "@mui/material"

const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry, weather) => {
  const { city, country } = cityAndCountry;
  
  //sm={8} para tamaños sm para arriba 8 + 4, para el resto 12
  return (
    <ListItem  button key={city} onClick={eventOnClickCity}>
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

  //Aca invicamos anuestra api
  useEffect(() => {
    
    const setWeather = (city, country) => {
      const apiKey = "b1907a1349b8dc3a835d896d914dc02c";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      axios
      .get(url) //Ingresa a cada ciudad y me trae los datos
      .then(response =>{//Lo que venga en then es porque la peticion fue exitosa
        const { data } = response
        const temperature = Number(convertUnit(data.main.temp).from("K").to("C").toFixed(0))
        const state = "sun"
        setAllWeather(allWeather =>({ ...allWeather, [`${city}-${country}`]: { temperature, state } })) //[Buenas Aires-Argentina]: { datos }
      }) 
    }
    //Recorremos el arreglo de ciuddades que carguemos
    cities.forEach(({ city, country}) => {
      setWeather(city, country)
    });


  }, [ cities ]) //Todo el useEffect se va a volver a correr si se modifica cities 
  

  //const weather = { temperature: 200, state:"sun"}
  return (
    <List>
      <Typography>
        {
          //renderCityAndCountry se transforma en una func que tetorna otra fucn
          cities.map((cityAndCountry) =>
            renderCityAndCountry(onClickCity)(cityAndCountry, 
              allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`])
          )
        }
      </Typography>
    </List>
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
