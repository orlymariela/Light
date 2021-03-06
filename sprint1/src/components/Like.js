import axios from "axios";
import React, { useState } from "react";
import like1 from "./assets/img/like1.png";
import like2 from  "./assets/img/like2.png";
import { useStateValue } from "../StateProvider";

const Likes = (props) => {

    const [{ user }, dispatch] = useStateValue();
    const [likes, setLikes] = useState(props.likes);

    console.log(props)

    const likeDislike = async () => {
        const token = localStorage.getItem("token")
        
        await axios.put(`https://mytinerary-orlysantiago.herokuapp.com/api/likeDislike/${props.id}`, {}, {
            headers: {
                'Authorization':'Bearer ' + token
            }
        })
            .then(response => setLikes(response.data.response))
    }

     console.log(user)
    const colorheart = likes?.includes(user?.id) ? (
        <span>
            <img src={like1} className="icobut btn d-block w-100" alt="..." />
        </span>
    ) : (
        <span>
            <img src={like2} className="icobut btn d-block w-100" alt="..." />
        </span>
    )




    return (
        <div>
            {!user ?

                <div className="likes">
                    <img src={like2} className="icobut2 btn d-block w-100" alt="..." />
                    <p className="textolike">{likes?.length}</p>
                </div>

                :

                <div className="likes">
                    <button className="likes2 btn btn-transparency" onClick={likeDislike}>{colorheart}</button>
                    <p className="textolike">{likes?.length}</p>
                </div>

            }
        </div>
    )
}

export default Likes;





