import React from "react";

function Itinerary(props) {
    console.log(props)
    const itinerary = props.itineraries
    console.log(itinerary)
    return (
        <div>
            <div className="row">
                <div className="col-7">
                    <p id="itinerary">WHAT CAN WE DO IN HERE?</p>
                </div>
            </div>
            {itinerary.map((itinerarie) => {
                return (
                    <div class="card mb-3" style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img className="" src={process.env.PUBLIC_URL + `/cards/${itinerarie.img}`} alt={itinerarie.name} />
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{itinerarie.name}</h5>
                                <p class="card-text">{itinerarie.description}</p>
                                <p class="card-text"><small class="text-muted">Time: {itinerarie.time}</small></p>
                                <p class="card-text"><small class="text-muted">Price: {itinerarie.price}</small></p>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}
export default Itinerary;