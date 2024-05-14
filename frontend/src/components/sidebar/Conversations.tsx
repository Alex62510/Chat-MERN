import Conversation from "./Conversation.tsx";
import useGetConversations from "../../hooks/useGetConversations.ts";



const Conversations = () => {
    const {conversations, loading} = useGetConversations()
console.log(conversations)
    return (
        <div className={'py-2 flex flex-col overflow-auto'}>
            {conversations.map((conversation) => (
                <Conversation conversation={conversation} key={conversation._id} emoji={}/>
            ))}
            {loading?<span className={'loading loading-spinner'}></span>:null}
        </div>
    );
};

export default Conversations;