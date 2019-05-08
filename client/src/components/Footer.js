import React from 'react'
import { StyledFooter } from '../elements/index'
import taskr from '../resources/taskr.png'


const Footer = () => {
    const styles = {
        div: {
            margin: '20px',
        },
        img: {
            height: '25px',
            width: '25px'
        }
    }
    return (
        <StyledFooter>
            <img src={taskr} alt="dinosaur icon" style={styles.img}/>
        </StyledFooter>
    )
}

export default Footer
