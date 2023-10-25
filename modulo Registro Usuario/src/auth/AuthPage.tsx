import * as React from 'react';
import styles from './Login.module.css'
import Register from './components/Register';
import Login from './components/Login';
import ToggleLoginPanel from './components/ToggleLoginPanel';
import ToggleRegisterPanel from './components/ToggleRegisterPanel';
import useToggle from '../shared/hooks/ToggleHook';



const AuthPage: React.FunctionComponent = () => {
    const { handleToggle, activeClass } = useToggle(false,styles.active);
    return (
        <div className={styles.body}>
            <div className={`${styles.container} ${activeClass}`} id='container'>
                <div className={`${styles.form_container} ${styles.sign_up}`}>
                    <Register/>
                </div>
                <div className={`${styles.form_container} ${styles.sign_in}`}>
                    <Login />
                </div>
                <div className={styles.toggle_container}>
                    <div className={styles.toggle}>
                        <ToggleLoginPanel handleToggle = {handleToggle}/>
                        <ToggleRegisterPanel handleToggle = {handleToggle}/>
                    </div>
                </div>
            </div>
        </div>
    );



    
};


export default AuthPage;
