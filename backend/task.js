const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  status: {
    type: String,
    enum: ['todo', 'in progress', 'done'],
    default: 'todo'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

taskSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Task', taskSchema);
