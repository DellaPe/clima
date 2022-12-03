import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/grid";
import CityInfo from "./../CityInfo";
import Weather from "./../Weather";
import { Alert, List, ListItem } from "@mui/material";
//utils
import getCityCode from "./../../utils/getCityCode"
//hooks
import useCityList from "./../../hooks/useCityList";

const renderCityAndCountry =
    (eventOnClickCity) => (cityAndCountry, weather) => {
        const { city, country } = cityAndCountry;

        //sm={8} para tamaños sm para arriba 8 + 4, para el resto 12
        return (
            <ListItem
                button
                key={getCityCode(city, country)}
                onClick={() => eventOnClickCity(city, country, weather.temperature, weather.state, weather.humidity, weather.speed)}
            >
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item md={8} sm={12} xs={12}>
                        <CityInfo city={city} country={country} />
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <Weather
                            temperature={weather && weather.temperature}
                            state={weather && weather.state}
                        />
                    </Grid>
                </Grid>
            </ListItem>
        );
    };

const CityList = ({ cities, onClickCity, actions, dataAll }) => {
    const {allWeather} = dataAll
    const { error, setError } = useCityList(cities, allWeather, actions) //Elimino el allWeather que habia aca porque me viene como dato
    return (
        <div>
            {
                //onClose para que salte la x
                error && (
                    <Alert
                        onClose={() => setError(null)}
                        variant="outlined"
                        severity="error"
                    >
                        {error}
                    </Alert>
                )
            }
            <List>
                {
                    //renderCityAndCountry se transforma en una func que tetorna otra fucn
                    cities.map((cityAndCountry) =>
                        renderCityAndCountry(onClickCity)(
                            cityAndCountry,
                            allWeather[
                            getCityCode(cityAndCountry.city, cityAndCountry.country)
                            ]
                        )
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
            coutry: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
};

export default CityList;
