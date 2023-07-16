const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  title: {
    type: String,
    required: true
  }
});

const ExerciseModel = mongoose.model('exercises', ExerciseSchema);

module.exports = ExerciseModel;