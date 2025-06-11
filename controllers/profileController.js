const Profile = require('../models/Profile');

exports.createProfile = async (req, res) => {
    const profile = await Profile.create(req.body);
    res.json(profile);
};

exports.getProfile = async (req, res) => {
    const data = await Profile.find();
    res.json(data);
}
