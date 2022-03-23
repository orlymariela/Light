import React from "react";
import GoogleLogin from 'react-google-login';
import axios from "axios";
import swal from "sweetalert";


function Google(){
    
  const responseGoogle = async (response) => {
    console.log(response);

    const NuevoUsuario = {
      firstname: response.name,
      lastname: "Google",
      email: response.email,
      password: response.id,
      from:"google"

  }

  await axios.post("http://localhost:4000/api/signup", { NuevoUsuario })
      .then(response => {

          displayMessages(response.data)
      }
      )
  function displayMessages(data) {
      console.log(data)
      if (data.success === "falseVal") {
          data.response.error.details.map(error => swal(error.message))
      }
      else if (data.success === false) {
          swal(data.response)
      }
      else if(data.success ===true){
        swal(data.response)
      }
  }
  }
  return (
    <div>

<GoogleLogin
    clientId="293929888410-b26joi5lhf0u85aeh6np66bta11nb9tg.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>

  )

  
}
export default Google;