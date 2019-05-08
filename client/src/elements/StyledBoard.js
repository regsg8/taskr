import styled from "styled-components";

export const StyledBoard = styled.div`
  border: ${props =>
    props.isToggled !== true ? "1px solid #88d70a" : "3px solid #fea42a"};
  background-color: ${props =>
    props.isToggled !== true ? "#40a700" : "#88D70A"};
  color: ${props => (props.isToggled !== true ? "#88D70A" : "black")};
  text-shadow: ${props =>
    props.isToggled !== true ? "1px 1px black" : "none"};
  border-radius: 10px 0px 0px 10px;
  margin: 2px;
  margin-right: 5px;
  transition: linear 50ms all;
`;

export const StyledAddBoard = styled.div`
  border: "1px solid #88d70a";
  background-color: "#40a700";
  border-radius: 10px 0px 0px 10px;
  border-right: none;
  margin: 2px;
  margin-right: 0px;
`;

export const StyledBoardH2 = styled.h2`
  margin: 5px;
  background-color: ${props => props.isToggled && "#88D70A"};
`;

export const StyledBoardView = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-right: 0px;
`;
