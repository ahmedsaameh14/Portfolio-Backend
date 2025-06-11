const Experince = require('../models/Experince');

exports.createExperince = async (req,res) =>{
    const experince = await Experince.create(req.body);
    res.json(experince);
}

exports.getExperince = async (req,res) =>{
    const data = await Experince.find();
    res.json(data);
}