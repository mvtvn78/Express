const AccountModel = require("../model/UserSchema")
class Controller {
    index(req,res ){
        AccountModel.find( {}).then( data => res.status(200).json(data)).catch(err => res.status(500).json(err))
    }
}
module.exports = new Controller