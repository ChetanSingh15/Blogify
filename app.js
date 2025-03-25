import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { checkForAuthenticationCookie } from "./middlewares/authentication.js";
import { Blog } from "./models/blog.model.js";

const app = express();

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")))


//routes
import userRoute from "./routes/user.routes.js"
import blogRoute from "./routes/blog.routes.js"

//routes declaration
app.use("/user",userRoute);
app.use("/blog",blogRoute)


app.get("/",async (req,res) => {
    const allBlogs = await Blog.find({});
    res.render("home",{
        user: req.user,
        blogs: allBlogs,
    });
})


export{
    app
}