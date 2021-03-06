const mongoose = require("mongoose")
const usersSchema = new mongoose.Schema({
    
    imguser:{type:String},
    firstname: {type: String, require:true},
    lastname: {type: String, require:false},
    email: {type: String, require:true},
    password: {type: String, require:true},
    uniqueText: {type: String, require:true},
    emailVerify:{type:Boolean, require:true},
    connected:{type:Boolean, require:true},
    from: {type: String, require:true},

    

})
const User = mongoose.model("users", usersSchema)
module.exports = User;