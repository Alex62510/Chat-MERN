import {createContext, ReactNode, useEffect, useState} from "react";
import {useAuthContext} from "./AuthContext.tsx";
import {io} from "socket.io-client";

export const SocketContext = createContext({})

interface SocketProviderProps {
    children: ReactNode;
}

export const SocketContextProvider = ({children}: SocketProviderProps) => {
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser} = useAuthContext()

    useEffect(() => {
        if (authUser) {
            const socket = io('http://localhost:8000');
            setSocket(socket)
            return () => {
                socket.close()
            }
        } else {
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }
    }, []);

    return <SocketContext.Provider
        value={{socket, onlineUsers}}>{children}</SocketContext.Provider>
}