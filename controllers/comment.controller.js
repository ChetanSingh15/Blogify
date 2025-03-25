import { Comment } from "../models/comment.model.js";

const handleAddComment = async (req,res) => {
    const { content } = req.body;
    const comment = await Comment.create({
        content,
        blogId: req.params.blogId,
        createdBy: req.user._id,
    })
    return res.redirect(`/blog/${req.params.blogId}`)
}

export { 
    handleAddComment
}