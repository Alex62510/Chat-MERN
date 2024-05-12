import { createContext, useContext, useState, ReactNode } from "react";

export const AuthContext = createContext({ authUser: '', setAuthUser: (user: string) => {} });

export const useAuthContext = () => useContext(AuthContext);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
    const storedUser = localStorage.getItem('chat-user') ?? '';
    const [authUser, setAuthUser] = useState<string>(storedUser);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};
