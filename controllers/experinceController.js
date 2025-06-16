const Experince = require('../models/Experince');

exports.createExperince = async (req,res) =>{
    const experince = await Experince.create(req.body);
    res.json(experince);
}

exports.getExperince = async (req,res) =>{
    const data = await Experince.find();
    res.json(data);
}

exports.updateExperince = async (req, res) => {
    const updated = await Experince.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

exports.removeExperince = async (req, res) => {
    await Experince.findByIdAndDelete(req.params.id);
    res.json({ message: 'Experince deleted' });
};