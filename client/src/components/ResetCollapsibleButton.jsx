import React from 'react'
import { handleAccordion } from '../utils/handleAccordion'
import { useRef,useContext } from 'react'
import { Context } from '../context/APIContext'
import { useUpdateRecordsMutation } from '../redux/api/record'

const ResetCollapsibleButton = (props) => {
    const [updateRecords] = useUpdateRecordsMutation();

    const { state } = useContext(Context)
    const inputForm = useRef(null)
    const handleClick = (e) =>{
        e.preventDefault();
        const value = inputForm.current.input.value;
        props.handler(parseFloat(value))
        .then(()=>{
          updateRecords({service_name:props.service});
        })
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
            <input className="w3-input w3-border" type="number" placeholder="" name="CheckOut"  value={state.result} readOnly/>
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

export default ResetCollapsibleButton



/**
 * 
 * 
 



<hr>
<h2 class="w3-center">Tabs</h2>
<div class="w3-border">
<div class="w3-bar w3-theme">
  <button class="w3-bar-item w3-button testbtn w3-padding-16" onclick="openCity(event,'London')">London</button>
  <button class="w3-bar-item w3-button testbtn w3-padding-16" onclick="openCity(event,'Paris')">Paris</button>
  <button class="w3-bar-item w3-button testbtn w3-padding-16" onclick="openCity(event,'Tokyo')">Tokyo</button>
</div>

<div id="London" class="w3-container city w3-animate-opacity">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
</div>

<div id="Paris" class="w3-container city w3-animate-opacity">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p> 
  <p>The Paris area is one of the largest population centers in Europe, with more than 12 million inhabitants.</p>
</div>

<div id="Tokyo" class="w3-container city w3-animate-opacity">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
  <p>It is the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p>
</div>
</div>



// Tabs
function openCity(evt, cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var activebtn = document.getElementsByClassName("testbtn");
  for (i = 0; i < x.length; i++) {
    activebtn[i].className = activebtn[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-dark-grey";
}

var mybtn = document.getElementsByClassName("testbtn")[0];
mybtn.click();

 */