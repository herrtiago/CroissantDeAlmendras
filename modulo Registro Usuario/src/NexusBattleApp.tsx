import AuthProvider from "./context/auth/AuthProvider"
import AppRouter from "./router/AppRouter"

export const NexusBattleApp = () =>{
    return(
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}