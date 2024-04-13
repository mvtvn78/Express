const express = require("express")
const path = require("path")
require('dotenv').config()
const app = express()
app.set('views',path.join(__dirname,"views") ) // specify the views directory
app.set('view engine', 'ejs') // register the template engine
app.use(express.static('public'))
// Routing
const router = require("./router")
// Connect
const connectMongo = require("./model/connectDB")
connectMongo.then(data => console.log("Connect Successfully!!"))
app.use("/",router)
app.listen(process.env.PORT || 3000, () => 
{
    console.log("Listening " );
})