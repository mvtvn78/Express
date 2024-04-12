const jwt = require("jsonwebtoken")
const fs = require("fs")
const privateKey = fs.readFileSync("private.pem")
const token =jwt.sign({ username : "mvtvn78", password : "123"},privateKey,{algorithm: 'RS256'});
console.log(token);
const publicKey = fs.readFileSync("publickey.crt")
const value = jwt.verify(token,publicKey ,{algorithm: 'RS256'})
console.log(value);
