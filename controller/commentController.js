const Blog = require("../models/blog");

module.exports.index = (req,res, next)=>{
    Blog.findById(req,params,blogId)
    .then((blog )=> {
        if (blog !=null){
            res.status(200).json({
                data:blog.comment,
                status:200,
                message:"Successfully received comment",
            });
        } else{
        res.status(404).json({ statusbar:404, message:"Blog not found"});
    }
})
.catch((err)=>{
    res.status(404).json({ status:400,message:"Undefined blog id"});
});
};

module.exports.store = (req,res)=>{
    Blog.findById(req.params.blogId)
    .then((blog)=>{
        if(blog != null){
            blog.comment.push(req.body);
            blog.save().then((blog)=>{
                res.status(200).json({
                    status:200,
                    data:blog.comment,
                    message:"Comment has been added successfully",
                });
            });
        }else{
            res.status(404).json({ status:400,message:"Blog not found"});
        }
    })
    .catch((err)=>{
        res.status(404).json({ status:400,message:"Un defined blog id"});
    });
};