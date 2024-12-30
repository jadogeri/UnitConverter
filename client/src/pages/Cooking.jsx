import React from 'react'
import useCooking from '../hooks/useCooking'
import CollapsibleOneInput from '../components/CollapsibleOneInputField'
import { CONVERSION_TYPES } from '../data/conversionText'
import Spacer from '../components/Spacer'


const Cooking = () => {
const [teaspoonsToTablespoonsAction, tablespoonsToTeaspoonsAction,
      cupsToPintsAction,  pintsToCupsAction, cupsToOuncesAction,
      ouncesToCupsAction, cupsToTablespoonsAction, tablespoonsToCupsAction
  
] = useCooking();

  return (
    <>
    <Spacer marginTop={40} marginBottom={40}/>

    <div id='cooking'></div>
    <hr/>

    <div style={{   margin:45,   backgroundColor:"#484464"}}>
    <h3 style={{alignSelf:"center",display:"flex",justifyContent:"center",color:"white"}}>COOKING</h3>
<div style={{   margin:45,  backgroundColor:"green"}}>
<CollapsibleOneInput title="Convert Tablespoons to Teaspoons" id="cooking1"
                  conversionText={CONVERSION_TYPES.COOKING.TABLESPOONS_TO_TEASPOONS}
                  handler={tablespoonsToTeaspoonsAction} service="cooking"
/>
<CollapsibleOneInput title="Convert Teaspoons to Tablespoons" id="cooking2"
                  conversionText={CONVERSION_TYPES.COOKING.TEASPOONS_TO_TABLESPOONS}
                  handler={teaspoonsToTablespoonsAction} service="cooking"
/>
<CollapsibleOneInput title="Convert Cups to Tablespoons" id="cooking7"
                  conversionText={CONVERSION_TYPES.COOKING.CUPS_TO_TABLESPOONS}
                  handler={cupsToTablespoonsAction} service="cooking"
/>
<CollapsibleOneInput title="Convert Tablespoons to Cups" id="cooking8"
                  conversionText={CONVERSION_TYPES.COOKING.TABLESPOONS_TO_CUPS}
                  handler={tablespoonsToCupsAction} service="cooking"
/>

<CollapsibleOneInput title="Convert Cups to Pints" id="cooking3"
                  conversionText={CONVERSION_TYPES.COOKING.CUPS_TO_PINTS}
                  handler={cupsToPintsAction} service="cooking"
/>

<CollapsibleOneInput title="Convert Pints to Cups" id="cooking4"
                  conversionText={CONVERSION_TYPES.COOKING.PINTS_TO_CUPS}
                  handler={pintsToCupsAction} service="cooking"
/>
<CollapsibleOneInput title="Convert Cups to Ounces" id="cooking5"
                  conversionText={CONVERSION_TYPES.COOKING.CUPS_TO_OUNCES}
                  handler={cupsToOuncesAction} service="cooking"
/>
<CollapsibleOneInput title="Convert Ounces to Cups" id="cooking6"
                  conversionText={CONVERSION_TYPES.COOKING.OUNCES_TO_CUPS}
                  handler={ouncesToCupsAction} service="cooking"
/>
</div>
</div>
<Spacer marginTop={40} marginBottom={40}/>
  </>
  )
}

export default Cooking

