import { Router } from "express";
import { handleAddBlog, handleViewBlog } from "../controllers/blog.controller.js";
import multer from "multer";
import path from "path";
import { handleAddComment } from "../controllers/comment.controller.js";

const router = Router();

const storage = multer.diskStorage({
    destination:  function(req,file,cb){
        cb(null,path.resolve(`./public/uploads/`))
    },
    filename: function(req,file,cb) {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null,fileName);
    }
});

const upload = multer({storage: storage})

router.get("/add-new",(req,res) => {
    return res.render("addBlog",{
        user: req.user
    })
})

router.get("/:id",handleViewBlog)

router.post("/",upload.single("coverImage"),handleAddBlog)

router.post("/comment/:blogId",handleAddComment)

export default router;