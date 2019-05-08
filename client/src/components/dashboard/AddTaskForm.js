import React from 'react'
import { StyledBoardButton } from '../../elements/index'

const AddTaskForm = props => {
    return (
        <div>
            Title:<br></br> <input name='title' onChange={props.handleChange} value={props.newTask.title}></input><br></br>
            Description:<br></br> <input name='description' onChange={props.handleChange} value={props.newTask.description}></input> <br></br>
            <StyledBoardButton onClick={props.displayToggle}>back</StyledBoardButton><StyledBoardButton onClick={props.addTask}>{props.isEdit ? "update task" : "add task"}</StyledBoardButton>
        </div>
    )
}

export default AddTaskForm 