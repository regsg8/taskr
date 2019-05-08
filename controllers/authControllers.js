const User = require("../models/user");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  try {
    //check if user already exsist
    const user = await User.findOne({ username: req.body.username });
    if (user !== null) {
      res.status(400);
      return next(new Error("That username already exists!"));
    }
    //if username is unique create new user and save to db
    const newUser = new User(req.body);
    newUser.save(newUser);
    //create token, with userObj as the payload and encrypt token with secret
    const token = jwt.sign(newUser.toObject(), process.env.SECRET);
    return (
      res
        .status(201)
        //send token and userObj back
        .send({ success: true, user: newUser.toObject(), token })
    );
  } catch (err) {
    res.status(500);
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    //find user
    const user = await User.findOne({
      username: req.body.username.toLowerCase()
    });
    //check if username exist in DB
    if (!user) {
      res.status(403);
      return next(new Error("No user by that username"));
    }
    //compare password function
    user.checkPassword(req.body.password, (err, match) => {
      if (err) return res.status(500).send(err);
      if (!match)
        res.status(401).send({
          success: false,
          message: "Password is incorrect"
        });
      //send token with userObj stripped of password
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
      return res.send({
        token: token,
        user: user.withoutPassword(),
        success: true
      });
    });
  } catch (err) {
    res.status(500);
    next(err);
  }
};

module.exports = {
  signup,
  login
};
