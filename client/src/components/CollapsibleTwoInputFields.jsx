import React from 'react'
import { handleAccordion } from '../utils/handleAccordion'
import { useRef,useContext,useState } from 'react'
import { Context } from '../context/APIContext'
import { useUpdateRecordsMutation } from '../redux/api/record'
import Loader from './Loader.jsx'


const CollapsibleInput = (props) => {
    const [updateRecords] = useUpdateRecordsMutation();
    const [delay , setDelay] = useState(false);
    const { state, resetResultAction } = useContext(Context)
    const inputForm = useRef(null)
    const handleClick = (e) =>{
        e.preventDefault();
        const value1 = inputForm.current.field1.value;
        const value2 = inputForm.current.field2.value;
        if(value1.length > 0 && value2.length > 0){
          setDelay(true);

        props.handler(parseFloat(value1),parseFloat(value2))
        .then(()=>{
          updateRecords({service_name:props.service});
        })
        setDelay(false)

      }
    }

  return (

  
    <>
        <div style={{borderColor:"white",borderWidth:1}}>
        <button style={{color:"white"}} onClick={()=>{resetResultAction();
          
          handleAccordion(props.id, props.service)}} className="w3-padding-16 w3-theme w3-button w3-block w3-left-align ">
            {props.title}
        </button>
        <div id={props.id} className={`w3-hide ${props.service}`}  style={{backgroundColor: "red"}} >
          <div className="w3-container">
            <p style={{color:"white"}}>{props.conversionText}</p>
            <div className="w3-container w3-white w3-padding-16">


      <form ref={inputForm}>
        <div className="w3-row-padding" style={{margin:0,justifyContent:"center"}}>
          <div className="w3-quarter w3-margin-bottom">
            <label><i className="fa fa-calendar-o"></i> {props.field1}</label>
            <input className="w3-input w3-border" type="number" placeholder="0.0" name="field1" required/>
          </div>
          <div className="w3-quarter">
            <label><i className="fa fa-calendar-o"></i> {props.field2}</label>
            <input className="w3-input w3-border" type="number" placeholder="0.0" name="field2" required/>
          </div>
          <div className="w3-quarter">
            <label><i className="fa fa-calendar-o"></i>Result</label>
            {delay?<Loader/>:
                   <input className="w3-input w3-border" type="number" placeholder="" name="CheckOut"  value={state.result} readOnly/>}
           </div>
          <div className="w3-quarter w3-flex">
            <button style={{marginTop:20,display:"flex"}} onClick={handleClick}
            className="w3-button w3-dark-grey w3-flex" type="submit"><i className="fa fa-search w3-margin-right w3-flex"></i> Get Result</button>
            </div>
 
        </div>
      </form>
    </div>
  </div>
          </div>
          </div>
    </>
  )
}

export default CollapsibleInput