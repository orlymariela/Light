import React from "react"
import denonym from "./assets/img/denonym.png"
import { Link as LinkRouter } from "react-router-dom";

function Login() {
    return(
    <div className="dropdown">
            <button data-toggle="dropdown" aria-haspopup="true" type="button" className="btn btn-transparent"  aria-expanded="false">
                <img src={denonym} width={"20px"} />
            </button>
            <div class="dropdown-menu dropdown-menu-right">
                <LinkRouter className="dropdown-item" id="links" to="/signin"> SIGN IN
                </LinkRouter>
                <LinkRouter className="dropdown-item" id="links" to="/signin"> SIGN UP
                </LinkRouter>
                <LinkRouter className="dropdown-item" id="links" to="/signin"> SIGN OUT
                </LinkRouter>
            </div>
    </div>
    )
}
export default Login;