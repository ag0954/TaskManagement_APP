const express = require('express');
const Task = require('./task');
const { isAuthenticated } = require('../auth_jwt');

const router = express.Router();

// Get all tasks for a user
router.get('/', isAuthenticated, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user._id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tasks', error: err });
  }
});

// Create a new task
router.post('/', isAuthenticated, async (req, res) => {
  try {
    const { title, description, dueDate, status } = req.body;
    const newTask = new Task({
      userId: req.user._id,
      title,
      description,
      dueDate,
      status
    });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ message: 'Error creating task', error: err });
  }
});

// Update a task
router.put('/:id', isAuthenticated, async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(400).json({ message: 'Error updating task', error: err });
  }
});

// Delete a task
router.delete('/:id', isAuthenticated, async (req, res) => {
  try {
    const deleted = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!deleted) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting task', error: err });
  }
});

module.exports = router;
