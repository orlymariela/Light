import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import axios from "axios";
import swal from "sweetalert";
import denonym from "./assets/img/denonym.png";



const Comments = (props) => {

    const [{ user }, dispatch] = useStateValue()


    const [comment, setComment] = useState()
    const [reload, setReload] = useState(false)
    const [cambio, setCambio] = useState()

    useEffect(() => {
        let id = props.itinerario
        axios.get(`http://localhost:4000/api/comments/${id}`)
            .then(response => {
                setComment(response.data.response.comentario)
            })
    }, [reload])

    const submitComments = async (event) => {
        event.preventDefault()
        const dataComments = {
            itinerario: props.itinerario,
            message: event.target[0].value,
            user: user.response.datosUser.id
        }
        await axios.post("http://localhost:4000/api/comments", { dataComments })
            .then(response =>
                setComment(response.data.response.commentario))
        setReload(!reload)
    }

    const borrarComentario = async (id) => {
        await axios.delete(`http://localhost:4000/api/comments/${id}`)
            .then(response => {
                swal({
                    text: response.data.message,
                    buttons: "ok",
                })
            })
        setReload(!reload)
    }


    const handelChange = (event) => {
        setCambio(event.target.value)

    }

    const modificar = async (id) => {
        console.log(id)
        let data = cambio
        await axios.put(`http://localhost:4000/api/comments/${id}`, { data })
            .then(response => {
                swal({
                    text: response.data.mensage,
                    buttons: "ok",
                })

                console.log(response)
            })
        setReload(!reload)
    }
    console.log(comment)
    console.log(user)
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

                        {comment?.map(item =>
                            <div className="accordion-body">
                                <div className="imgComments">
                                    <div className="row">
                                        <div className="col-2">
                                            <img id="cityIcon" src={denonym} width="40px" height="40px" />
                                        </div>
                                        <div className="col-10">
                                            <h5>{item.user.firstname + " " + item.user.lastname}</h5>
                                            <h6>{"from " + item.user.from}</h6>
                                            {user?.response.datosUser.id === item.user._id ?
                                                <div>
                                                    <div className="row">
                                                        <div className="col-9">
                                                            <div>
                                                                <div className='comentario-user-tex'>
                                                                    <input onKeyUp={handelChange} defaultValue={item.comment}></input>
                                                                </div>

                                                            </div>
                                                            <div>
                                                                <button className='btn btn-primary mx-2' onClick={() => borrarComentario(item._id)}><i className="fas fa-trash-alt"></i>Delete</button>

                                                                <button className='btn btn-primary' onClick={() => modificar(item._id)}><i className="fas fa-edit"></i>Edit</button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                :
                                                <div>
                                                    {item.comment}

                                                </div>
                                            }
                                        </div>



                                    </div>
                                </div>


                            </div>
                        )}
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
    )

}
export default Comments;