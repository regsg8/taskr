import React, { Component } from "react";
import { StyledLoginButton, StyledAddBoard } from "../../elements/index";

class AddBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.updateThisBoardName ? this.props.updateThisBoardName : '',
            _id: this.props.updateThisBoardId ? this.props.updateThisBoardId : '',
            display: true, 
        }
    }

    toggle = () => {
      this.setState(prevState => ({
          display: !prevState.display
      }))
  }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.updateThisBoardName !== this.props.updateThisBoardName){
            this.setState({ name : this.props.updateThisBoardName })
        }
    }

    boardHandleChange = e => {
        e.persist();
        const { value } = e.target;
        this.setState({ name : value, _id: this.props.updateThisBoardId });
      };
    
      handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.setState({name: ''})
      }

  render() {
    return (
      //This is where you would be able to add a board
      <StyledAddBoard>
        {this.state.display === true ? <i className="fas fa-plus-square fa-2x addBoard" onClick={this.toggle}></i>
        :
        (<form>
          <input
            name="name"
            placeholder="Enter Board Name..."
            onChange={this.boardHandleChange}
            value={this.state.name}
          />
          <br />
          <StyledLoginButton onClick={this.toggle}>Cancel</StyledLoginButton>
          <StyledLoginButton onClick={e => {this.handleSubmit(e)}}>Add Board</StyledLoginButton>
        </form>)
      }
      </StyledAddBoard>
    );
  }
}

export default AddBoard;
