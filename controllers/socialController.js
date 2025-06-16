const Social = require('../models/Social');

exports.createSocial = async (req, res) => {
    const social = await Social.create(req.body);
    res.json(social);
};

exports.getSocial = async (req, res) => {
    const data = await Social.find();
    res.json(data);
}

exports.updateSocial = async (req, res) => {
    const updated = await Social.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

exports.removeSocial = async (req, res) => {
    await Social.findByIdAndDelete(req.params.id);
    res.json({ message: 'Social deleted' });
};