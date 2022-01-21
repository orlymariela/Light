import React from "react"
import CitiesCard from "./CitiesCard";
import Signin from "./Signin";
import Signup from "./Signup";

function Home() {

  return (
    <div>
      <div id="bannerhome" className="banner-image vh-100 d-flex justify-content-center align-items-center">
        <div className="content text-center">
          <h1 id="tituloBanner" className="text-white">My Tinerary</h1>
          <h3 id="tituloBanner" className="text-white">Find your perfect trip, designed by insiders who know and love their cities!</h3>
        </div>
        

      </div>
      <CitiesCard />

    </div>
  )
}
export default Home; 