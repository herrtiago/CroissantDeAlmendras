import * as React from 'react';
import styles from '../Login.module.css'

interface IToggleLoginPanelProps {
    handleToggle: () => void
}

const ToggleLoginPanel:React.FunctionComponent<IToggleLoginPanelProps> = ({handleToggle}) => {
    return <div className={`${styles.toggle_panel} ${styles.toggle_left}`}>
        <h1>Welcome Back</h1>
        <p>Enter your personal detail to use all
            of site features
        </p>
        <button className={styles.hidden}
            id='login'
            onClick={handleToggle}>
            Sign In
        </button>
    </div>;
}

export default  ToggleLoginPanel;
