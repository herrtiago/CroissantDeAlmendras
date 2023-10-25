import { useState } from "react";

const useRegister = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleUserNameChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setUserName(e.target.value)
    }
    const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
    }
    const handelRegister = (e:React.FormEvent) =>{
        e.preventDefault()
        console.log('register')
    }
    return {userName, email, password, handleUserNameChange, handleEmailChange, handlePasswordChange, handelRegister}
}

export default useRegister;