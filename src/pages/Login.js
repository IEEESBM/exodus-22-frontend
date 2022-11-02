import React from 'react';
import './Login.css';
import LoginComp from './LoginComp';

function Login()
{ return( 
<div className='login-page'>
<div className='title'>Login</div>
<div className='login-box'>
 <LoginComp />
</div>
</div>
)
}

export default Login;