import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Forecast from './Forecast';

const forecastItemList = [
    {weekDay:"Lunes", hour: 12, state:"sun", temperature:20},
    {weekDay:"Martes", hour: 13, state:"sun", temperature:10},
    {weekDay:"Miercoles", hour: 14, state:"sun", temperature:15},
    {weekDay:"Jueves", hour: 15, state:"sun", temperature:13},
    {weekDay:"Viernes", hour: 12, state:"sun", temperature:20},
    {weekDay:"Sabado", hour: 13, state:"sun", temperature:10},
    {weekDay:"Domingo", hour: 14, state:"sun", temperature:15},
]

test('Forecast Render',async () => {
    //Buscamos en trodos los codigos el data_testid="forecast-item-container"
    const {findAllByTestId} = render(
        <Forecast 
            forecastItemList={forecastItemList} />)

    const resultRender = await findAllByTestId("forecast-item-container")

    expect(resultRender).toHaveLength(7)

})