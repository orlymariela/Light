const joi = require("joi")
const {nuevoUsuario}= require("./userscontroller")


const validator = (req, res, next) => {
    console.log(req.body.NuevoUsuario)
    const Schema=joi.object({
        fisrtname:joi.string().max(10).min(3).trim().pattern( new  RegExp("[a-zA-Z]")).required().messages({
            "string.min": "Name must contain min 3 characters",
            "string.empty": "The field cannot be empty"
        }),
        lastname:joi. string().max(20).min(3).trim().pattern( new  RegExp("[a-zA-Z]")).required().messages({
            "string.min": "Lastnameame must contain min 3 characters",
            "string.empty": "The field cannot be empty"
        }),
        email:joi. string().email({minDomainSegments:2}).required().messages({
            "string.email": "Invalid mail format",
            
        }),
        password:joi. string().max(20).min(6).trim().pattern( new  RegExp("[a-zA-Z0-9]")).required().messages({
            "string.min": "The password must have at least 6 characters",
            "string.pattern": "The field cannot be empty"
        }),

    })
   
const validation =Schema.validate(req.body.NuevoUsuario, {abortEarly:false}) //Abort early para mencionar todos los errores
if (validation.error){
    return res.json({succes:false, response:validation})
}
next()
}
module.exports = validator;