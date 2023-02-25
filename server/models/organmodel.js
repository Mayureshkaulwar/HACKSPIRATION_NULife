const mongoose = require('mongoose')

const organSchema = new mongoose.Schema({
    id: {type: Number, required : true},
    name: {type: String,required : true},
    organ:{type: String,required : true},
    donationdate: {type: Date,required : true},
    expirydate: {type: Date,required : true},
    donorage : {type: Number, required : true}
})

const organModel  = mongoose.model('organs', organSchema)
module.exports = organModel

