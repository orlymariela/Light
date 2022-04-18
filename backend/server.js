require("dotenv").config()
const express = require('express')
const cors = require("cors")
const Router = require("./routes/routes")
const passport= require("passport")
const app = express()

require("./config/database")
require("./config/passport")

//Middle words
app.use(express.json());
app.use(cors())
app.use(passport.initialize())
app.use("/api",Router)


app.listen('4000',()=>console.log('servidor inicializado en puerto 4000'))

