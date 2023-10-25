import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";
import { AuthContextType, UserLogin } from "../../types/AuthTypes";

const useLogin = () => {
    const navigate = useNavigate();
    const { login } = useContext<AuthContextType>(AuthContext as React.Context<AuthContextType>);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleLogin = async(e: React.FormEvent) => {
        e.preventDefault();
        const user:UserLogin = {
            email:email,
            password:password
        }
        await login(user)
        navigate('/home', {
            replace: true
        })
    };

    return { email, password, handleEmailChange, handlePasswordChange, handleLogin }
}

export default useLogin;