import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextType } from "../../../../types/AuthTypes";
import { AuthContext } from "../../../../context/auth/AuthContext";

const useSidebar = () => {
    const navigate = useNavigate();
    const { logout, user } = useContext<AuthContextType>(AuthContext as React.Context<AuthContextType>);


    const handleLogOut = async() => {
        await logout()
    };

    const navigateTo = (ruta:string, replace:boolean) =>{
        navigate(ruta, {
            replace: replace
        })
    }

    return { handleLogOut, user, navigateTo }
}

export default useSidebar;