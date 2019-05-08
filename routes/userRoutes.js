const { Router } = require("express");
const { postUser, getUsers } = require("../controllers/userControllers");

const userRoutes = Router();

//get, post All Users
userRoutes
  .route("/")
  .get(getUsers)
  .post(postUser);
//N/A yet
userRoutes
  .route("/:id")
  .get()
  .put()
  .delete();

module.exports = userRoutes;
