import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import Temperature from "../pages/Temperature.jsx";
import Time from "../pages/Time.jsx"
import Geometry from "../pages/Geometry.jsx"
import Cooking from "../pages/Cooking.jsx"
import Home from '../pages/Home.jsx'
import NoPage from "../pages/NoPage.jsx"
import TestPage from "../pages/TestPage.jsx";
import Footer from "../layouts/Footer.jsx"
import Header from "../layouts/Header.jsx"
import SideBar from "../layouts/SideBar";
import NavBar from "../layouts/NavBar.jsx";
import "../styles/globalbakin.css"

const ProjectRoutes = () => {

  return (

	
	<BrowserRouter >
	<div className="pagewrapper">
		<div style={{maringTop:500,marginBottom:20,backgroundcolor:"purple"}}></div>
		
		<div style={{maringTop:500,marginBottom:20,backgroundcolor:"purple"}}></div>

		<NavBar />
		<Header/>
		<SideBar/>
		
			<Routes >				
				<Route path="/" element={<Home />} index /> 
				<Route path="/temperature" element={<Temperature />} /> 
				<Route path="/geometry" element={<Geometry />} /> 
				<Route path="/time" element={<Time />}/> 
				<Route path="/cooking" element={<Cooking />} /> 
				<Route path="/test" element={<TestPage />} /> 		
				<Route path="*" element={<NoPage />} />
			</Routes>
		<Footer/>
		</div>
	</BrowserRouter>

  )
}

export default ProjectRoutes

