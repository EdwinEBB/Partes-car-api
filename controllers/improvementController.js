import Improvement from '../models/Improvement.js'

export const getAllImprovements = async (req, res) => {
  try {
    const improvements = await Improvement.find();
    res.json(improvements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createImprovement = async (req, res) => {
  const improvement = new Improvement({
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    stock: req.body.stock,
  });


  try {
    const newImprovement = await improvement.save();
    res.status(201).json(newImprovement);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getImprovementById = async (req, res) => {
  try {
    const improvement = await Improvement.findById(req.params.id);
    if (!improvement) {
      return res.status(404).json({ message: 'Improvement not found' });
    }
    res.json(improvement);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateImprovementById = async (req, res) => {
  try {
    const improvement = await Improvement.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!improvement) {
      return res.status(404).json({ message: 'Improvement not found' });
    }
    res.json(improvement);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteImprovementById = async (req, res) => {
  try {
    const improvement = await Improvement.findByIdAndDelete(req.params.id);
    if (!improvement) {
      return res.status(404).json({ message: 'Improvement not found' });
    }
    res.json({ message: 'Improvement deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
