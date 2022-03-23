import React from "react";
import denonym from "./assets/img/denonym.png";
import { useStateValue } from "../StateProvider";



const Comments=(props)=>{
    
    const [{ user }, dispatch] = useStateValue()

    const submitComments=(event) =>{
        event.preventDefault()
        

        const dataComments={
            itinerario:props.itinerario,
            message: event.target[0].value,
            user: user

        }
        console.log(dataComments)
    }

    return (
        <div>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Comments and experience
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="imgComments">
                                <img id="cityIcon" src={denonym} width="40px" height="40px" />
                                <h6>Username</h6>
                            </div>                            
                            <div className="comments">
                                <form className="formComments" onSubmit={submitComments}>
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                                        <label htmlFor="floatingTextarea2">Comments</label>
                                        <button type="submit" value="submit" className="btn btn-primary">Send</button>
                                    </div>
                                   
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default Comments;