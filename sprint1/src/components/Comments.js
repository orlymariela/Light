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
        axios.get(`https://mytinerary-orlysantiago.herokuapp.com/comments/${id}`)
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
        await axios.post("https://mytinerary-orlysantiago.herokuapp.com/api/comments", { dataComments })
            .then(response =>
                setComment(response.data.response.commentario))
        setReload(!reload)
    }

    const borrarComentario = async (id) => {
        await axios.delete(`https://mytinerary-orlysantiago.herokuapp.com/api/comments/${id}`)
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
                    text: response.data.message,
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
                                            {user?.id === item.user._id ?
                                                <div>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div>
                                                                <div className='comentario-user-tex'>
                                                                    <input id="comentario-user-tex" onKeyUp={handelChange} defaultValue={item.comment}></input>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-5">
                                                            <div className="row">
                                                                <div className="col-3">
                                                                    <button id="buttonComment" className='btn btn-trasparency mx-2' onClick={() => borrarComentario(item._id)}><i className="fas fa-trash-alt"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                                    </svg></button>
                                                                </div>
                                                                <div className="col-3">
                                                                    <button id="buttonComment" className='btn btn-trasparency mx-2' onClick={() => modificar(item._id)}><i className="fas fa-edit"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                                    </svg></button>
                                                                </div>
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