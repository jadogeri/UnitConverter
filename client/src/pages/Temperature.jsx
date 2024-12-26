import { useState } from 'react'
import React from 'react'
import useTemperature from '../hooks/useTemperature'
import CollapsibleOneInput from '../components/CollapsibleOneInput'
import { CONVERSION_TYPES } from '../data/conversionText'
import Spacer from '../components/Spacer'


const Temperature = () => {
  const [data, setData]= useState(0);
const [state,kelvinToCelciusAction, kelvinToFahrenheitAction,celciusToFahrenheitAction,
  celciusToKelvinAction,fahrenheitToCelciusAction,fahrenheitToKelvinAction]
   = useTemperature();

  return (
    <>
    <Spacer marginTop={40} marginBottom={40}/>

    <div id='temperature'>Temperature</div>
    <hr/>
<div>{JSON.stringify(state)}</div>

<CollapsibleOneInput title="Convert Celcius to Kelvin" id="temperature1"
                  conversionText={CONVERSION_TYPES.TEMPERATURE.CELCIUS_TO_KELVIN}
                  handler={celciusToKelvinAction} service="temperature"
/>
<CollapsibleOneInput title="Convert Celcius to Fahrenheit" id="temperature2"
                  conversionText={CONVERSION_TYPES.TEMPERATURE.CELCIUS_TO_FAHRENHEIT}
                  handler={celciusToFahrenheitAction} service="temperature"
/>
<CollapsibleOneInput title="Convert Kelvin To Celcius" id="temperature3"
                  conversionText={CONVERSION_TYPES.TEMPERATURE.KELVIN_TO_CELCIUS}
                  handler={kelvinToCelciusAction} service="temperature"
/>
<CollapsibleOneInput title="Convert Kelvin to Fahrenheit" id="temperature4"
                  conversionText={CONVERSION_TYPES.TEMPERATURE.KELVIN_TO_FAHRENHEIT}
                  handler={kelvinToFahrenheitAction} service="temperature"
/>
<CollapsibleOneInput title="Convert Fahrenheit to Kelvin" id="temperature5"
                  conversionText={CONVERSION_TYPES.TEMPERATURE.FAHRENHEIT_TO_KELVIN}
                  handler={fahrenheitToKelvinAction} service="temperature"
/>
<CollapsibleOneInput title="Convert Fahrenheit to Celcius" id="temperature6"
                  conversionText={CONVERSION_TYPES.TEMPERATURE.FAHRENHEIT_TO_CELCIUS}
                  handler={fahrenheitToCelciusAction} service="temperature"
/>

<Spacer marginTop={40} marginBottom={40}/>
  </>
  )
}

export default Temperature

