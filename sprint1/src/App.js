import React, { useEffect } from "react";
import { actionType } from './reducer';
import { useStateValue } from './StateProvider';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Home from "./components/Home"
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Cities from './components/Cities';
import Signup from './components/Signup';
import Carousel from 'react-multi-carousel';
import City from "./components/City";
import axios from "axios";

function App() {
  const [{cities }, dispatch]=useStateValue()
  
  
  useEffect(() => {

    axios.get("http://localhost:4000/api/datos")
      .then(response => {
        dispatch({
          type: actionType.CITIESDB,
          cities: response.data.response.cities
        })
      })
  }, [])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/cities" element={  <Cities />} />
        <Route path="/signin" element={  <Signin/>} />
        <Route path="/signup" element={  <Signup/>} />
        <Route path="/city/:id" element={  <City/>} />
     
     

      </Routes>
    
     <Footer/>
     
    </BrowserRouter> 



  );
}

export default App;
