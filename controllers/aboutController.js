const About = require('../models/About');


// Create or Update 
exports.createAbout = async (req, res) => {
    let about = await About.findOne();

    if (about) {
        about = await About.findByIdAndUpdate(about._id, { content: req.body.content }, { new: true });
    } else {
        about = await About.create({ content: req.body.content });
    }

    res.json(about);
};

exports.getAbout = async (req, res) => {
    const data = await About.find();
    res.json(data);
}

exports.removeAbout = async (req, res) => {
    await About.findByIdAndDelete(req.params.id);
    res.json({ message: 'About deleted' });
};