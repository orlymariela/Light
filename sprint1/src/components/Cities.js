import React from "react";
import florencia from "./assets/img/florencia.jpg";
import ny from "./assets/img/ny.jpg";
import tokio1 from "./assets/img/tokio1.jpg";
import granca from "./assets/img/granca.jpg";
import { Link as LinkRouter } from "react-router-dom"
import Carousel from "./Carousel";
import icon1 from "./assets/img/icon1.png";
import icon2 from "./assets/img/icon2.png";
import icon3 from "./assets/img/icon3.png"


function Cities() {
    return (
        <div>
            <div id="bannercities" className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
                <div className="content text-center">
                    <h1 id="tituloBanner" className="text-white">Cities</h1>
                    <h3 id="tituloBanner" className="text-white">Explore the world together!</h3>
                </div>
            </div>
            <div id="contentCities">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                        <h2>An unforgettable trip with a positive impact</h2>
                    </div>
                    <svg className="block-itinerary-contributions__divider" width="116" height="6" viewBox="0 0 116 4" xmlns="http://www.w3.org/2000/svg"><path d="M116 1.5h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0H6v1h2v-1zm-6 1H0v-1h2v1zM60 2a2 2 0 11-4 0 2 2 0 014 0z" fill="#FC6220" fill-rule="nonzero"></path></svg>
                </div>
                <div id="icons" className="row">
                    <div className="col-md-4">
                        <img src={icon1} width="90px" height="90px" />
                        <h4>Conservation</h4>
                        <p>Supports wildlife projects, protected areas and ecosystem regeneration.</p>
                    </div>

                    <div className="col-md-4">
                        <img src={icon2} width="90px" height="90px" />
                        <h4>Community and Culture</h4>
                        <p>Properties and experiences that uplift and empower local communities.</p>
                    </div>
                    <div className="col-md-4">
                        <img src={icon3} width="85px" height="80px" />
                        <h4>Footprint</h4>
                        <p>Lodges and camps chosen for their sustainability credentials and initiatives.</p>
                    </div>
                    <svg className="block-itinerary-contributions__divider" width="116" height="4" viewBox="0 0 116 4" xmlns="http://www.w3.org/2000/svg"><path d="M116 1.5h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0H6v1h2v-1zm-6 1H0v-1h2v1zM60 2a2 2 0 11-4 0 2 2 0 014 0z" fill="#FC6220" fill-rule="nonzero"></path></svg>
                </div>
                <div class="col-sm-6 col-md-6 d-flex mx-auto my-5">
                    <input type="text" id="filtroBusqueda" placeholder="Discover your city" className="form-control selector"></input>
                    <button type="button" className="btn" id="boton"><svg id="lupa" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></button>
                </div>

                <Carousel />
            </div>
        </div>
    )
}
export default Cities;