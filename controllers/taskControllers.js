const mongoose = require("mongoose");
const Task = require("../models/task");
const User = require("../models/user");
const Board = require("../models/board");

const getTasksByBoardId = async (req, res, next) => {
  try {
    const tasks = await Task.find({
      board: req.params._id,
      user: req.user._id
    });
    return res.status(200).send(tasks);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findOne({
      _id: req.params._id,
      user: req.user._id
    });
    return res.status(200).send(task);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

const postTask = async (req, res, next) => {
  try {
    //create new task from model
    const newTask = new Task(req.body);
    //add related board ObjId to task
    newTask.board = mongoose.Types.ObjectId(req.params._id);
    //find related User by BoardObjId
    const taskUser = await User.findOne({
      boards: mongoose.Types.ObjectId(req.params._id)
    });
    //add related User ObjId to task
    newTask.user = taskUser._id;

    //create task in DB
    const task = await newTask.save(newTask);

    //board.findoneAndUpdate to  push task into tasks array
    const updatedBoard = await Board.findOneAndUpdate(
      { _id: req.params._id, user: req.user._id },
      { $push: { tasks: mongoose.Types.ObjectId(task._id) } },
      { returnNewDocument: true }
    );
    console.log(updatedBoard.tasks);
    return res.status(200).send(task);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

const editTask = async (req, res, next) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      //also query check against userObj
      { _id: req.params._id, user: req.user._id },
      req.body,
      { new: true }
    );
    return res.status(200).send(updatedTask);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    //find and delete task
    const task = await Task.findOneAndRemove({ _id: req.params._id });
    //find related Board and remove task from tasks array
    const updatedBoard = await Board.findOneAndUpdate(
      //also query check against userObj
      { _id: task.board, user: req.user._id },
      { $pull: { tasks: mongoose.Types.ObjectId(task._id) } }
    );
    // console.log(updatedBoard.tasks, task._id) task._id should be removed
    console.log(updatedBoard.tasks, task._id);

    return res.status(200).send(task);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

module.exports = {
  getTasksByBoardId,
  getTaskById,
  postTask,
  editTask,
  deleteTask
};
