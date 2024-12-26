import React from 'react'
import { handleAccordion } from '../utils/handleAccordion'
import { useRef,useState } from 'react'
import { useUpdateRecordsMutation } from '../redux/api/record'

const CollapsibleInput = (props) => {
    const [updateRecords] = useUpdateRecordsMutation();

    const [output, setOutput] = useState(0.0);
    const inputForm = useRef(null)
    const handleClick = (e) =>{
        e.preventDefault();
        const value = inputForm.current.input.value;
        let result = props.handler(parseFloat(value))
        .then(()=>{
          updateRecords({service_name:props.service});
        })
        setOutput(result);
    }

  return (

  
    <>
        <button onClick={()=>{handleAccordion(props.id)}} className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">
            {props.title}
        </button>
        <div id={props.id} className="w3-hide">
          <div className="w3-container">
            <p>{props.conversionText}</p>
            <div className="w3-container w3-white w3-padding-16">


      <form ref={inputForm}>
        <div className="w3-row-padding" style={{margin:0,justifyContent:"center"}}>
          <div className="w3-third w3-margin-bottom">
            <label><i className="fa fa-calendar-o"></i> Input</label>
            <input className="w3-input w3-border" type="number" placeholder="0.0" name="input" required/>
          </div>
          <div className="w3-third">
            <label><i className="fa fa-calendar-o"></i> Result</label>
            <input className="w3-input w3-border" type="number" placeholder="" name="CheckOut"  value={output} readOnly/>
          </div>
          <div className="w3-third">
            <button style={{marginTop:20}} onClick={handleClick}
            className="w3-button w3-dark-grey" type="submit"><i className="fa fa-search w3-margin-right"></i> Search availability</button>
            </div>
        </div>
      </form>
    </div>
  </div>
          </div>
    </>
  )
}

export default CollapsibleInput