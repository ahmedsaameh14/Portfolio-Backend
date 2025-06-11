const Social = require('../models/Social');

exports.createSocial = async (req, res) => {
    const newItem = new Social(req.body);
    const saved = await newItem.save();
    res.json(saved);
};

exports.getSocial = async (req, res) => {
    const data = await Social.find();
    res.json(data);
}
