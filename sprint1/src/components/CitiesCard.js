import React from "react";
import div1 from "./assets/img/div1.jpg";
import florencia from "./assets/img/florencia.jpg";
import ny from "./assets/img/ny.jpg";
import tokio1 from "./assets/img/tokio1.jpg";
import granca from "./assets/img/granca.jpg";
import {Link as LinkRouter} from "react-router-dom"


function CitiesCard() {

    return (
        <div>
            <div className="row">
            <svg id="barra" className="block-itinerary-contributions__divider" width="116" height="6" viewBox="0 0 116 4" xmlns="http://www.w3.org/2000/svg"><path d="M116 1.5h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0H6v1h2v-1zm-6 1H0v-1h2v1zM60 2a2 2 0 11-4 0 2 2 0 014 0z" fill="#FC6220" fill-rule="nonzero"></path></svg>
                <div  id="div1" className="col-6 rounded">
                    <p id="text1">
                     Is a coming together of stakeholders who have a passion to sustainably develop the tourism industry.
                    In addition to its core functions of innovation, sustainability and collaboration, the Alliance is also focused on training and development initiatives, promoting industry employment opportunities and introducing data for better tourism development and promotion.
                    </p>
                </div>
            </div>
                <div className="row">
                    <div className="col-5 col-md-5 col-lg-5">
                        <img id="granca"src={granca} width="550px" height="370px" />
                    </div>
                    <div id="div2" className="col-6 col-md-6 col-lg-6">
                       <span>
                           <h4 id="sub3">¡UNFORGETTABLES EXPERIENCES!</h4>
                               <p id="text2">
                                   Creating your trip is entirely collaborative and our Travel Researchers are here for every step.
                                 </p>
                             <img id="imgdiv1"src={div1} width="100%"/></span>
                    
                     </div>
                </div>
                <div className="row">
                    <div id="div3"  className="col-6 col-md-6 col-lg-6 rounded">
                        <h4 id="sub3"> POSITIVE IMPACT</h4>
                           <p id="text3">
                              Positive impact
                              Curated sustainable experiences and accommodation that maximize the benefits to local people and place.
                             </p>
                    </div>
                    <svg id="barra" className="block-itinerary-contributions__divider" width="116" height="6" viewBox="0 0 116 4" xmlns="http://www.w3.org/2000/svg"><path d="M116 1.5h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0h-2v1h2v-1zm-6 0H6v1h2v-1zm-6 1H0v-1h2v1zM60 2a2 2 0 11-4 0 2 2 0 014 0z" fill="#FC6220" fill-rule="nonzero"></path></svg>
                    </div>
                    

           

            <div id="cardshome">
              <div className="row">
                    <div className="col-4">
                          <div className="card" style={{width: "25rem", backgroundColor: "white"}}>
                              <img src={florencia} class="card-img-top" width="200px" height="200px"/>
                               <div className="card-body">
                                  <h5 className="card-title">Florence</h5>
                                  <p className="card-text">Florence, has a lot to offer. World capital of art; home to several art galleries, places with classic Italian architecture, and an abundance of high-end stores.</p>
                                  <LinkRouter to="/cities" className="btn btn-primary">
                                Read more...
                              </LinkRouter>
                                </div>
                         </div>
                    </div>
                  <div className="col-4">
                         <div className="card" style={{width: "25rem", backgroundColor: "white"}}>
                             <img src={tokio1} class="card-img-top" width="200px" height="200px"/>
                              <div className="card-body">
                                   <h5 className="card-title">Tokyo</h5>
                                    <p className="card-text">Discover Tokyo at your own pace on this tour.
There are a world of options, including the city's temples and shrines, shopping excursions, and food or sake tours.</p>
                                    <LinkRouter to="/cities" className="btn btn-primary">
                                Read more...
                              </LinkRouter>
                                 </div>
                            </div>
                     </div>
                <div className="col-4">
                  <div className="card" style={{width: "25rem", backgroundColor: "white"}}>
                       <img src={ny} className="card-img-top" width="200px" height="200px"/>
                        <div className="card-body">
                          <h5 className="card-title">New York</h5>
                          <p className="card-text">The tallest buildings, the biggest museums and the best pizzas: New York is a city of superlatives and it delivers on every one of them. A different NY to discover each time you visit.</p>
                          <LinkRouter to="/cities" className="btn btn-primary">
                                Read more...
                              </LinkRouter>
                       </div>
                    </div>
                </div>
            </div>
            
         </div>
        </div>
    )
}
export default CitiesCard;