import Conversation from "./Conversation.tsx";
import useGetConversations from "../../hooks/useGetConversations.ts";
import {getRandomEmoji} from "../../utils/emoji.ts";


const Conversations = () => {
    const {conversations, loading} = useGetConversations()
    console.log(conversations)
    return (
        <div className={'py-2 flex flex-col overflow-auto'}>
            {conversations.map((conversation, idx) => (
                <Conversation
                    conversation={conversation} key={conversation._id}
                    emoji={getRandomEmoji()}
                    lastIdx={idx === conversations.length - 1}/>
            ))}
            {loading ? <span className={'loading loading-spinner'}></span> : null}
        </div>
    );
};

export default Conversations;