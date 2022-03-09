import React from "react";
import logo from "./assets/img/logo.png";
import {Link as LinkRouter} from "react-router-dom";
import axios from "axios"
import swal from "sweetalert";

function Signin (){
    async function loginUser(event) {
        event.preventDefault()
        const userData = {
            email: event.target[0].value,
            password: event.target[1].value

        }

        await axios.post("http://localhost:4000/api/signin", {userData}) //alert(response.data.response))
            .then(response =>


              // displayMessages(response.data)
             displayMessages(response.data)

            )
        function displayMessages(data) {
            if(!data.success){
                console.log(swal(data.error))
            }
            else{console.log(data.response)}
         
             
        }

    }


    return(
        <div>
            <div className="container">
                <div className="row align-items-streches">
                    <div className="bg d-none d-lg-block col-md-5 col-lg-5">
                        </div>
                    <div className="col-md-7 col-lg-7">
                        <div className="text-end">
                            <img src={logo}  width={"40px"}/>
                        </div>
                        <h3 className="fw-bold text-center py-5">Hi!</h3>
                        <form action="#" onSubmit={loginUser}>
                        <div className="mb-4">
                                <label for="email" className="form-label">E-mail</label>
                                <input className="form-control" name="email"></input>
                            </div>
                        <div className="mb-4">
                        <label for="inputPassword5" className="form-label">Password</label>
                            <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"></input>
                           <div id="passwordHelpBlock" className="form-text">
                                   Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </div>
                            <LinkRouter to="/signup">
                            Don't have an account? Sing Up
                            </LinkRouter>
                            
                        </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Sing in</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
} 
export default Signin;