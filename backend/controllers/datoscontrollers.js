const Cities = require("../models/cities.js")
const Itinerary = require("../models/itinerary.js")



const datosController= {
    ObtenerLosDatos: async(req,res) =>{
        let cities
        let error = null
        try {
            cities = await Cities.find()
        } catch (err) {
            error = err
            console.error(error);

        }
        res.json({
            response:error? "ERROR":{cities},
            success:error?false:true,
            error:error
        })
    },
     //req= require res=response,

   
     //req= require res=response
ObtenerItinerary: async (req, res) => {

    let itinerary
    console.log(req.params)
    const city = req.params.city
    let error = null
    try {
        itinerary = await Itinerary.find({ city: city })

    } catch (err) {
        error = err
        console.log(error)
    }

    res.json({
        response: error ? "ERROR" : { itinerary },
        success: error ? false : true,
        error: error
    })
},

likeDislike: async (req, res) => {
    const id = req.params.id;
    const user= req.user.id

    console.log(id)
    console.log(user)
    let itinerary 

    try {
        itinerary= await Itinerary.findOne({_id:id})

        if (itinerary.like.includes(user)) {

            Itinerary.findOneAndUpdate({_id:id}, {$pull:{like:user}}, {new:true} )
            .then(response=>res.json({success:true, response:response.like}))

            .catch(error=>console.log(error))
            
        }else{
            Itinerary.findOneAndUpdate({_id:id}, {$push:{like:user}}, {new:true} )
            .then(response=>res.json({success:true, response:response.like}))

            .catch(error=>console.log(error))
            
        }
        
    } catch (err) {
        error=err
        res.json({success:false, response:error})
        
    }
}
}
module.exports= datosController

