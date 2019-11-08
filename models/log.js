var mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  idMachine: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
  actionType: {
    type: String,
    required: true,
  },
  apiId: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  user: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Log', logSchema);
