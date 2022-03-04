const Router = require("express").Router();
const datosController = require("../controllers/datoscontrollers") 
const {ObtenerLosDatos , ObtenerItinerary}= datosController
const usersController = require("../controllers/userscontroller")
const {nuevoUsuario, accesoUsuario}= usersController
const validator = require("../controllers/validator")



Router.route("/datos") //"datos" parte de la url de la consulta
.get(ObtenerLosDatos),

Router.route("/itinerary/:city")
.get(ObtenerItinerary),

Router.route("/signup")
.post(validator, nuevoUsuario),

Router.route("/signin")
.post(accesoUsuario)
module.exports = Router


