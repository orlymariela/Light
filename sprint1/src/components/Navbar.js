import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import logo from "./assets/img/logo.png"
import denonym from "./assets/img/denonym.png"
import { actionType } from "../reducer";
import axios from 'axios';
import { useStateValue } from "../StateProvider";

function Navbar() {
    const [{ user }, dispatch] = useStateValue()

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


    async function cerrarSesion() {
        const email = user.datosUser.email

        await axios.post("http://localhost:4000/api/signout", { email })
            .then(response => {

                if (response.data.success) {
                    localStorage.removeItem("token")
                    dispatch({
                        type: actionType.USER,
                        user: null
                    })
                }

                alert(response.data.response)

            })



    }


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
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item ">
                                <LinkRouter className="nav-link" id="links" to="/">
                                    HOME
                                </LinkRouter>
                            </li>
                            <li className="nav-item">
                                <LinkRouter id="links" className="nav-link" to="/cities">
                                    CITIES
                                </LinkRouter>

                            </li>
                        </ul>
                        
                            <div className="dropdown icon-login">
                                <button type="button" className="btn btn bg-transparent dropdown" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="fas fa-users"></i>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><LinkRouter className="dropdown-item" to="/signin"><i className="fas fa-sign-in-alt"></i>Sign In</LinkRouter></li>
                                    <li><LinkRouter className="dropdown-item" to="/signup"><i className="fas fa-user-plus"></i>Sign Up</LinkRouter></li>
                                </ul>
                            </div>
                            
                            

                            <div className="dropdown icon-login">
                                <button type="button" className="btn btn bg-transparent dropdown" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <img id="linkUser" src={denonym} width={"20px"} />
                                </button>
                                <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                    <li><LinkRouter className="dropdown-item " onClick={() => cerrarSesion()} to="/">Sign Out<i className="fas fa-sign-in-alt"></i></LinkRouter></li>

                                </ul>

                            </div>
                        
                    </div>
                </div>
            </nav>
        </div>


    )

}
export default Navbar;
