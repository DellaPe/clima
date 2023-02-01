import React from 'react'

import CityInfo from './CityInfo' // sut
// No permite renderizar virtualmente para ver que onda
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('CityInfo render', async () => {
  // Para no tenr errores de escritura en el test
  const city = 'Buenas Aires'
  const country = 'Argentina'

  // AAA
  /*
        1ra A: de acomodar las cosas para que funcionen (Arrage)
        2da A: Ejecutamos el test (Act)
        3ra A: Evaluar el test (Asset)
    */
  // Render rizo mi funcion y me retorna todos los componentes que tengan roles
  const { findAllByRole } = render(<CityInfo city={city} country={country} />)
  // Busco los componentes que rean cabezeras... h1 h2 h3...
  const cityAndCouCityComponent = await findAllByRole('heading')

  // Veo si el test es correcto. Primero tiene que ser city y despues coun
  expect(cityAndCouCityComponent[0]).toHaveTextContent(city)
  expect(cityAndCouCityComponent[1]).toHaveTextContent(country)
})
