const jwt = require("jsonwebtoken")
const keySecret = "@mvtvn78"
const token =jwt.sign({ username : "mvtvn78", password : "123"},keySecret);
console.log(token);
const value = jwt.verify(token,keySecret)
console.log(value);
