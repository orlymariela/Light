import React, { useEffect } from "react";
import icon1 from "./assets/img/icon1.png";
import icon2 from "./assets/img/icon2.png";
import icon3 from "./assets/img/icon3.png"
import { useStateValue } from "../StateProvider";
import { Link as LinkRouter } from "react-router-dom";
import Search from "./Search";


function Cities() {

    const [{ filterCity }, dispatch] = useStateValue()
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return (
        <div>
            <div id="bannercities" className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
                <div className="content text-center">
                    <h1 id="tituloBanner" className="text-white">Cities</h1>
                    <h3 id="tituloBanner2" className="text-white">Explore the world together!</h3>
                </div>
            </div>
            <h2>An unforgettable trip with a positive impact</h2>
            <div id="contentCities">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">

                    </div>
                    <svg className="block-itinerary-contributions__divider" width="116" height="6" viewBox="0 0 116 4" xmlns="http://www.w3.org/2000/svg"><path d="M116 1.5h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0H6v1h2v-1zm-6 1H0v-1h2v1zM60 2a2 2 0 11-4 0 2 2 0 014 0z" fill="#FC6220" fillRule="nonzero"></path></svg>
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
                    <svg className="block-itinerary-contributions__divider" width="116" height="4" viewBox="0 0 116 4" xmlns="http://www.w3.org/2000/svg"><path d="M116 1.5h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0H6v1h2v-1zm-6 1H0v-1h2v1zM60 2a2 2 0 11-4 0 2 2 0 014 0z" fill="#FC6220" fillRule="nonzero"></path></svg>
                </div>
                <Search/>
            </div>
            
            <div className="prueba">
                <div className="row">
                    {filterCity.length > 0 ?
                        filterCity?.map((ciudad) => {
                            return (

                                <div id="cardcity" className="card col-3" >
                                    <img className="img" src={process.env.PUBLIC_URL + `/cards/cities/${ciudad.img}`} alt={ciudad.name} />
                                    <div id="cardBody" className="card-body">
                                        <h5 id="topCity" className="card-title text-center"> {ciudad.name}</h5>
                                        <p id="textCountry" className="card-text"> {ciudad.country}</p>
                                    </div>
                                    <div id="cardinteraciones" className="card-body">
                                        <h5 className="card-title">{ciudad.name}</h5>
                                        <LinkRouter to={`/city/${ciudad._id}`} className="btn btn-primary">
                                            Read more...
                                        </LinkRouter>
                                    </div>

                                </div>)
                        }) : ""}
                </div>
            </div>

        </div>


    )
}
export default Cities;