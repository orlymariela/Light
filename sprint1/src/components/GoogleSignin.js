import React from "react";
import GoogleLogin from 'react-google-login';
import axios from "axios";
import swal from "sweetalert";
import {actionType,} from "../reducer";
import { useStateValue } from '../StateProvider';


function GoogleSignin(){
  const [{user}, dispatch]= useStateValue()
    
  const responseGoogle = async (response) => {
    console.log(response);
    


    const userData = {
        email: response.profileObj.email,
        password: response.profileObj.googleId,
        from:"google"

    }
    console.log(userData)

    await axios.post("http://localhost:4000/api/signin", {userData}) //alert(response.data.response))
        .then(response =>


          // displayMessages(response.data)
         displayMessages(response.data)
         

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
            console.log(data.response.token)
            localStorage.setItem("token",data.response.token)
            swal({
            title: " Welcome",
            icon: "success",
            buttons: "OK"
        })
        dispatch({
          type: actionType.USER,
          user: data
        })
      
      }
     
         
    }
  }
  return (
    <div>

<GoogleLogin
    clientId="293929888410-b26joi5lhf0u85aeh6np66bta11nb9tg.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>

  )

  
}
export default GoogleSignin;