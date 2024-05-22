export type ConversationType = {
    fullName:string
    gender: "male"|"female"
    profilePic: string
    username: string
    __v: number
    _id: string
}
export type MessageType = {
    shouldShake:boolean
    _id: string,
    senderId: string,
    receiverId: string,
    message: string,
    createdAt: string,
}
export type UserType={
    profilePic: string
    fullName: string
    username: string
    _id: string
}