import connectDB from "./db/index.js";
import { app } from "./app.js"

const PORT = process.env.PORT || 8000;


connectDB()
.then(() => {
    app.on("error",(error) => {
        console.log("Error: ",error)
    })
    app.listen(PORT,() => {
        console.log(`Server is running on port: ${PORT}`)
    })
})
.catch((err) => {
    console.log("MonogoDB Connection Failed!!",err)
})
