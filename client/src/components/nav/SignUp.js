import React from 'react'
import { StyledLoginCard, StyledLoginButton } from '../../elements/index'

const SignUp = props => {
    
    
    return (
        <StyledLoginCard>
            Sign Up <br></br>
            First Name: <input name='fName' placeholder='Enter first name' onChange={props.handleChange}></input> <br></br>
            Last Name: <input name='lName' placeholder='Enter last name' onChange={props.handleChange}></input> <br></br>
            Username: <input name='username' placeholder='Enter username' onChange={props.handleChange}></input> <br></br>
            Password: <input name='password' placeholder='Enter password here' onChange={props.handleChange} type='password'></input> <br></br>
            <StyledLoginButton name='display' onClick={props.displayToggle}>
                Back
            </StyledLoginButton>
            <StyledLoginButton onClick={props.registerUser}>
                Sign Up
            </StyledLoginButton>
        </StyledLoginCard>
    )
}

export default SignUp