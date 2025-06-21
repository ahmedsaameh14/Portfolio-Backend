const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  req.body.img = req.file?.filename || null;
  const project = await Project.create(req.body);
  res.json(project);
};

exports.getProject = async (req, res) => {
  const data = await Project.find();
  res.json(data);
};

exports.updateProject = async (req, res) => {
  const updates = { ...req.body };

  if (req.file) {
    updates.img = req.file.filename;
  }

  const updated = await Project.findByIdAndUpdate(req.params.id, updates, {
    new: true,
  });
  res.json(updated);
};

exports.removeProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Project deleted" });
};
