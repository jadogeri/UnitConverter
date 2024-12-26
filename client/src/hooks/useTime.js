import { useContext } from 'react';
import { Context as ServiceContext } from '../context/APIContext';

function useTime() {
  const {state,  secondsToMinutesAction, secondsToDaysAction, secondsToHoursAction,
        secondsToYearsAction, daysToSecondsAction, minutesToSecondsAction,
        hoursToSecondsAction, yearsToSecondsAction
} = useContext(ServiceContext)

   return [state,  secondsToMinutesAction, secondsToDaysAction, secondsToHoursAction,
            secondsToYearsAction, daysToSecondsAction, minutesToSecondsAction,
            hoursToSecondsAction, yearsToSecondsAction
];
}

export default useTime;



