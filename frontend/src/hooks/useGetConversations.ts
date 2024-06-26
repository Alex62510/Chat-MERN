import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {ConversationType} from "../types/type.ts";


const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState<ConversationType[]>([]);
    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/users');
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error)
                }
                setConversations(data);
            } catch (e) {
                toast.error((e as Error).message)
            } finally {
                setLoading(false);
            }
        }
        getConversations()
    }, []);
    return {loading, conversations};
}
export default useGetConversations