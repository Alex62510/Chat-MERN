import {useEffect, useState} from "react";
import useConversation from "../store/useConversation.ts";
import toast from "react-hot-toast";


const UseGetMessage = () => {
    const [loading, setLoading] = useState(true);
    const {messages, setMessages, selectedConversation} = useConversation()

    useEffect(() => {
        const getMessage = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/messages/${selectedConversation?._id}`);
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error)
                }
                setMessages(data);
            } catch (e) {
                toast.error((e as Error).message)
            } finally {
                setLoading(false);
            }
        }
        if (selectedConversation?._id) {
            getMessage()
        }
    }, [selectedConversation?._id,setMessages]);

    return {loading, messages};
};

export default UseGetMessage;