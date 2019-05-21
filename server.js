const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
const app = express();
require("dotenv").config();
const boardRoutes = require("./routes/boardRoutes");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const secret = process.env.SECRET || "Thraxa Bandit Sock Apple"
const PORT = process.env.PORT || 5100;
const path = require('path')

//global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "client", "build")))

//DB connect
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/taskr",
  { useNewUrlParser: true, useCreateIndex: true },
  () => console.log("connected to DB".rainbow)
);

//user login/signup routes
app.use("/auth", require("./routes/auth"));
//every /api route request jwt will verify token
app.use("/api", expressJwt({ secret: process.env.SECRET }));
//main resourse routes
app.use("/api/users", userRoutes);
app.use("/api/boards", boardRoutes);
app.use("/api/tasks", taskRoutes);

//global error handler
app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    // express-jwt gives the 401 status to the err object for us
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

//For Heroku deployment
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

//server listen
app.listen(PORT, () => {
  console.log(`The magic happend on  port:${PORT}`.random);
});
