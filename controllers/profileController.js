const Profile = require("../models/Profile");

exports.createProfile = async (req, res) => {
  req.body.img = req.file?.filename || null;
  const profile = await Profile.create(req.body);
  res.json(profile);
};

exports.getProfile = async (req, res) => {
  const data = await Profile.find();
  res.json(data);
};

exports.updateProfile = async (req, res) => {
  const updates = { ...req.body };

  if (req.file) {
    updates.img = req.file.filename;
  }

  const updated = await Profile.findByIdAndUpdate(req.params.id, updates, {
    new: true,
  });
  res.json(updated);
};

exports.removeProfile = async (req, res) => {
  await Profile.findByIdAndDelete(req.params.id);
  res.json({ message: "Profile deleted" });
};
