const express = require("express");
const authRouter = express.Router();
const { signup, login } = require("../controllers/authControllers");

//prettier-ignore
authRouter.route("/signup")
    .post(signup);
//prettier-ignore
authRouter.route("/login")
    .post(login);

module.exports = authRouter;
