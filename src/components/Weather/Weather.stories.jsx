import React from "react";
import 'typeface-roboto';
import Weather from "./Weather";

export default {
    component: Weather,
    title: "Weather"
}

export const WratherSun = () => (<Weather temperature={15} state="sun"></Weather>)

export const WratherHot = () => (<Weather temperature={40} state="hot"></Weather>)