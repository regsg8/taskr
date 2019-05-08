import React, { Component } from 'react'
import { StyledTaskCard } from '../../elements/Card'
import axios from 'axios'
import AddTaskDisplay from './AddTaskDisplay'
import AddTaskForm from './AddTaskForm'
const TaskrAxios = axios.create();

TaskrAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formToggle: false,
            isEdit: false,
            newTask: {
                boardId: this.props.selectedBoard,
                title: this.props.taskToUpdateTitle ? this.props.taskToUpdateTitle : '',
                description: this.props.taskToUpdateDescription ? this.props.taskToUpdateDescription : ''
            }
        }
    }

    updateFormToggle = () => {
        if(this.props.taskToUpdateTitle){
            this.setState({ formToggle : true, isEdit: true, newTask:{ title: this.props.taskToUpdateTitle, description: this.props.taskToUpdateDescription }})
        }
    }

    //Working, used on AddTaskForm to save changes to state
    handleChange = e => {
        const { name, value } = e.target
        e.persist()
        this.setState(ps  => ({
            newTask: { 
                ...ps.newTask,
                [name]: value 
            }
        }))
    }

    //Working, toggles display of AddTaskDisplay and AddTaskForm on AddTask component
    displayToggle = () => {
        this.setState(prevState => ({
          formToggle: !prevState.formToggle,
          isEdit: false
        }))
    }

    // Working, called by handleChange to save changes to newTask
    updateNewTask = () => {
    this.setState({ newTask: {
            title: this.state.title,
            description: this.state.description
            }
        })
    }

    // Working
    addTask = e => {
        e.preventDefault()
        this.setState({ 
          formToggle: false,
          isEdit: false,
          newTask: {
              title: '',
              description: ''
          }
      })
        if(this.state.isEdit){
            this.props.onUpdate(this.state.newTask)
            this.setState({isEdit: false})
        } else {
        this.props.onAdd(this.state.newTask)
    }
}
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.newTask.boardId !== this.props.selectedBoard){
            this.setState({newTask: {boardId: this.props.selectedBoard}});
        } if(prevProps.taskToUpdateDescription !== this.props.taskToUpdateDescription){
            this.updateFormToggle()
        }
    }

    render() {
        const props = {
            handleChange: this.handleChange,
            displayToggle: this.displayToggle,
            addTask: this.addTask,
            updateNewTask: this.updateNewTask,
            taskToUpdateTitle: this.props.taskToUpdateTitle,
            taskToUpdateDescription: this.props.taskToUpdateDescription,
            ...this.state
        }
        return (
            <StyledTaskCard>
                {this.state.formToggle ? <AddTaskForm {...props} /> : <AddTaskDisplay {...props}/>} 
            </StyledTaskCard>
        )
    }
}

export default AddTask