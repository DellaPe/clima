import React from "react";
import CityList from "./../CityList";
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const cities = [
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Bogotá", country: "Colombia"},
    {city: "Lima", country: "Perú"},
    {city: "Madrid", country: "España"},
]
test("City List Render", async () => {
    const fnClickOnItem = jest.fn()
    const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>)
    const renderReturCityList = await findAllByRole("button")

    expect(renderReturCityList).toHaveLength(4)
    
})

test("City List Click", async() => {
    //Hacemos una funcion "mock" (No es la funcion real)
    const fnClickOnItem = jest.fn()

    const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const renderReturtClick = await findAllByRole("button")

    //Creamos la funcion que va imitar 
    fireEvent.click(renderReturtClick[0]) //Cliqueo en la primera ciudad (Bs As)
    //Y veo si fue llamada 1 vez
    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})