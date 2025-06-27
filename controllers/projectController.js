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


exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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
