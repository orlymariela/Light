import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


function CarouselSlide() {
    const [{cities}, dispatch]=useStateValue()
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
                {cities.map((city) => {
                    return(
                <div>
                      <div>
                       <div className="card  h-100">
                       <img src={process.env.PUBLIC_URL + `/cards/cities/${city.img}`} alt={city.name}/>
                        <div className="card-body">
                            <h5 className="card-title">{city.name}</h5>
                            <LinkRouter to="/cities" className="btn btn-primary">
                                Read more...
                            </LinkRouter>
                        </div>
                    </div>
                </div>

                </div>)})}
            </Carousel>

        </div>
    )
}
export default CarouselSlide;