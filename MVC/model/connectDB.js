const mongoose = require('mongoose');
const connectMongo = mongoose.connect('mongodb://127.0.0.1:27017/Mvt')
module.exports = connectMongo
