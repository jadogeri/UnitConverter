import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import Temperature from "../pages/Temperature.jsx";
import Time from "../pages/Time.jsx"
import Geometry from "../pages/Geometry.jsx"
import Cooking from "../pages/Cooking.jsx"
import Home from '../pages/Home.jsx'
import NoPage from "../pages/NoPage.jsx"
import TestPage from "../pages/TestPage.jsx";

const ProjectRoutes = () => {

  return (

	
	<BrowserRouter >
		<Routes >				
			<Route path="/" element={<Home />} index /> 
			<Route path="/temperature" element={<Temperature />} /> 
			<Route path="/geometry" element={<Geometry />} /> 
			<Route path="/time" element={<Time />}/> 
			<Route path="/cooking" element={<Cooking />} /> 
			<Route path="/test" element={<TestPage />} /> 		
			<Route path="*" element={<NoPage />} />
		</Routes>
	</BrowserRouter>

  )
}

export default ProjectRoutes

