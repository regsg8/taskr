import React from 'react'
import { StyledHeader } from '../elements/index'

const Header = (props) => {
    //styles can be updated + deleted after learning styling components
    const styles = {
        h1: {
            margin: '0 auto 30px auto',
            fontSize: '80px',
            color: '#0c2716',
            display: 'inline-block',
        },
        img:{
            height: '55px',
            width: '45px',
            position: 'relative',
            display: 'inline-block',
            marginTop: '20px',
            right: '10px'
        }
    }
    const { isLoggedIn, quote } = props
    return (
        <StyledHeader>
            {!isLoggedIn ? <h1 style={styles.h1}>t a s k ' r</h1> : <h1>{quote}</h1>}
        </StyledHeader>
    )
}

export default Header
