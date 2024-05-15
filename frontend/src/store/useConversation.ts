import {create} from "zustand";
import {ConversationType, MessageType} from "../types/type.ts";

type StateType = {
    selectedConversation: ConversationType | null
    setSelectedConversation: (selectedConversation: ConversationType|null) => void,
    messages: MessageType[],
    setMessages: (messages: MessageType[]) => void
}

const useConversation = create<StateType>((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation: ConversationType|null) => set({selectedConversation}),
    messages: [],
    setMessages: (messages: MessageType[]) => set({messages}),
}));

export default useConversation