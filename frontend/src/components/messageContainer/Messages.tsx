import useGetMessage from "../../hooks/useGetMessage.ts";
import MessageSkeleton from "../skeletons/MessageSkeleton.tsx";
import Message from "./Message.tsx";

const Messages = () => {
    const {messages, loading} = useGetMessage()
    console.log(messages)
    return (
        <div className={'px-4 flex-1 overflow-auto'}>
            {!loading && messages.length > 0 &&messages.map((message) => (
                <Message key={message._id} message={message}  />
            ))}
            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx}/>)}
            {!loading && messages.length === 0 &&
                <p>Send message to start the conversation</p>}
        </div>
    );
};

export default Messages;