import { useState } from 'react'
import React from 'react'
import useTime from '../hooks/useTime'
import CollapsibleOneInput from '../components/CollapsibleOneInputField'
import { CONVERSION_TYPES } from '../data/conversionText'
import Spacer from '../components/Spacer'


const Time = () => {
  const [data, setData]= useState(0);
const [state,  secondsToMinutesAction, secondsToDaysAction, secondsToHoursAction,
        secondsToYearsAction, daysToSecondsAction, minutesToSecondsAction,
        hoursToSecondsAction, yearsToSecondsAction

  
] = useTime();


  return (
    <>
    <Spacer marginTop={40} marginBottom={40}/>

    <div id='time'>Time</div>
    <hr/>


<CollapsibleOneInput title="Convert Seconds to Minutes" id="time1"
                  conversionText={CONVERSION_TYPES.TIME.SECONDS_TO_MINUTES}
                  handler={secondsToMinutesAction} service="time"
/>
<CollapsibleOneInput title="Convert Seconds to Hours" id="time2"
                  conversionText={CONVERSION_TYPES.TIME.SECONDS_TO_HOURS}
                  handler={secondsToHoursAction} service="time"
/>
<CollapsibleOneInput title="Convert Seconds to Days" id="time3"
                  conversionText={CONVERSION_TYPES.TIME.SECONDS_TO_DAYS}
                  handler={secondsToDaysAction} service="time"
/>
<CollapsibleOneInput title="Convert Seconds to Years" id="time4"
                  conversionText={CONVERSION_TYPES.TIME.SECONDS_TO_YEARS}
                  handler={secondsToYearsAction} service="time"
/>
<CollapsibleOneInput title="Convert Minutes to Seconds" id="time5"
                  conversionText={CONVERSION_TYPES.TIME.MINUTES_TO_SECONDS}
                  handler={minutesToSecondsAction} service="time"
/>
<CollapsibleOneInput title="Convert Hours to Seconds" id="time6"
                  conversionText={CONVERSION_TYPES.TIME.HOURS_TO_SECONDS}
                  handler={hoursToSecondsAction} service="time"
/>
<CollapsibleOneInput title="Convert Days to Seconds" id="time7"
                  conversionText={CONVERSION_TYPES.TIME.DAYS_TO_SECONDS}
                  handler={daysToSecondsAction} service="time"
/>

<CollapsibleOneInput title="Convert Years to Seconds" id="time8"
                  conversionText={CONVERSION_TYPES.TIME.YEARS_TO_SECONDS}
                  handler={yearsToSecondsAction} service="time"
/>

<Spacer marginTop={40} marginBottom={40}/>
  </>
  )
}

export default Time

