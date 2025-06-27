const Experince = require('../models/Experince');

exports.createExperince = async (req,res) =>{
    // console.log('Incoming Data:', req.body);
    const experince = await Experince.create(req.body);
    res.json(experince);
}

exports.getExperince = async (req,res) =>{
    const data = await Experince.find();
    res.json(data);
}

exports.getExperinceById = async (req, res) => {
  try {
    const experince = await Experince.findById(req.params.id);
    if (!experince) {
      return res.status(404).json({ message: 'Experince not found' });
    }
    res.json(experince);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateExperince = async (req, res) => {
    const updated = await Experince.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

exports.removeExperince = async (req, res) => {
    await Experince.findByIdAndDelete(req.params.id);
    res.json({ message: 'Experince deleted' });
};