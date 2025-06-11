const Social = require('../models/Social');

exports.createSocial = async (req, res) => {
    const social = await Social.create(req.body);
    res.json(social);
};

exports.getSocial = async (req, res) => {
    const data = await Social.find();
    res.json(data);
}
