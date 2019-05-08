import React from 'react'

const AddTaskDisplay = props => {
    return (
        <div>
            <i className="fas fa-plus-square fa-2x" onClick={props.displayToggle}></i>
        </div>
    )
}

export default AddTaskDisplay
