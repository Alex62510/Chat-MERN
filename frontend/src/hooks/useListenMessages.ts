import { useEffect } from "react";
import { MessageType } from "../types/type.ts";

import useConversation from "../store/useConversation.ts";
import {useSocketContext} from "../contex/SocketContext.tsx";
import notificationSound from '../assets/sounds/notification.mp3'

const UseListenMessages = () => {
    const { socket } = useSocketContext();
    const { setMessages } = useConversation();

    useEffect(() => {
        const handleMessage = (newMessage: MessageType) => {
            newMessage.shouldShake=true
            const sound=new Audio(notificationSound)
            sound.play()
            setMessages((prevMessages: MessageType[]) => [...prevMessages, newMessage]);
        };

        socket?.on("newMessage", handleMessage);

        return () => {
            socket?.off("newMessage", handleMessage);
        };
    }, [socket, setMessages]);

    return null;
};

export default UseListenMessages;