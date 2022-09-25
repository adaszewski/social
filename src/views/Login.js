import React from 'react';
import LoginForm from '../components/LoginForm';


const Login = (props) => {
  

    return (
        <LoginForm user={props.user} setUser={props.setUser} />


    )
}


export default Login;

