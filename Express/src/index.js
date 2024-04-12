/*
  Author : Mvt
  GitHub : mvtvn78
*/

const express = require("express")
const {public} = require("./utils/constants.js")
const port = 3000
const app = express()
const bird = require("./Router/Routing_Login.js")
const morgan = require('morgan')
const bodyParser = require("body-parser")
// Static File
app.use(express.static(public))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan('combined'))
// using Router
app.use("/",bird);

// Open port and listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})