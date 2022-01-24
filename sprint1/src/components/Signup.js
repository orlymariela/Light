import React from "react";
import logo from "./assets/img/logo.png";
import london from "./assets/img/london.jpg";

function Signup (){


    return(
        <div>
            <div className="container">
                <div className="row">
                <div className="bgg d-none d-lg-block col-md-5 col-lg-5">
                        </div>
                    <div className="col-md-7 col-lg-7">
                        <div className="text-end">
                            <img src={logo}  width={"40px"}/>
                        </div>
                        <h3 className="fw-bold text-center py-5">Welcome</h3>
                        <form action="#">
                        <div className="mb-4">
                        <label for="name" className="form-label">Name</label>
                                <input className="form-control" name="name"></input>
                        </div>
                        <div className="mb-4">
                        <label for="lastname" className="form-label">Last name</label>
                                <input className="form-control" name="lastname"></input>
                        </div>
                            <div className="mb-4">
                                <label for="email" className="form-label">E-mail</label>
                                <input className="form-control" name="email"></input>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary">Sing up</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
} 
export default Signup;