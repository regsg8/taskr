import React from 'react'
import { StyledQuoteFooter } from '../../elements/index'

const QuoteFooter = props => {
    return (
        <StyledQuoteFooter>
            {props.quote}
        </StyledQuoteFooter>
    )
}

export default QuoteFooter
