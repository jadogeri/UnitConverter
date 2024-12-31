import { useContext } from 'react';
import { Context as ServiceContext } from '../context/APIContext';

function useTime() {
  const {secondsToMinutesAction, secondsToDaysAction, secondsToHoursAction,
        secondsToYearsAction, daysToSecondsAction, minutesToSecondsAction,
        hoursToSecondsAction, yearsToSecondsAction
} = useContext(ServiceContext)

   return [secondsToMinutesAction, secondsToDaysAction, secondsToHoursAction,
            secondsToYearsAction, daysToSecondsAction, minutesToSecondsAction,
            hoursToSecondsAction, yearsToSecondsAction
];
}

export default useTime;



