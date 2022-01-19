import React from "react";
import logo from "./assets/img/logo.png";
import nys from "./assets/img/nys.jpg";
import {Link as LinkRouter} from "react-router-dom"

function Signin (){


    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-6 col-lg-6">
                        <img id="imgSingin" src={nys} /></div>
                    <div className="col-6 col-md-6 col-lg-6">
                        <div className="text-end">
                            <img src={logo}  width={"40px"}/>
                        </div>
                        <h3 className="fw-bold text-center py-5">Hi!</h3>
                        <form action="#">
                        <div className="mb-4">
                                <label for="email" className="form-label">E-mail</label>
                                <input className="form-control" name="email"></input>
                            </div>
                        <div className="mb-4">
                        <label for="inputPassword5" class="form-label">Password</label>
                            <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"></input>
                           <div id="passwordHelpBlock" class="form-text">
                                   Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </div>
                            <LinkRouter to="/signup">
                            Don't have an account? Sing Up
                            </LinkRouter>
                            
                                
                                
                
                        </div>
                            <div className="d-grid">
                                <button className="btn btn-primary">Sing in</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
} 
export default Signin;