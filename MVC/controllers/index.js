const AccountModel = require("../model/UserSchema")
class Controller {
    index(req,res ){
        res.render("./index")
    }
}
module.exports = new Controller