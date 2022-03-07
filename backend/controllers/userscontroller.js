const nodemailer = require("nodemailer")
const crypto = require("crypto")
const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jsonwebtoken = require("jsonwebtoken")

async function sendEmail(email, uniqueText) {
    const transporter = nodemailer.createTransport({

        host: "smtp.gmail.com",
        port: 465, //puerto para email
        secure: true,
        auth: {

            user: "orlymytinerary@gmail.com",
            pass:"mytinerary123" //se guarda en env para que no sea publico
        }
    })

    const sender = "orlymytinerary@gmail.com"
    const mailOptions = {
        from: sender,
        to: email,
        subject: "User email verification",
        hmtl: `Click <a href=http://localhost:4000/api/verify/${uniqueText}> here </a> to validate your email`,
    }
    await transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error)
        }
        else {
            console.log("Send message")
        }
    })
}



const usersController = {
    verifyEmail: async(req,res)=>{
        const {uniqueText}= req.params
        const user = await User.findOne({uniqueText:uniqueText})
        if(user){
            user.emailVerify= true
             await user.save()
             res.redirect("http://localhost:3000/signin")
        }
        else{
            res.json({success:false, response:"Your email could not be verified"})
        }

    },
    nuevoUsuario: async (req, res) => {
        const { firstname, lastname, email, password } = req.body.NuevoUsuario //destructurar variables
        console.log(req.body)
        try {
            const UsuarioExiste = await User.findOne({ email })
            if (UsuarioExiste) {
                res.json({ success: "falseUE", response: "User already exists, go to Sing In" })
            }
            else {
                const uniqueText = crypto.randomBytes(15).toString("hex")  //genera un texto de letras y numeros de 15 caracteres. Es lo que nos devuelve el usuario cuando verifique su email.
                const emailVerify = false
                const passwordHash = bcryptjs.hashSync(password, 10)
                const NewUser = new User({
                    firstname,
                    lastname,
                    email,
                    password: passwordHash,
                    uniqueText, //busca la coincidencia del texto
                    emailVerify,
                })
                if (!emailVerify) {
                    await NewUser.save()
                    await sendEmail(email,uniqueText) //envia email de verificacion al usuario
                    res.json({ success: true, response: "We have sent an email to verify your email" })
                }
            }
        }
        catch (error) { res.json({ success: "falseVAL", response: null, error: error }) }
    },

    accesoUsuario: async (req, res) => {
        const { email, password } = req.body.userData //userData variable para usar en el front 
        try {
            const usuario = await User.findOne({ email })
            if (!usuario) {
                res.json({ success: false, from: "controller", error: "usuario y/o contraseña incorrecto" })

            }
            else {
                if (usuario.emailVerificado) {
                    let passwordMatch = bcryptjs.compareSync(password, usuario.password)

                    if (passwordMatch) {
                        const token = jwt.sing({ ...usuario }, process.env.SECRETKEY) //secretkey, variable de entorno
                        const datosUser = {
                            firstname: usuario.firstname,
                            lastname: usuario.lastname,
                            email: usuario.email,
                        }
                        await usuario.save()
                        res.json({ success: true, from: "controller", response: { token, datosUser } })
                    }
                    else {
                        res.json({ success: false, from: "controller", error: "usuario y/o contraseña incorrecto" })
                    }

                }
                else {
                    res.json({ success: false, from: "controller", error: "Verifica tu email para validarte" })
                }

            }

        }
        catch (error) { console.log(error); res.json({ success: false, response: null, error: error }) }
    }
}
module.exports = usersController;

