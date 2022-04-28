import React from "react";
import logo from "./assets/img/logo.png";
import {Link as LinkRouter} from "react-router-dom";
import axios from "axios"
import swal from "sweetalert";
import {actionType,} from "../reducer";
import { useStateValue } from '../StateProvider';
import GoogleSignin from "./GoogleSignin";


function Signin (){
    const [{user}, dispatch]=useStateValue()

    async function loginUser(event) {
       
        event.preventDefault()
        const userData = {
            email: event.target[0].value,
            password: event.target[1].value

        }

        await axios.post("https://mytinerary-orlysantiago.herokuapp.com/api/signin", {userData}) //alert(response.data.response))
            .then(response =>


              // displayMessages(response.data)
             displayMessages(response.data),
             
             
            
            )
        function displayMessages(data) {
            console.log(data)

            if(!data.success){
                swal({
                    title: " Error",
                    icon: "error",
                    text: data.error,
                    buttons: "OK"
                })
                
            }
            else{ 
               
                
                localStorage.setItem("token",data.response.token)
    
                swal({
                title: " Welcome",
                icon: "success",
                buttons: "OK"
            })}
         dispatch({
                type: actionType.USER,
                user: data
              })
             
        }
    console.log(user)

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
                        <form onSubmit={loginUser}>
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
                                <GoogleSignin/>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
} 
export default Signin;