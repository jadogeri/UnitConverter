import React, {useEffect, useState} from 'react'
import ServiceBoard from './ServiceBoard.jsx'
import { useFetchRecordsQuery } from '../redux/api/record.js'
import Loader from './Loader.jsx'

const ServiceTable = () => {
  const { data, isLoading,isSuccess} = useFetchRecordsQuery()
  const [delay , setDelay] = useState(true);

  const [dailyspanData, setDailyspanData] = useState([])
  const [lifespanData, setLifespanData] = useState([])
  useEffect(()=>{
    handleLoadRecords()
    setTimeout(()=>{
      setDelay(false)
    },10000)
      
  },[data])

  const handleLoadRecords = ()=>{
    
    try{
      if(isSuccess){
        console.log(data)
    
        data.data.map((item)=>{
          const {d_name,d_total,l_name,l_total} = item
          setDailyspanData(prevArray => [...prevArray, {name : d_name,total : d_total}]);
          setLifespanData(prevArray => [...prevArray, {name : l_name,total : l_total}]);
        })

      }
   

    }catch(e){

    }

  }

  function getRandomInt() {
    let min = 0;
    let max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let randomNumber = getRandomInt();
  console.log(randomNumber); 


  return (
    <>
      <div>
          <hr/>
          <div class="w3-center">
            <h2>API CALLS</h2>
            <p>API calls logged in the tables below</p>
          </div>
      </div>
      <div class="w3-row-padding">
      {   !isSuccess ?<Loader strokeColor="grey" strokeWidth="5" width="96"/>:    <>  
                       <ServiceBoard data={lifespanData} title="LIFESPAN" key={getRandomInt()}/>
                       <ServiceBoard data={dailyspanData} title="DAILYSPAN" key={getRandomInt()}/>
                    </>     }

      

      </div>
    
    </>
  )
}

export default ServiceTable


