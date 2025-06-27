const Profile = require("../models/Profile");

// Before 
// exports.createProfile = async (req, res) => {
//   req.body.img = req.file?.filename || null;
//   const profile = await Profile.create(req.body);
//   res.json(profile);
// };


// After 
exports.createProfile = async (req, res) => {
  let profile = await Profile.findOne(); // get the only profile

  const profileData = {
    name: req.body.name,
    title: req.body.title
  };

  if (req.file) {
    profileData.img = req.file.filename;
  }

  if (profile) {
    // If profile exists, update it
    profile = await Profile.findByIdAndUpdate(profile._id, profileData, { new: true });
  } else {
    // If no profile, create one
    profile = await Profile.create(profileData);
  }

  res.json(profile);
}



exports.getProfile = async (req, res) => {
  const data = await Profile.find();
  res.json(data);
};

// Not Used
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
