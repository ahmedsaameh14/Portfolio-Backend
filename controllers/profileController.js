const Profile = require('../models/Profile');

exports.createProfile = async (req, res) => {
    const newItem = new Profile(req.body);
    const saved = await newItem.save();
    res.json(saved);
};

exports.getProfile = async (req, res) => {
    const data = await Profile.find();
    res.json(data);
}
