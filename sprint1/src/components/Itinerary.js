import React, { useEffect, useState } from "react";
import { Link as LinkRouter, useParams } from "react-router-dom";
import Comments from "./Comments";
import axios from "axios";


function Itinerary(props) {
    const city = props.city
    const [itineraries, setItineraries] = useState([])
    useEffect(() => {
        city.map(city =>
            axios.get(`http://localhost:4000/api/itinerary/${city.name}`)
                .then(response => setItineraries(response.data.response.itinerary))
        )
    }, []);
    
    return (
        <div>
            <div className="row">
                <div className="col-7">
                    <p id="itinerary">WHAT CAN WE DO IN HERE?</p>
                </div>
            </div>
            {itineraries.map((itinerarie) => {
                return (
                    <div id="cardItinerary" className="card mb-12" style={{ maxWidth: "550px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className="" src={process.env.PUBLIC_URL + `/cards/${itinerarie.img}`} alt={itinerarie.name} />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div  className="card-body">
                                <h5 className="card-title">{itinerarie.name}</h5>
                                <p className="card-text">{itinerarie.description}</p>
                                <p className="card-text"><small className="text-muted">Time: {itinerarie.time}</small></p>
                                <p className="card-text"><small className="text-muted">Price: {itinerarie.price}</small></p>
                            </div>
                           
                        </div>
                        <Comments itinerario={itinerarie._id}/>
                    </div>
                    
                )
               
            })
    
            }
          
           
        </div>
    )
}
export default Itinerary;