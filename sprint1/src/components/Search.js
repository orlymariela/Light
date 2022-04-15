import React from "react";
import { useStateValue } from "../StateProvider";
import { actionType } from "../reducer";



function Search() {
    const [{ cities }, dispatch] = useStateValue()

    
        

        const inputSearch = (event) => {
            dispatch({
                type: actionType.FILTER,
                value: event.target.value
            })
        }

    


        return (
            <div className="col-sm-6 col-md-6 d-flex mx-auto my-5">
                <input type="text" onChange={inputSearch} id="filtroBusqueda" placeholder="Discover your city" className="form-control"/>
            </div>
        )

    
}
export default Search