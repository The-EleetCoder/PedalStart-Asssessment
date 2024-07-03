const express = require("express");
const Task = require("../models/Task");
const router = express.Router();
const getTask = require("../middlewares/getTask");

// Retrieve all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new task
router.post("/", async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
  });
  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Retrieve a single task by its ID
router.get("/:id", getTask, (req, res) => {
  res.json(res.task);
});

// Update an existing task
router.put("/:id", getTask, async (req, res) => {
  if (req.body.title != null) {
    res.task.title = req.body.title;
  }
  if (req.body.description != null) {
    res.task.description = req.body.description;
  }
  if (req.body.dueDate != null) {
    res.task.dueDate = req.body.dueDate;
  }
  try {
    const updatedTask = await res.task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a task
router.delete("/:id", getTask, async (req, res) => {
  try {
    await Task.deleteOne(res.task);
    res.json({ message: "Deleted Task" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
