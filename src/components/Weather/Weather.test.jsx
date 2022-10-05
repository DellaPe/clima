import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Weather from './Weather';

test('Weather Render sun', async () => {
    const {findAllByRole} = render(<Weather temperature={10} state="sun"/>)
    const renderTestResult = await findAllByRole("heading")

    expect(renderTestResult[0]).toHaveTextContent('10')
})


