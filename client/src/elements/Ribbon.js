import styled from 'styled-components'

export const StyledRibbon = styled.div`
    background-image: linear-gradient(#fea42a, #ff7300);
    padding: 5px;
`;

export const StyledHeader = styled(StyledRibbon)`
    border-bottom: darkslategray 1px solid;
`;

export const StyledFooter = styled(StyledRibbon)`
    border-top: darkslategray 1px solid;
`;

export const StyledQuoteFooter = styled.div`
    background-color: #aaaaaa;
    font-size: 14px;
    font-style: italic;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
`;