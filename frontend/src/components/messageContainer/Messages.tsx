import useGetMessage from "../../hooks/useGetMessage.ts";
import MessageSkeleton from "../skeletons/MessageSkeleton.tsx";
import Message from "./Message.tsx";
import {useEffect, useRef} from "react";
import useListenMessages from "../../hooks/useListenMessages.ts";

const Messages = () => {
    const {messages, loading} = useGetMessage()
    const lastMessageRef = useRef<HTMLDivElement | null>(null);
    useListenMessages()
    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({})
        }, 100)
    }, [messages]);
    return (
        <div className={'px-4 flex-1 overflow-auto'}>
            {!loading && messages.length > 0 && messages.map((message) => (
                <div key={message._id} ref={lastMessageRef}><Message message={message}/>
                </div>
            ))}
            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx}/>)}
            {!loading && messages.length === 0 &&
                <p>Send message to start the conversation</p>}
        </div>
    );
};

export default Messages;