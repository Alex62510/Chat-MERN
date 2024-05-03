import User from "../models/user.models.js";

export const getUsersForSideBar = async (req, res) => {
    try {
        const loggInUserId = req.user._id
        const filtredUsers = await User.find({_id: {$ne: loggInUserId}}).select("-password")
        res.status(200).json(filtredUsers)
    } catch (e) {
        console.log("Error in getUsersForSideBar controller", e.message)
        res.status(500).json({error: "Internal server Error"})
    }
}