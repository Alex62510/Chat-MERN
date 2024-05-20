import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext.tsx";
import { io, Socket } from "socket.io-client";

interface ISocketContext {
    socket: Socket | null;
    onlineUsers: string[];
}

export const SocketContext = createContext<ISocketContext>({
    socket: null,
    onlineUsers: [],
});

interface SocketProviderProps {
    children: ReactNode;
}

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }: SocketProviderProps) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const newSocket = io('https://chat-mern-kus4.onrender.com',{
                query:{
                    userId:authUser._id
                }
            });
            setSocket(newSocket);
            newSocket.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users)
            })
            return () => {
                newSocket.close();
            };
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};