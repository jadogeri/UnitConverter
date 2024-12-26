import React from 'react'

const ServiceCard = (props) => {
  return (
    <>
        <li className='w3-row-padding flex ' key={props.keyValue}
        >
            <p key={`service${props.keyValue}`}  style={{marginRight:30}}  >{props.name.toUpperCase()}</p>
            <p key={`total${props.keyValue}`}  >{props.total}</p>
        </li>

    </>

  )
}

export default ServiceCard