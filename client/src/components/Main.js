import React, { Component } from "react";
import Landing from "./landing/Landing";
import Dashboard from "./dashboard/Dashboard";
import axios from "axios";
import Nav from "./nav/Nav";
import { withUserData } from "../context/userDataContext";
const TaskrAxios = axios.create();

TaskrAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

class Main extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isLoggedIn: false,
      userId: "",
      fName: "",
      lName: "",
      errorMessage: "",
      display: true,
      newUser: {},
      User: {
        boards: []
      },
      selectedBoard: "",
      quote: "",
      isEdit: false,
      updateThisBoard: ""
    };
  }

  //Working, Used on Nav -> Login / SignUp
  //Saves user data to State, calls updateNewUser
  handleChange = e => {
    const { name, value } = e.target;
    e.persist();
    this.setState({ [name]: value }, () => {
      this.updateNewUser();
    });
  };

  //Working, called by handleChange, saves state data to newUser
  updateNewUser = () => {
    this.setState({
      newUser: {
        name: `${this.state.fName} ${this.state.lName}`,
        username: this.state.username,
        password: this.state.password
      }
    });
  };

  // Working, Used on Nav -> SignUp
  registerUser = async e => {
    e.preventDefault();
    try {
      const res = await this.props.signup(this.state.newUser);
      this.setState({
        User: res.data,
        isLoggedIn: true
      });
    } catch (err) {
      this.setState({ errorMessage: err });
      console.log(err);
    }
  };

  //working, Used on Nav -> Login
  loginUser = async e => {
    e.preventDefault();
    try {
      const { username, password } = this.state;
      const res = await this.props.login({
        username: username,
        password: password
      });
      console.log(res.data);
      this.setState({ isLoggedIn: true }, () => {
        this.updateNewUser();
      }); //Board data not automatically rendering, using forceUpdate
    } catch (err) {
      this.setState({ errorMessage: err });
      console.log(err);
    }
  };

  logoutUser = () => {
    const res = this.setState(
      {
        isLoggedIn: false,
        username: "",
        password: "",
        userId: "",
        fName: "",
        lName: "",
        display: true,
        newUser: {},
        User: {
          boards: []
        },
        selectedBoard: "",
        quote: "",
        isEdit: false,
        updateThisBoard: ""
      },
      () => this.props.logout()
    );
    console.log(res);
  };

  //Working, Used on Landing to toggle login/signup displays
  displayToggle = e => {
    const { name } = e.target;
    e.persist();
    this.setState(prevState => ({
      [name]: !prevState.display
    }));
  };

  // Works, gets the quote of the
  // day and displays it in the header after login
  getQuote = () => {
    axios.get("http://quotes.rest/qod.json").then(res => {
      const quote = res.data.contents.quotes[0].quote;
      this.setState({ quote: quote });
    });
  };

  // NOT working - gets boards by user id
  getUserBoards = () => {
    TaskrAxios.get(`/api/boards/${this.props.user._id}`).then(res => {
      const data = res.data;
      this.setState(ps => {
        return {
          User: {
            ...ps.User,
            boards: data
          }
        };
      });
    });
  };

  deleteBoard = id => {
    TaskrAxios.delete(`/api/boards/board/${id}`);
    this.getUserBoards();
  };

  editBoard = (e, boardToEdit) => {
    e.preventDefault();
    TaskrAxios.put(`/api/boards/board/${boardToEdit._id}`, boardToEdit).then(
      res => {
        console.log(res.data);
        this.getUserBoards();
      }
    );
  };

  // "Add Board" functionality
  boardHandleSubmit = boardName => {
    if (boardName._id) {
      return this.editBoard(boardName);
    }
    TaskrAxios.post(`/api/boards/${this.props.user._id}`, boardName).then(
      res => {
        console.log(res.data);
        this.getUserBoards();
      }
    );
  };

  componentDidUpdate(prevProps) {
    if (prevProps.token !== this.props.token) {
      this.getUserBoards();
  }
}
  componentDidMount() {
    //  if(this.props.token){
    this.getUserBoards();
    //   }
    this.getQuote();
  }

  displayTasks = boardId => {
    // console.log(boardId)
    this.setState(ps => {
      return {
        selectedBoard: boardId
      };
    });
  };

  render() {
    const props = {
      loginUser: this.loginUser,
      logoutUser: this.logoutUser,
      registerUser: this.registerUser,
      handleChange: this.handleChange,
      boardHandleSubmit: this.boardHandleSubmit,
      displayToggle: this.displayToggle,
      postUserBoards: this.postUserBoards,
      deleteBoard: this.deleteBoard,
      updateBoard: this.editBoard,
      displayTasks: this.displayTasks,
      token: this.props.token,
      ...this.state,
      ...this.props
    };
    const styles = {
      mainDiv: {
        display: "grid",
        gridTemplateColumns: "230px auto"
      }
    };
    return (
      <div>
        <div style={styles.mainDiv}>
          <Nav {...props} />
          {!this.props.token ? (
            <Landing {...props} />
          ) : (
            <Dashboard {...props} />
          )}
        </div>
      </div>
    );
  }
}

export default withUserData(Main);
