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
import City from "./components/city";
import axios from "axios";

function App() {
  const [{cities, user }, dispatch]=useStateValue()
  
  
  useEffect(() => {

    axios.get("https://mytinerary-orlysantiago.herokuapp.com/api/datos")
      .then(response => {
        dispatch({
          type: actionType.CITIESDB,
          cities: response.data.response.cities
        })
      })
      if (localStorage.getItem("token")!==null) {

        const token= localStorage.getItem("token")
          
          axios.get("http://localhost:4000/api/signinToken",{
          headers:{
            'Authorization': 'Bearer '+token
          }
        })
        .then(user=> { 
        if (user.data.success) {
          console.log(user)
          dispatch({
            type:actionType.USER,
           user: user.data.datosUser
          })
          
        }else {
          localStorage.removeItem("token")
        }
      })
      }
  }, [])
  console.log(user)
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