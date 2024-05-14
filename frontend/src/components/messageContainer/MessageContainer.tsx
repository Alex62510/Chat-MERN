import Messages from "./Messages.tsx";
import MessageInput from "./MessageInput.tsx";
import NoChatSelected from "./NoChatSelected.tsx";
import useConversation from "../../store/useConversation.ts";


const MessageContainer = () => {
    const {selectedConversation,setSelectedConversation}=useConversation()
    return (
        <div className={'md:min-w-[450px] flex flex-col'}>
            {!selectedConversation ? <NoChatSelected/>:<>
                <div className={'bg-slate-500 px-4 py-2 mb-2'}>
                    <span className={'label-text'}>To: </span>
                    <span className={'text-gray-900 font-bold'}>User Name</span>
                </div>
                <Messages/>
                <MessageInput/>
            </> }

        </div>
    );
};

export default MessageContainer;