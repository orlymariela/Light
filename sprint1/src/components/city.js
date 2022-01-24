import React from "react";
import Like from "../../src/components/Like";
import { Link as LinkRouter } from "react-router-dom"


function City() {
    return (

        <div>
            <div id="bannercity" className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
                <div className="content text-center">
                    <h1 id="tituloBanner" className="text-white">Florence</h1>
                </div>
            </div>
            <div>
                <div id="cardcity" className="card col-12" >
                    <div className="card-body">
                        <h5 className="card-title text-center">Florence</h5>
                        <p className="card-text">Florence, has a lot to offer.
                            World capital of art; home to several art galleries, places with classic Italian architecture, and an abundance of high-end stores. Located north of the central region.
                            Florence is the urban center where the Renaissance art movement originated in the second half of the 14th century, and is considered one of the world's cradles of art and architecture as well as one of the most beautiful cities in the world.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Country:</strong>  Italy</li>
                        <li className="list-group-item"><strong>Currency:</strong>  Euro <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-euro" viewBox="0 0 16 16">
                            <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
                        </svg></li>
                        <li className="list-group-item"><strong>Language:</strong> Italian               
                        </li>
                    </ul>
                    <div id="cardinteraciones"className="card-body">
                        <div className="col-4">
                        <a href="https://goo.gl/maps/bPLw2QiA6sCvCRZw8" className="card-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>Maps</a> 
                        </div>
                        </div>
                        <div className="row">
                        
                         <div className="col-10"></div>
                        <div className="col-2">
                        <Like/>
                        </div>
                       
                        <a href="#" className="card-link"></a>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default City;