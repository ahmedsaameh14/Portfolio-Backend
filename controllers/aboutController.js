const About = require('../models/About');

exports.createAbout = async (req, res) => {
    const about = await About.create(req.body);
    res.json(about);
};

exports.getAbout = async (req, res) => {
    const data = await About.find();
    res.json(data);
}