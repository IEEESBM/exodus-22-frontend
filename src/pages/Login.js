import React from 'react';
import './Login.css';
import LoginComp from './LoginComp';
import {}from "react-router";


function Login()
{ return( 
<div className='login-page'>
<div className='title1'>Login</div>
<div className='login-box'>
 <LoginComp />
</div>
</div>
)
}

export default Login;