import React, { useState, useCallback, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
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

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage />
                </Route>
                <Route path="/main">
                    <MainPage dataAll={dataAll} actions={actions}  />
                </Route>
                <Route path="/city/:country/:city">
                    <CityPage dataAll={dataAll} actions={actions} />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    );
};
//Poenr el Ruter de "/" al final o poner exact
export default App;
