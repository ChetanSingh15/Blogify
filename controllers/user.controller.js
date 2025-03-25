import { User } from "../models/user.model.js";

const handleUserSignup = async (req,res) => {
    const { fullName, email, password } = req.body;

    // console.log(fullName);
    // console.log(email);
    // console.log(password);
    
    await User.create({
        fullName,
        email,
        password,
    })
    
    return res.redirect("/");
}

const handleUserSignin = async (req,res) => {

    const { email , password } = req.body; 

    try {
        const token = await User.matchPasswordAndGenerateToken(email,password);
    
        return res.cookie("token",token).redirect("/");
    } catch (error) {
        return res.render("signin",{
            error: "Incorrect Email or Password"
        })
    }
}

const handleUSerLogout = async (req,res) => {
    res.clearCookie("token").redirect("/");
}

export {
    handleUserSignup,
    handleUserSignin,
    handleUSerLogout
}