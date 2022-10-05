import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ForecastItem from './ForecastItem';

test('Weather Render sun', async () => {
    const [weekDay, hour, state, temperature] = ["Martes", 12, "hot", 13]
    const {findAllByRole} = render(<ForecastItem weekDay={weekDay} hour={hour} state={state} temperature={temperature}/>)
    const renderTestResult = await findAllByRole("heading")

    expect(renderTestResult[0]).toHaveTextContent(weekDay)
    expect(renderTestResult[1]).toHaveTextContent(hour)
    
    expect(renderTestResult[3]).toHaveTextContent(temperature)
})