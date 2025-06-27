const mongoose = require('mongoose');
const ExperinceSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Experince', ExperinceSchema);