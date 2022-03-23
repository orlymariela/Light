import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import { Link as LinkRouter, useParams } from "react-router-dom";
import axios from "axios";
import Itinerary from "./Itinerary";
import country from "./assets/img/country.png";
import continent from "./assets/img/continent.png";
import currency from "./assets/img/currency.png";
import denonym from "./assets/img/denonym.png";
import language from "./assets/img/language.png";
import region from "./assets/img/region.png";
import Comments from "./Comments";


function City() {
    const [itineraries, setItineraries] = useState([])
    const [{ cities }, dispatch] = useStateValue();

    const { id } = useParams()
    const cityselecter = cities.filter(city => city._id == id)
    useEffect(() => {
        cityselecter.map(city =>
            axios.get(`http://localhost:4000/api/itinerary/${city.name}`)
                .then(response => setItineraries(response.data.response.itinerary))
        )
    }, []);
    console.log(itineraries)

    return (
        <div>
            <img className="imgCity" src={process.env.PUBLIC_URL + `/cards/cities/${cityselecter[0].img}`} alt={cityselecter.name} />
            <div className="content text-center">
                <h1 id="tituloCity" className="text">{cityselecter[0].name}</h1>
                <svg id="barra" className="block-itinerary-contributions__divider" width="116" height="6" viewBox="0 0 116 4" xmlns="http://www.w3.org/2000/svg"><path d="M116 1.5h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h6v1h2v-1zm-6 1H0v-1h2v1zM60 2a2 2 0 11-4 0 2 2 0 014 0z" fill="#FC6220" fillRule="nonzero"></path></svg>
            </div>
            <div>
                <div id="divParraf" className="row">
                    <div className="col-12">
                        <p id="pCity">{cityselecter[0].description}</p>
                    </div>
                </div>
                <div id="divIcons">
                 <div className="row">
                    <div className="col-4">
                      <img id="cityIcon" src={country} width="80px" height="80px" />
                      <div className="row">
                          <div className="col-12">
                              <h7 id="textIcon">{cityselecter[0].country}</h7>
                            </div> 
                      </div>
                    </div>
                    <div className="col-4">
                      <img id="cityIcon" src={continent} width="80px" height="80px" />
                      <div className="row">
                          <div className="col-12">
                              <h7 id="textIcon">{cityselecter[0].continents}</h7>
                            </div> 
                      </div>
                     </div>
                    <div className="col-4">
                         <img id="cityIcon" src={currency} width="80px" height="80px" />
                         <div className="row">
                          <div className="col-12">
                              <h7 id="textIcon">{cityselecter[0].currency}</h7>
                            </div> 
                      </div>
                    </div>
                </div>
                 <div className="row">
                    <div className="col-4">
                      <img id="cityIcon" src={language} width="80px" height="80px" />
                      <div className="row">
                          <div className="col-12">
                              <h7 id="textIcon">{cityselecter[0].language}</h7>
                            </div> 
                      </div>
                    </div>
                    <div className="col-4">
                      <img id="cityIcon" src={denonym} width="80px" height="80px" />
                      <div className="row">
                          <div className="col-12">
                              <h7 id="textIcon">{cityselecter[0].demonym}</h7>
                            </div> 
                      </div>
                     </div>
                    <div className="col-4">
                         <img id="cityIcon" src={region} width="80px" height="80px" />
                         <div className="row">
                          <div className="col-12">
                              <h7 id="textIcon">{cityselecter[0].region}</h7>
                            </div> 
                      </div>
                    </div>
                </div>
                </div>


            </div>

            <Itinerary itineraries={itineraries} />
           
        </div>



    )
}
export default City;