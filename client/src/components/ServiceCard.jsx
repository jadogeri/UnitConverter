import React from 'react'

const ServiceCard = (props) => {
  return (
    <>
        <li className='w3-row-padding flex '
        >
            <p
            style={{marginRight:30}}
            >{props.name.toUpperCase()}</p>
            <p  >{props.total}</p>
        </li>

    </>

  )
}

export default ServiceCard