const mongoose = require('mongoose');
const SocialSchema = new mongoose.Schema({
    img:{
        type:String,
        required: true
    },
    link:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Social', SocialSchema);