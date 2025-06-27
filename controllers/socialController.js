const Social = require("../models/Social");

exports.createSocial = async (req, res) => {
  req.body.img = req.file?.filename || null;
  const social = await Social.create(req.body);
  res.json(social);
};

exports.getSocial = async (req, res) => {
  const data = await Social.find();
  res.json(data);
};

exports.getSocialById = async (req, res) => {
  try {
    const social = await Social.findById(req.params.id);
    if (!social) {
      return res.status(404).json({ message: 'Social not found' });
    }
    res.json(social);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateSocial = async (req, res) => {
  const updates = { ...req.body };

  if (req.file) {
    updates.img = req.file.filename;
  }

  const updated = await Social.findByIdAndUpdate(req.params.id, updates, {
    new: true,
  });
  res.json(updated);
}; 

exports.removeSocial = async (req, res) => {
  await Social.findByIdAndDelete(req.params.id);
  res.json({ message: "Social deleted" });
};
