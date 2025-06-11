const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required: true
    },
    tools:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Project', ProjectSchema);