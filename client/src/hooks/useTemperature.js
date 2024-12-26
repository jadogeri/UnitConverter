import { useContext } from 'react';
import { Context as ServiceContext } from '../context/APIContext';

function useTemperature() {
  const {state,kelvinToCelciusAction, kelvinToFahrenheitAction,celciusToFahrenheitAction,
    celciusToKelvinAction,fahrenheitToCelciusAction,fahrenheitToKelvinAction } = useContext(ServiceContext)

   return [state,kelvinToCelciusAction, kelvinToFahrenheitAction,celciusToFahrenheitAction,
    celciusToKelvinAction,fahrenheitToCelciusAction,fahrenheitToKelvinAction];
}

export default useTemperature;