import mongoose from "mongoose";

const DB_NAME = "Blogify";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected!! DB host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB Connection Failed",error)
        process.exit(1)
    }
}

export default connectDB