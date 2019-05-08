const mongoose = require("mongoose");
const Board = require("../models/board");
const User = require("../models/user");

const getBoardsByUserId = async (req, res, next) => {
  try {
    const boards = await Board.find({ user: req.user._id });
    return res.status(200).send(boards);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

const getBoardById = async (req, res, next) => {
  try {
    const board = await Board.findOne({
      _id: req.params._id,
      user: req.user._id
    });
    return res.status(200).send(board);
  } catch (err) {
    res.status(500);
    next(err);
  }
};
const editBoard = async (req, res, next) => {
  try {
    const updatedBoard = await Board.findOneAndUpdate(
      //also query check against userObj
      { _id: req.params._id, user: req.user._id },
      req.body,
      { new: true }
    );
    return res.status(200).send(updatedBoard);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

const postBoard = async (req, res, next) => {
  try {
    //create new board from model
    const newBoard = new Board(req.body);
    // add user objId to board
    newBoard.user = mongoose.Types.ObjectId(req.params._id);
    //save new board to DB
    const board = await newBoard.save(newBoard);
    // user.findoneandupdate to  push board into boards array of Related User
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $push: { boards: mongoose.Types.ObjectId(board._id) } },
      { new: true }
    );
    console.log(updatedUser.boards);
    return res.status(200).send(board);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

const deleteBoard = async (req, res, next) => {
  try {
    //find and delete board
    const board = await Board.findOneAndRemove({
      _id: req.params._id,
      user: req.user._id
    });
    //find related user and remove board from Boards array
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $pull: { boards: mongoose.Types.ObjectId(board._id) } }
    );
    // console.log(updatedUser.boards, board._id);
    console.log(updatedUser.boards, board._id);

    return res.status(200).send(board);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

module.exports = {
  getBoardById,
  getBoardsByUserId,
  postBoard,
  editBoard,
  deleteBoard
};
