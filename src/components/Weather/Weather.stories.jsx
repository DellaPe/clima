import React from 'react'
import 'typeface-roboto'
import Weather from './Weather'

export default {
  component: Weather,
  title: 'Weather'
}

const Template = (args) => (<Weather {...args} />)

// temperature={15} state='sun'
// temperature={40} state='hot'
export const WratherSun = Template.bind({})
WratherSun.args = { temperature: 15, state: 'sun' }

export const WratherHot = Template.bind({})
WratherHot.args = { temperature: 40, state: 'hot' }
