import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { UserType } from "../types/type.ts";

interface AuthContextProps {
    authUser: UserType | null;
    setAuthUser: (user: UserType | null) => void;
}

export const AuthContext = createContext<AuthContextProps>({
    authUser: null,
    setAuthUser: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
    const [authUser, setAuthUser] = useState<UserType | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('chat-user');
        if (storedUser) {
            try {
                const parsedUser: UserType = JSON.parse(storedUser);
                setAuthUser(parsedUser);
            } catch (error) {
                console.error("Failed to parse stored user", error);
            }
        }
    }, []);

    const handleSetAuthUser = (user: UserType | null) => {
        if (user) {
            localStorage.setItem('chat-user', JSON.stringify(user));
        } else {
            localStorage.removeItem('chat-user');
        }
        setAuthUser(user);
    };

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser: handleSetAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};