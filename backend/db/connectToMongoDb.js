import mongoose from "mongoose";

const connectToMongoDb=async ()=>{
    try {
await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connect to MongoDb")
    }catch (e) {
        console.log("Error connection to MongoDb",e.message)
    }
}
export default connectToMongoDb