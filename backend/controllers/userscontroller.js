const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jsonwebtoken = require("jsonwebtoken")


const usersController= {
    nuevoUsuario: async(req,res) =>{
      const { firstname, lastname, email, password }=req.body.NuevoUsuario //destructurar variables
      console.log(req.body)
      try {
          const UsuarioExiste = await User.findOne({email})
          if(UsuarioExiste){
              res.json({succes:"falseUE", response:"User already exists, go to Sing In"})
          }
          else{
              const passwordHash = bcryptjs.hashSync(password,10)
              const NewUser = new User({
                  firstname,
                  lastname,
                  email,
                  password:passwordHash

              })
              await NewUser.save()
              res.json ({succes:true, response:"User created"})
          }
      }
      catch(error){res.json({succes:"falseVAL", response: null, error:error})}
    },

    accesoUsuario: async(req,res) => {
        const {email, password} = req.body.userData //userData variable para usar en el front 
        try{
            const usuario = await User.findOne({email})
            if(!usuario){
                res.json({succes:false, from:"controller", error:"usuario y/o contraseña incorrecto" })

            }
            else{
                if(usuario.emailVerificado){
                    let passwordMatch = bcryptjs.compareSync(password,usuario.password)

                    if(passwordMatch){
                        const token = jwt.sing({...usuario}, process.env.SECRETKEY) //secretkey, variable de entorno
                        const datosUser = {
                            firstname: usuario.firstname,
                            lastname: usuario.lastname,
                            email: usuario.email,
                        }
                        await usuario.save()
                        res.json({succes:true, from:"controller", response:{token, datosUser}})
                    }
                    else{
                        res.json({succes:false, from:"controller", error:"usuario y/o contraseña incorrecto"})
                    }

                }
                else{
                    res.json({succes:false,from:"controller", error:"Verifica tu email para validarte"})
                }
           
            }

        }
        catch (error){console.log(error);res.json({succes:false,response:null, error:error})}
    }
}  
module.exports= usersController;

