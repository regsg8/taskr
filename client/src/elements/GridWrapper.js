import styled from 'styled-components'

export const StyledGrid = styled.div`
    display: grid;
    align-content: center;
    text-align: center;
    justify-content: center;
`;

export const StyledGridPage = styled(StyledGrid)`
    background-color: #339dd4;
    padding: 20px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 26px;
    font-weight: bold;
    align-content: center;
    justify-content: center;
    vertical-align: center;
    grid-template-rows: auto 20px;
    position: relative;
`;