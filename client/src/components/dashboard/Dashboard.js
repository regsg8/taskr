import React from 'react'
import TaskView from './TaskView'
import QuoteFooter from './QuoteFooter'

import { StyledGridPage } from '../../elements/index'

const Dashboard = props => {
    
    return (
        <StyledGridPage>
              <TaskView {...props}/>
            <QuoteFooter quote={props.quote}/>
        </StyledGridPage>
    )
}

export default Dashboard
