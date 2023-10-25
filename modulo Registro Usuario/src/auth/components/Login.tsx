import * as React from 'react';
import useLogin from '../hook/LoginHook';
import SocialMediaOptions from './SocialMediaOptions';

const Login:React.FunctionComponent = () => {
    const {email, password, handleEmailChange, handlePasswordChange, handleLogin} = useLogin();
    return <form onSubmit={handleLogin}>
        <h1>Sign In</h1>
        <SocialMediaOptions/>
        <span>
            or use your email and password
        </span>
        <input type="email" placeholder='Email' 
        value={email} onChange={handleEmailChange}/>
        <input type="password" placeholder='Password' 
        value={password} onChange={handlePasswordChange}/>
        <a href="#">Forget your password</a>
        <button type='submit'>
            Sign In
        </button>
    </form>;
}

export default Login;