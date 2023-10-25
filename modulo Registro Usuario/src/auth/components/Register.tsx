import * as React from 'react';
import SocialMediaOptions from './SocialMediaOptions';
import useRegister from '../hook/RegisterHook';


const Register: React.FunctionComponent = () => {
    const {userName, email, password, handleUserNameChange, 
        handleEmailChange, handlePasswordChange, handelRegister}= useRegister();
    return <form onSubmit={handelRegister}>
        <h1>Create Account</h1>
        <SocialMediaOptions />
        <span>
            or use your email for registration
        </span>
        <input type="text" placeholder='UserName' 
        value={userName} onChange={handleUserNameChange}/>
        <input type="email" placeholder='Email' 
        value={email} onChange={handleEmailChange}/>
        <input type="password" placeholder='Password' 
        value={password} onChange={handlePasswordChange}/>
        <button type='submit'>
            Sign Up
        </button>
    </form>;
}

export default Register;