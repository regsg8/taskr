import React, { Component } from "react";
import {
  StyledBoardIconDiv,
  StyledBoard,
  StyledBoardH2,
  StyledLoginButton
} from "../../elements/index";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleHighlight: false,
      edit: false,
      name: props.name,
      _id: props._id,
      progress: {
        percent: Math.floor(Math.random() * 100),
        numOfCompletedTask: 0,
        status: "success"
      }
    };
  }

  highlightToggle = () => {
    this.setState(ps => {
      return {
        toggleHighlight: !ps.toggleHighlight
      };
    });
  };

  highlightToggle = () => {
    this.setState(ps => {
      return {
        toggleHighlight: !ps.toggleHighlight
      };
    });
  };

  editToggle = () => {
    this.setState(prevState => {
      return {
        edit: !prevState.edit
      };
    });
  };

  boardHandleChange = e => {
    e.persist();
    const { value } = e.target;
    this.setState({ name: value });
  };

  componentDidUpdate() {
    if (
      this.props.selectedBoard !== this.props._id &&
      this.state.toggleHighlight
    ) {
      this.setState({ toggleHighlight: false });
    }
  }

  render() {
    const { name, _id, deleteBoard, updateBoard, displayTasks } = this.props;

    const theme = {
      error: {
        symbol: this.state.progress.percent + "%",
        trailColor: "pink",
        color: "red"
      },
      default: {
        symbol: this.state.progress.percent + "%",
        trailColor: "lightblue",
        color: "blue"
      },
      active: {
        symbol: this.state.progress.percent + "%",
        trailColor: "yellow",
        color: "orange"
      },
      success: {
        symbol: this.state.progress.percent + "%",
        trailColor: "fea42a",
        color: "#ff7300"
      }
    };
    return (
      <StyledBoard isToggled={this.state.toggleHighlight}>
        <StyledBoardH2
          onClick={() => {
            this.highlightToggle();
            displayTasks(_id);
          }}
        >
          {name}
        </StyledBoardH2>
        <Progress
          theme={theme}
          percent={this.state.progress.percent}
          status={this.state.progress.status}
        />
        <br />
        {this.state.edit === true ? (
          <form>
            <input
              name="name"
              placeholder="Enter Board Name..."
              onChange={this.boardHandleChange}
              value={this.state.name}
            />
            <br />
            <StyledLoginButton onClick={this.editToggle}>
              Cancel
            </StyledLoginButton>
            <StyledLoginButton
              onClick={e => {
                updateBoard(e, { _id: this.state._id, name: this.state.name });
                this.editToggle();
              }}
            >
              Update Board
            </StyledLoginButton>
          </form>
        ) : (
          <span />
        )}
        {this.state.toggleHighlight && (
          <StyledBoardIconDiv>
            <i className="fas fa-trash" onClick={() => deleteBoard(_id)} />
            <i className="fas fa-edit" onClick={this.editToggle} />
          </StyledBoardIconDiv>
        )}
      </StyledBoard>
    );
  }
}

export default Board;
