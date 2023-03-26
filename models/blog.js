const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author:{
        type: String,
        require: true
    },
    body:{
        type: String,
        required: true
    },
    picture:{
        type:String,

    },
    cloudinary_id:{
        type:String,
    }
},{ timestamps: true});

const Blog = mongoose.model('blog',blogSchema);
module.exports = Blog;