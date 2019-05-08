import React from "react";
import AddBoard from "./AddBoard";
import Board from "./Board";
import { StyledBoardView } from '../../elements/index'

const BoardView = props => {
  const { updateThisBoard, isEdit, onEdit } = props;
  const mappedBoards = props.boards.map((board, i) => {
    return <Board key={i} {...board} {...props} updateThisBoardName={updateThisBoard.name} updateThisBoardId={updateThisBoard._id}/>;
  });
  return (
    <StyledBoardView>
      {mappedBoards}
      <AddBoard
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        value={props.addBoard}
        updateThisBoardName={updateThisBoard.name}
        updateThisBoardId={updateThisBoard._id}
        isEdit={isEdit}
        onEdit={onEdit}
      />
    </StyledBoardView>
  );
};

export default BoardView;
