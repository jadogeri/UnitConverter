import React, {useContext, useEffect, useState} from 'react'
import ServiceBoard from './ServiceBoard.jsx'
import { Context as ServiceContext } from '../context/APIContext.js'
import { useFetchRecordsQuery } from '../redux/api/record.js'

const ServiceTable = () => {
  const {  state } = useContext(ServiceContext)
  const { data, isError,isLoading,isFetching,isSuccess,isUninitialized } = useFetchRecordsQuery()

  const [dailyspanData, setDailyspanData] = useState([])
  const [lifespanData, setLifespanData] = useState([])
  useEffect(()=>{
    handleLoadRecords()
    
  },[data])

  const handleLoadRecords = ()=>{
    
    try{
      if(isSuccess){
        console.log(data)
 
        data.data.map((item)=>{
          const {d_name,d_total,l_name,l_total} = item
          //prevArray => [...prevArray, newObject
          setDailyspanData(prevArray => [...prevArray, {name : d_name,total : d_total}]);
          setLifespanData(prevArray => [...prevArray, {name : l_name,total : l_total}]);
        })

      }
   

    }catch(e){

    }

  }



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
        <ServiceBoard data={lifespanData} title="LIFESPAN"/>
        <ServiceBoard data={dailyspanData} title="DAILYSPAN"/>

      </div>
    
    </>
  )
}

export default ServiceTable


