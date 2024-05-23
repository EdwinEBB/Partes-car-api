import TuningPart from '../models/tuningpart.js';

export const getAllTuningParts = async (req, res) => {
  try {
    const tuningParts = await TuningPart.find();
    res.json(tuningParts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createTuningPart = async (req, res) => {
  const tuningPart = new TuningPart({
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    stock: req.body.stock,
  });

  try {
    const newTuningPart = await tuningPart.save();
    res.status(201).json(newTuningPart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getTuningPartById = async (req, res) => {
  try {
    const tuningPart = await TuningPart.findById(req.params.id);
    if (!tuningPart) {
      return res.status(404).json({ message: 'Tuning part not found' });
    }
    res.json(tuningPart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateTuningPartById = async (req, res) => {
  try {
    const tuningPart = await TuningPart.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!tuningPart) {
      return res.status(404).json({ message: 'Tuning part not found' });
    }
    res.json(tuningPart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteTuningPartById = async (req, res) => {
  try {
    const tuningPart = await TuningPart.findByIdAndDelete(req.params.id);
    if (!tuningPart) {
      return res.status(404).json({ message: 'Tuning part not found' });
    }
    res.json({ message: 'Tuning part deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
