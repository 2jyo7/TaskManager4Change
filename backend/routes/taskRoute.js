const express = require('express');
const Task = require('../model/task');


const router = express.Router();


// Get all tasks (optionally, add filters later)
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error: error.message });
  }
});

// Get one task by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching task by ID', error: error.message });
  }
});



// Create a new task
router.post('/tasks', async (req, res) => {
  const { title, description, assignedTo, status } = req.body;
  try {
    const task = new Task({ title, description, assignedTo, status });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error: error.message });
  }
});

// Update a task
router.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, assignedTo, status } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(id, { title, description, assignedTo, status }, { new: true });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error updating task', error: error.message });
  }
});


// Delete a task
router.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task', error: error.message });
  }
});


module.exports = router;