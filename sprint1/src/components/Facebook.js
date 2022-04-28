import React from "react";
import FacebookLogin from 'react-facebook-login';
import axios from "axios";
import swal from "sweetalert";


function Facebook() {
  const responseFacebook = async (response) => {
    console.log(response);

    const NuevoUsuario = {
      firstname: response.name,
      lastname: "Facebook",
      email: response.email,
      password: response.id,
      from:"facebook"

  }

  await axios.post("https://mytinerary-orlysantiago.herokuapp.com/api/signup", { NuevoUsuario })
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

      <FacebookLogin
        appId="350172157032276"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook} />
    </div>

  )


}
export default Facebook;