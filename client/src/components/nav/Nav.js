import React from "react";
import { StyledBase, StyledLogoutButton } from "../../elements/index";
import BoardView from "./BoardView";
import Login from "./Login";
import SignUp from "./SignUp";

const Nav = props => {
const { boardHandleSubmit, deleteBoard, updateBoard, updateThisBoard, isEdit, editBoard, displayTasks, userId, highLight, selectedBoard, token, logoutUser } = props;
  const { addBoard, boards } = props.User;
  let userName = props.user.username && props.user.username.toUpperCase()
  const styles = {
    buttonDiv: {
      marginTop: 'auto',
      display: 'flex',
  SVGAnimatedLength
    },
    logoutButton: {
      marginRight: '10px'
    }
  }
  return (
    <StyledBase>
      {!token ? (
        props.display === true ? (
          <Login {...props} />
        ) : (
          <SignUp {...props} />
        )
      ) : (
        <BoardView
        selectedBoard={selectedBoard}
          displayTasks={displayTasks}
          updateThisBoard={updateThisBoard}
          updateBoard={updateBoard}
          addBoard={addBoard}
          boards={boards}
          isEdit={isEdit}
          deleteBoard={deleteBoard}
          onSubmit={boardHandleSubmit}
          onEdit={editBoard}
          userId={userId}
          highLight={highLight}
        />
      )}
      <div style={styles.buttonDiv}>
        {userName}
        {token && <StyledLogoutButton onClick={logoutUser} style={styles.logoutButton}>logout</StyledLogoutButton>}
      </div>
    </StyledBase>
      
  
  );
};

export default Nav;
