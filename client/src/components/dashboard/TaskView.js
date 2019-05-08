import React, { Component } from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import axios from "axios";
import { StyledTaskPage } from '../../elements/index'
const TaskrAxios = axios.create();

TaskrAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

class TaskView extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      taskToUpdate: ""
    };
  }
  getSpecificTasks = () => {
    const { selectedBoard } = this.props;
    TaskrAxios.get(`/api/tasks/${selectedBoard}`).then(res => {
      const data = res.data;
      console.log(data);
      this.setState(ps => {
        return {
          tasks: [...data]
        };
      });
    });
  };

  findTaskToDelete = taskId => {
    TaskrAxios.delete(`/api/tasks/task/${taskId}`).then(res => {
      console.log(res.data);
      this.getSpecificTasks();
    });
  };

  addNewTask = taskToAdd => {
    TaskrAxios.post(`/api/tasks/${this.props.selectedBoard}`, taskToAdd)
      .then(res => {
        console.log(res.data);
        this.getSpecificTasks();
      })
      .catch(err => console.log(err.response.data.errMsg));
  };

  updateTask = taskId => {
    const taskUpdate = this.state.tasks.find(task => task._id === taskId);
    this.setState({ taskToUpdate: taskUpdate });
  };

  crudForTaskUpdate = UpdatedTask => {
    TaskrAxios.put(`/api/tasks/task/${this.state.taskToUpdate._id}`, UpdatedTask)
    .then(res =>{
        console.log(res.data)
        this.getSpecificTasks();
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedBoard !== this.props.selectedBoard) {
      this.getSpecificTasks();
    } else if (!prevState.taskToUpdate) {
      console.log(this.state.taskToUpdate.title);
    }
  }

  render() {
    const mappedTasks = this.state.tasks.map((task, i) => {
      return (
        <Task
          {...task}
          key={i}
          findTaskToDelete={this.findTaskToDelete}
          updateTask={this.updateTask}
        />
      );
    });
    return (
      <StyledTaskPage>
        {this.props.User.username} <br />
        {mappedTasks}
        <AddTask
          updateTask={this.updateTask}
          selectedBoard={this.props.selectedBoard}
          onAdd={this.addNewTask}
          onUpdate={this.crudForTaskUpdate}
          taskToUpdateTitle={this.state.taskToUpdate.title}
          taskToUpdateDescription={this.state.taskToUpdate.description}
        />
      </StyledTaskPage>
    );
  }
}

export default TaskView;
