require("dotenv").config()
const express = require('express')
const cors = require("cors")
const Router = require("./routes/routes")
const app = express()

require("./config/database")

app.use(express.json());
app.use(cors())
app.use("/api",Router)

app.listen('4000',()=>console.log('servidor inicializado en puerto 4000'))

