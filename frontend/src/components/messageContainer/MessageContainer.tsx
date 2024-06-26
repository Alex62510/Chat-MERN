import Messages from "./Messages.tsx";
import MessageInput from "./MessageInput.tsx";
import NoChatSelected from "./NoChatSelected.tsx";
import useConversation from "../../store/useConversation.ts";
import {useEffect} from "react";


const MessageContainer = () => {
    const {selectedConversation,setSelectedConversation}=useConversation()

    useEffect(() => {
        return ()=>{
            //clean up
            setSelectedConversation(null)
        }
    }, [setSelectedConversation]);


    return (
        <div className={`md:min-w-[450px] flex flex-col `}>
            {!selectedConversation ? <NoChatSelected/>: <>
                <div
                    className="hidden sm:flex gap-2 items-center bg-sky-500 px-4 py-2 mb-2">
                    <span className="label-text text-gray-300">To: </span>
                    <span
                        className="text-gray-300 font-bold">{selectedConversation.fullName}</span>
                </div>
                <Messages/>
                <MessageInput/>
            </>}

        </div>
    );
};

export default MessageContainer;