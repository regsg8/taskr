import React from 'react'
import { StyledLoginCard, StyledLoginButton } from '../../elements/index'

const Login = props => {
    return (
        <StyledLoginCard>
            Login <br></br>
            Username: <input name='username' placeholder='Enter username here' onChange={props.handleChange}></input> <br></br>
            Password: <input name='password' placeholder='Enter password here' onChange={props.handleChange}  type='password'></input> <br></br>
            <StyledLoginButton name='display' onClick={props.displayToggle}>
                Sign Up
            </StyledLoginButton>
            <StyledLoginButton onClick={props.loginUser}>
                Continue
            </StyledLoginButton>
        </StyledLoginCard>
    )
}

export default Login
