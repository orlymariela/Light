import React from "react";
import { Link as LinkRouter } from "react-router-dom"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import florencia from "./assets/img/florencia.jpg";
import ny from "./assets/img/ny.jpg";
import tokio1 from "./assets/img/tokio1.jpg";
import granca from "./assets/img/granca.jpg";
import irlanda from "./assets/img/irlanda.jpg";
import macchupichu from "./assets/img/macchupichu.jpg";
import marruecos from "./assets/img/marruecos.jpg"

function CarouselSlide() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (

        <div id="cardsCities" className="containter">
            <Carousel responsive={responsive}>
                <div>
                    <div className="card  h-100">
                        <img src={florencia} className="card-img-top" width="200px" height="200px" />
                        <div className="card-body">
                            <h5 className="card-title">Florence</h5>
                            <LinkRouter to="/city" className="btn btn-primary">
                                Read more...
                            </LinkRouter>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  h-100">
                        <img src={tokio1} className="card-img-top" width="200px" height="200px" />
                        <div className="card-body">
                            <h5 className="card-title">Tokyo</h5>

                            <LinkRouter to="/city" className="btn btn-primary">
                                Read more...
                            </LinkRouter>
                        </div>
                    </div></div>
                <div>
                    <div className="card h-100">
                        <img src={ny} className="card-img-top" width="200px" height="200px" />
                        <div className="card-body">
                            <h5 className="card-title">New York</h5>
                            <LinkRouter to="/city" className="btn btn-primary">
                                Read more...
                            </LinkRouter>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  h-100">
                        <img src={irlanda} className="card-img-top" width="200px" height="200px" />
                        <div className="card-body">
                            <h5 className="card-title">Dublin</h5>
                            <LinkRouter to="/city" className="btn btn-primary">
                                Read more...
                            </LinkRouter>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  h-100">
                        <img src={marruecos} className="card-img-top" width="200px" height="200px" />
                        <div className="card-body">
                            <h5 className="card-title">Marruecos</h5>
                            <LinkRouter to="/city" className="btn btn-primary">
                                Read more...
                            </LinkRouter>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  h-100">
                        <img src={macchupichu} className="card-img-top" width="200px" height="200px" />
                        <div className="card-body">
                            <h5 className="card-title">Machu Piccu</h5>
                            <LinkRouter to="/city" className="btn btn-primary">
                                Read more...
                            </LinkRouter>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </Carousel>

        </div>
    )
}
export default CarouselSlide;