import styled from 'styled-components'

export const StyledButton = styled.button`
    min-width: 80px;
    border-radius: 15px;
    transition: linear 100ms all;
    &:focus {
        outline: none;
    }
    &:hover {
        box-shadow: 2px 2px darkslategray;
    }
`;

export const StyledLoginButton = styled(StyledButton)`
    background-color: #fea42a;
    margin: 5px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    margin-top: 10px;
    height: 30px;
`;
export const StyledLogoutButton = styled(StyledButton)`
    background-color: #fea42a;
    
    margin-top: auto;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 30px;
    border: 1px solid #88D70A;
    
`;

export const StyledBoardButton = styled(StyledButton)`
    background-color: #fea42a;
    margin: 5px;
    margin-top: 0;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    margin-bottom: 10px;
    height: 20px;
`;

export const StyledIconDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    color: #fea42a;
    text-shadow: black 1px 1px;
`;

export const StyledBoardIconDiv = styled(StyledIconDiv)`
    justify-content: space-evenly;
    margin-bottom: 2px;
    text-shadow: black 1px 1px;
`;