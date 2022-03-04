import React from "react";
import { useStateValue } from "../StateProvider";
import Carousel from "./Carousel";



function Home() {


  return (
    <div>
      <div id="bannerhome" className="banner-image vh-100 d-flex justify-content-center align-items-center">
        <div className="content text-center">
          <h1 id="tituloBanner" className="text-white">My Tinerary</h1>
          <h3 id="tituloBanner2" className="text-white">Find your perfect trip, designed by insiders who know and love their cities!</h3>
        </div>


      </div>
      <div>
        <div id="bannerhome2" className="banner-image vh-100 d-flex justify-content-center align-items-center">
          <div className="overlay">
          <div className="content text-center">
            <h2>-Get inspired-</h2>
            <h1 id="texthome" className="text-white">Is a coming together of stakeholders who have a passion to sustainably develop the tourism industry</h1>
            <h3 id="texthome" className="text-white">Creating your trip is entirely collaborative and our Travel Researchers are here for every step.</h3>
          </div>
          </div>
          
        </div>

        <div className="row">
          <div id="div3" className="col-12 col-md-12 col-lg-12 rounded">
            <h2> Positive Impact</h2>
            <p id="text3">
              Positive impact
              Curated sustainable experiences and accommodation that maximize the benefits to local people and place.
            </p>
          </div>
          <svg id="barra" className="block-itinerary-contributions__divider" width="116" height="6" viewBox="0 0 116 4" xmlns="http://www.w3.org/2000/svg"><path d="M116 1.5h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0H6v1h2v-1zm-6 1H0v-1h2v1zM60 2a2 2 0 11-4 0 2 2 0 014 0z" fill="#FC6220" fillRule="nonzero"></path></svg>
        </div>
        <div>

        </div>


      </div>


      <Carousel useStateValue={useStateValue} />

    </div>
  )
}
export default Home; 