const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email address']
    },
    number:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Contact', ContactSchema);