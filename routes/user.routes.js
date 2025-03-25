import { Router } from "express";
import { handleUserSignup , handleUserSignin, handleUSerLogout } from "../controllers/user.controller.js";

const router = Router();

router.get("/signin",(req,res) => {
    return res.render("signin");
})

router.get("/signup",(req,res) => {
    return res.render("signup");
})


router.post('/signup', handleUserSignup)
router.post('/signin', handleUserSignin)
router.get("/logout",handleUSerLogout)

export default router;