const nodemailer = require("nodemailer")
const crypto = require("crypto")
const User = require("../models/user")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")


async function sendEmail(email, uniqueText) {
    console.log(email)
    console.log(uniqueText)
    const transporter = nodemailer.createTransport({


        host: "smtp.gmail.com",
        port: 465, //puerto para email
        secure: true,
        auth: {

            user: "orlymytinerary@gmail.com",
            pass:"mytinerary123"  //se guarda en env para que no sea publico
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const sender = "orlymytinerary@gmail.com"
    const mailOptions = {
        from: sender,
        to: email,
        subject: "User email verification",
        html: `Click <a href=http://localhost:4000/api/verify/${uniqueText}> here </a> to validate your email`,
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
        const { firstname, lastname, email, password, from } = req.body.NuevoUsuario //destructurar variables
        
        
        try {
            const UsuarioExiste = await User.findOne({ email })
            
            if (UsuarioExiste) {
                if(from!=="signup"){
                   
                    const passwordHash= bcryptjs.hashSync(password, 10)
                    UsuarioExiste.password= passwordHash
                    UsuarioExiste.emailVerify= true
                    UsuarioExiste.from= from
                    UsuarioExiste.connected= false
                    UsuarioExiste.save()
                    res.json({success:true, response:"We update your signup so that you can do it with " + from})
                }
                else{
                    res.json({success:false, response:"The username is already in use"})
                }
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
                    connected: false,
                    from,
                })
                if(from!=="signup"){
                     NewUser.emailVerify=true
                     NewUser.from= from
                     NewUser.connected= false
                     await NewUser.save()
                     res.json({success:true,data:{NewUser},response:"Congratulations, your user has been created with "+from})
                }
                else{
                    NewUser.emailVerify=false
                    NewUser.from=from
                    NewUser.connected=false
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
        console.log(email)
        console.log(password)
        try {
            const usuario = await User.findOne({ email })
            if (!usuario) {
                res.json({ success: false, from: "controller", error: "Wrong username and/or password" })

            }
            else {
                if (usuario.emailVerify) {
                    let passwordMatch = bcryptjs.compareSync(password, usuario.password)

                    if (passwordMatch) {
                        //secretkey, variable de entorno
                        const datosUser = {
                            firstname: usuario.firstname,
                            lastname: usuario.lastname,
                            email: usuario.email,
                            id: usuario._id,
                            
                        }
                        usuario.connected=true
                        await usuario.save()
                        const token = await jwt.sign({ ...datosUser }, process.env.SECRETKEY, {expiresIn:60*60*24})
                        res.json({ success: true, from: "controller", response: { token, datosUser } })
                    }
                    else {
                        res.json({ success: false, from: "controller", error: "Wrong username and/or password" })
                    }

                }
                else {
                    res.json({ success: false, from: "controller", error: "Check your email to validate yourself" })
                }

            }

        }
        catch (error) { console.log(error); res.json({ success: false, response: null, error: error }) }
    },

    cerrarSesion: async (req, res) => {
        const email = req.body.email
        const usuario = await User.findOne({ email })
        usuario.connected = false
        await usuario.save()
        res.json({ success: true, response: "Log Out" })
    }
}
module.exports = usersController;

