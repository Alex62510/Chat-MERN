export const sendMessage=async (req,res)=>{
try {

}catch (e) {
    console.log("Error in sendMessage controller", e.message)
    res.status(500).json({error: "Internal server Error"})
}
}