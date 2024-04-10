const express = require("express")
const router = express.Router()
const AccountModel = require("../Database/connnectDB")
const {public} = require("../utils/constants")
router.get('/login',(req,res,next)=>{
  res.redirect("index.html")
})

router.post('/login', (req,res,next) => {
    AccountModel.findOne({
        username : req.body.username,
        password : req.body.password
    })
   .then( data =>  {
     (data) ? next() : res.json("NULL")
   })
   .catch(err => console.log(err))
},(req,res,next) => {
    console.log("Bạn đã đăng nhập thành công")
    res.redirect("/home")
})
router.use("/home", (req,res)=> {
    res.json("Home page")
})
module.exports = router