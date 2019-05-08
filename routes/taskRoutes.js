const { Router } = require("express");
const {
  getTasksByBoardId,
  getTaskById,
  postTask,
  editTask,
  deleteTask
} = require("../controllers/taskControllers");

const taskRoutes = Router();

//get all tasks by (Board) _id
taskRoutes
  .route("/:_id/")
  .get(getTasksByBoardId)
  .post(postTask);
//get, put, delete individual Task by _id
taskRoutes
  .route("/task/:_id")
  .get(getTaskById)
  .put(editTask)
  .delete(deleteTask);

module.exports = taskRoutes;
