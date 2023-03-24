const Blog = require('../models/blog')

module.exports.allBlogs = (req,res) => {
    Blog.find().then((blogs)=>{
            res.status(200).json({data:blogs, status:200, message:'blogs fetched without errors'})
    }).catch((err)=>{
        res.json({data:[], status:400, message:err.message})
    })
}

module.exports.singleBlog = (req,res) => {
    Blog.findById(req.params.id)
    .then((blog)=>{
        res.json({
            data: [blog],
            status: 200,
            message: "blog fetched successfully",
        });
    })
    .catch((err)=> console.log(err));
};
module.exports.createBlog = (req,res) => {
    const blog = new Blog(req.body)
    blog.save().then((result)=>{
        res.status(200).json({data:[result], status:200, message:'blog created successfully'})
    }).catch((err)=>{
        res.json({data:[], status:400, message:err.message})
    })
}
module.exports.deleteBlog = (req,res) => {
    Blog.findByIdAndDelete(req.params.id)
    .then((result)=>
    res.json({
        data: result,
        status:200,
        message: "blog deleted successfully",
    })
    )
    .catch((err) => console.log(err));
};

module.exports.updateBlog = (req,res) =>{
    Blog.findByIdAndUpdate(req.params.id)
    .then((result) =>
    res.json({
        data:result,
        status:200,
        message: "blog updated successfully"
    })
    )
    .catch((err) => console.log(err));
};

