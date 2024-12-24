import React from 'react'

const ServiceCard = (props) => {
  return (
    <>
        <li className='w3-row-padding flex '>
            <p>{props.name}</p>
            <p>{props.total}</p>
        </li>
    </>

  )
}

export default ServiceCard