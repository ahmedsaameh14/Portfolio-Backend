const Profile = require('../models/Profile');

exports.createProfile = async (req, res) => {
    const profile = await Profile.create(req.body);
    res.json(profile);
};

exports.getProfile = async (req, res) => {
    const data = await Profile.find();
    res.json(data);
};

exports.updateProfile = async (req, res) => {
    const updated = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

exports.removeProfile = async (req, res) => {
    await Profile.findByIdAndDelete(req.params.id);
    res.json({ message: 'Profile deleted' });
};