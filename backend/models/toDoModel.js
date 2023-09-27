const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ['high', 'medium', 'low'],
    default: 'low',
    required: true,
  },
});

module.exports = mongoose.model('ToDo', toDoSchema);
