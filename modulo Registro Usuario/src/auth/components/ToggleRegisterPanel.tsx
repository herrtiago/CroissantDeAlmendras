import * as React from 'react';
import styles from '../Login.module.css'


interface IToggleRegisterPanelProps {
    handleToggle: () => void
}

const ToggleRegisterPanel: React.FunctionComponent<IToggleRegisterPanelProps> = ({handleToggle}) => {
    return <div className={`${styles.toggle_panel} ${styles.toggle_right}`}>
        <h1>Hellow Friend!</h1>
        <p>Register Whit your personal detail to use all
            of site features
        </p>
        <button className={styles.hidden}
            id='register'
            onClick={handleToggle}>
            Sign Up
        </button>
    </div>;
};

export default ToggleRegisterPanel;
