import { Context, createContext } from "react";
import { AuthContextType } from "../../types/AuthTypes";

export const AuthContext: Context<AuthContextType | undefined> = createContext<AuthContextType | undefined>(undefined);
