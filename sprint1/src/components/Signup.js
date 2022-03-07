import React from "react";
import logo from "./assets/img/logo.png";
import axios from "axios";

function Signup(event) {

    async function nuevoUsuario(event) {
        event.preventDefault()
        console.log(event)
        const NuevoUsuario = {
            firstname: event.target[0].value,
            lastname: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,

        }

        await axios.post("http://localhost:4000/api/signup", {NuevoUsuario}) //alert(response.data.response))
            .then(response =>{ displayMessages(response.data)}


              

            )
        function displayMessages(data) {
           if (data.success === "falseVAL") {
               data.response.error.details.map(error => alert(error.message))
            }
            else if (data.success==="true"){
                console.log(data)
            }
        }

    }



    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="bgg d-none d-lg-block col-md-5 col-lg-5">
                    </div>
                    <div className="col-md-7 col-lg-7">
                        <div className="text-end">
                            <img src={logo} width={"40px"} />
                        </div>
                        <h3 className="fw-bold text-center py-5">Welcome</h3>
                        <form onSubmit={nuevoUsuario}>
                            <div className="row">
                                <div className="col">
                                <label for="exampleInputName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" name="firstname" placeholder="First name" aria-label="First name"></input>
                                </div>
                                <div className="col">
                                <label for="exampleInputLastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" name="lastname" placeholder="Last name" aria-label="Last name"></input>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control"></input>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" value="submit" className="btn btn-primary">SING UP</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Signup;