import React, { Component } from 'react'
import { StyledTaskCard, StyledH3, StyledSpan, StyledIconDiv } from '../../elements/index'

class Task extends Component {
    constructor() {
        super()
        this.state = {
            display: false
        }
    } 

    //Expands the view of the task on click
    toggle = () => {
        this.setState(prevState => ({
            display: !prevState.display
        }))
    }

    render(){
        return (
            <StyledTaskCard>
               <StyledH3 onClick={this.toggle}>{this.props.title}</StyledH3>
               {this.state.display === true ? 
                    (<div>
                        <StyledSpan>{this.props.description}</StyledSpan>
                        <StyledIconDiv>
                            <i className="fas fa-edit" onClick={() => this.props.updateTask(this.props._id)}></i> 
                            <i className="fas fa-trash" onClick={() => this.props.findTaskToDelete(this.props._id)}></i>
                            <i className="far fa-check-square"></i>
                        </StyledIconDiv>
                    </div>) :
                    (<span></span>)
                }
            </StyledTaskCard>
        )
    }
}

export default Task