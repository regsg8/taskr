import styled from 'styled-components'

export const StyledFlex = styled.div`
    display: flex;
    align-content: center;
    text-align: center;
    justify-content: center;
`;

export const StyledFlexPage = styled(StyledFlex)`
    background-color: #339dd4;
    padding: 20px;
    font-size: 26px;
    font-weight: bold;
`;

export const StyledTaskPage = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: flex-start;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 20px;
`;