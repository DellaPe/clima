import React from "react";

import Forecast from "./Forecast";

export default {
    component: Forcast,
    title: "Forcast"
}
const forecastItemList = [
    {weekDay:"Lunes", hour: 12, state:"sun", temperature:20},
    {weekDay:"Martes", hour: 13, state:"sun", temperature:10},
    {weekDay:"Miercoles", hour: 14, state:"sun", temperature:15},
    {weekDay:"Jueves", hour: 15, state:"sun", temperature:13},
    {weekDay:"Viernes", hour: 12, state:"sun", temperature:20},
    {weekDay:"Sabado", hour: 13, state:"sun", temperature:10},
    {weekDay:"Domingo", hour: 14, state:"sun", temperature:15},
]
export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList}/>)