import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/grid";
import CityInfo from "./../CityInfo";
import Weather from "./../Weather";
import {List, ListItem} from "@mui/material"

const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry) => {
  const { city, country } = cityAndCountry;
  //sm={8} para tamaños sm para arriba 8 + 4, para el resto 12
  return (
    <ListItem  button key={city} onClick={eventOnClickCity}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={8} sm={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={4} sm={12}>
          <Weather temperature={10} state="sun" />
        </Grid>
      </Grid>
    </ListItem>
  );
};

const CityList = ({ cities, onClickCity }) => {
  return (
    <List>
      <Typography>
        {
          //renderCityAndCountry se transforma en una func que tetorna otra fucn
          cities.map((cityAndCountry) =>
            renderCityAndCountry(onClickCity)(cityAndCountry)
          )
        }
      </Typography>
    </List>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
