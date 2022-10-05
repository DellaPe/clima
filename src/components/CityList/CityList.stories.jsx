import React from "react";
import 'typeface-roboto';
import CityList from "./CityList";
import {action} from "@storybook/addon-actions"

export default {
    component: CityList,
    title: "City List"
}

const cities = [
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Bogotá", country: "Colombia"},
    {city: "Lima", country: "Perú"},
    {city: "Madrid", country: "España"},
]

export const CityList1 = () => (<CityList cities={cities} onClickCity={action("Me hisite click")}/>)