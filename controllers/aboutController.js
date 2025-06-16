const About = require('../models/About');

exports.createAbout = async (req, res) => {
    const about = await About.create(req.body);
    res.json(about);
};

exports.getAbout = async (req, res) => {
    const data = await About.find();
    res.json(data);
}

exports.updateAbout = async (req, res) => {
    const updated = await About.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

exports.removeAbout = async (req, res) => {
    await About.findByIdAndDelete(req.params.id);
    res.json({ message: 'About deleted' });
};