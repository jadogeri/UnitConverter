import React, {useContext} from 'react'
import ServiceBoard from './ServiceBoard.jsx'
import { Context as ServiceContext } from '../context/APIContext.js'

const ServiceTable = () => {
  const {  state } = useContext(ServiceContext)

  return (
    <>
      <div>
          <hr/>
          <div class="w3-center">
            <h2>Color Themes</h2>
            <p>The color themes have been designed to work harmoniously with each other.</p>
          </div>
      </div>
      <div class="w3-row-padding">

<div>{JSON.stringify(state)}</div>
        <ServiceBoard data={state} title="LIFESPAN"/>
        <ServiceBoard data={state} title="DAILYSPAN"/>

      </div>
    
    </>
  )
}

export default ServiceTable


