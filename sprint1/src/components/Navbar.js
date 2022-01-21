import React, { useState } from "react";
import {Link as LinkRouter} from "react-router-dom";

import logo from "./assets/img/logo.png"
import Signin from "./Signin";


function Navbar() {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 50) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);


    return (
        <div>
            <nav id="menu" className={colorChange ? 'colorChange navbar fixed-top navbar-expand-lg   colorChange' : 'navbar fixed-top navbar-expand-lg '}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width={"20px"} /><strong id="titulologo">My Tinerary</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="mx-auto"></div>
                        <ul className="navbar-nav">
                            <li className="nav-item md-auto">
                               <LinkRouter id="links" to="/"> 
                                 HOME
                               </LinkRouter> 
                            </li>
                            <li className="nav-item">
                               <LinkRouter id="links" to="/cities">
                               CITIES
                               </LinkRouter>
                            
                            </li>
                            <li className="nav-item">
                                <LinkRouter id="links" to="/signin">
                                    SIGN IN
                                </LinkRouter>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>


    )

}
export default Navbar;
