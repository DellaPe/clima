import React from 'react'
import 'typeface-roboto'
import CityInfo from './CityInfo'

export default {
  component: CityInfo, // Compenente asociado a la historia
  title: 'CityInfo' // Titulo de la historia
}

// sub items que el objeto puede visualizar
export const CityExample = () => (<CityInfo city='Buenas Aires' country='Argentina' />)
