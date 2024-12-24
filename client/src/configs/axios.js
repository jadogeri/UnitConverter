import axios from "axios";

//const baseURL = process.env.REACT_APP_BASE_URL;
const baseURL = "https://unitconverter-cnfq.onrender.com/api"
console.log("baseURL === " , baseURL);
const headers ={
    'Content-Type': 'application/json',
    "Accept":'application/json',
    "Access-Control-Allow-Origin": "*"     ,
      
}

const api =  axios.create({
      
    baseURL: baseURL ,
    headers: headers
  
})
console.log(api);
console.log(JSON.stringify(api));


export default api
