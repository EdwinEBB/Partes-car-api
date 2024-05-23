import mongoose from 'mongoose';

const tuningPartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  stock: {
    type: Number,
    required: true,
  },
});

const TuningPart = mongoose.model('TuningPart', tuningPartSchema);

export default TuningPart;