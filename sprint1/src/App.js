import React from 'react';
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
  axios.get("https://restcountries.com/v3.1/all")
  .then(response => {
    console.log(response.data)

  })
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/cities" element={  <Cities/>} />
        <Route path="/signin" element={  <Signin/>} />
        <Route path="/signup" element={  <Signup/>} />
        <Route path="/city" element={  <City/>} />
     
     

      </Routes>
    
     <Footer/>
     
    </BrowserRouter> 



  );
}

export default App;
