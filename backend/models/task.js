const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  desc: { type: String },
  duedate: { type: String },
  status: { type: String, enum: ['Inprogress', 'Complete', 'Incomplete'], default: 'Incomplete' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', taskSchema);
