import React from "react";
import crelle from "./assets/img/crelle.png"
import cvacio from "./assets/img/cvacio.png";

export default function icon ({gustar}) {
 return (
     <div>
         {gustar ? (
             <span>
                 <img src={crelle} className="icobut btn d-block w-100" alt=".."/> 
             </span>
         ) : (
            <span>
                <img src={cvacio} className="icobut btn d-block w-100" alt=".."/> 
            </span> 
         )
         }
     </div>
 );
}