import { useState } from 'react';

const useToggle = (initialValue: boolean = false, 
    styles: CSSModuleClasses[string]) => {

    const [isActive, setIsActive] = useState(initialValue);

    const activeClass = isActive ? styles : '';

    const handleToggle = () => {
        setIsActive(!isActive)
    }

    return { handleToggle, activeClass };
}

export default useToggle;
