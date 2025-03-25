import { Blog } from "../models/blog.model.js";
import { Comment } from "../models/comment.model.js";


const handleAddBlog = async (req,res) => {
    const { title , body } = req.body
    const blog = await Blog.create({
        title,
        body,
        createdBy: req.user._id,
        coverImageUrl: `/uploads/${req.file.filename}`
    })

    return res.redirect(`/blog/${blog._id}`);

}

const handleViewBlog = async (req,res) => {
    const blog = await Blog.findById(req.params.id).populate("createdBy");
    const comments = await Comment.find({blogId: req.params.id}).populate("createdBy");
    return res.render("blog",{
        user: req.user,
        blog,
        comments,
    })
}



export {
    handleAddBlog,
    handleViewBlog,
}