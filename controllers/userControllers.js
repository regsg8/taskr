const User = require("../models/user");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).send(users);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

const postUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const user = await newUser.save(newUser);
    return res.status(200).send(user);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

module.exports = {
  getUsers,
  postUser
};
