const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    img:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Profile', ProfileSchema);