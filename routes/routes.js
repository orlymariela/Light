const Router = require("express").Router();
const passport = require ("../config/passport")
const datosController = require("../controllers/datoscontrollers") 
const {ObtenerLosDatos , ObtenerItinerary, likeDislike}= datosController
const usersController = require("../controllers/userscontroller")
const {nuevoUsuario, accesoUsuario, verifyEmail, cerrarSesion,  verificarToken }= usersController
const validator = require("../controllers/validator")
const commentsControllers = require("../controllers/commentscontrollers")
const {cargaComentario, obtenerComentario, borrarComentario, modificarComentario} = commentsControllers



Router.route("/datos") //"datos" parte de la url de la consulta
.get(ObtenerLosDatos),

Router.route("/itinerary/:city")
.get(ObtenerItinerary),

Router.route("/signup")
.post(validator,nuevoUsuario),

Router.route("/signin")
.post(accesoUsuario),

Router.route("/signout")
.post(cerrarSesion),

Router.route("/verify/:uniqueText")
.get(verifyEmail),

Router.route("/comments")
.post(cargaComentario),

Router.route("/comments/:id")
.get(obtenerComentario)
.delete(borrarComentario)
.put(modificarComentario),

Router.route("/signinToken")
.get(passport.authenticate("jwt", {session:false}), verificarToken),

Router.route("/likeDislike/:id")
.put(passport.authenticate("jwt", {session:false}), likeDislike)





module.exports = Router



