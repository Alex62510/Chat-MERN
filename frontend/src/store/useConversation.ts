import {create} from "zustand";
import {ConversationType} from "../types/type.ts";

type StateType = {
    selectedConversation: ConversationType | null
    setSelectedConversation: (selectedConversation: ConversationType|null) => void,
    messages: string[],
    setMessages: (messages: string[]) => void
}

const useConversation = create<StateType>((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation: ConversationType|null) => set({selectedConversation}),
    messages: [],
    setMessages: (messages: string[]) => set({messages}),
}));

export default useConversation