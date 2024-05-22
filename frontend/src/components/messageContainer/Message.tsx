import {MessageType} from "../../types/type.ts";
import {useAuthContext} from "../../contex/AuthContext.tsx";
import useConversation from "../../store/useConversation.ts";
import {extractTime} from "../../utils/extractTime.ts";

type Props = {
    message: MessageType
}

const Message = ({message}: Props) => {
    const {authUser} = useAuthContext()
    const {selectedConversation} = useConversation()
    const fromMe = message.senderId === authUser?._id
    const formatedTime = extractTime(message.createdAt)
    const chatClassName = fromMe ? 'chat-end' : 'chat-start'
    const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-blue-500" : ""
    const shakeClass = message.shouldShake ? 'shake' : ''
console.log(profilePic)
    return (
        <div className={`chat ${chatClassName}`}>
            <div className={'chat-image avatar'}>
                <div className={'w-10 rounded-full'}>
                    <img
                        src={profilePic}
                        alt="user avatar"/>
                </div>
            </div>
            <div
                className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
            <div
                className={'chat-footer text-xs opacity-50 flex gap-1 items-center'}>{formatedTime}
            </div>

        </div>
    );
};

export default Message;