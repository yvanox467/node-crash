const express = require('express');
const blogController = require('../controller/blogController');
const router = express.Router();
router.get('/',blogController.allBlogs);

router.get('/:id',blogController.singleBlog);

router.post('/',blogController.createBlog);

router.delete('/:id',blogController.deleteBlog)

module.exports = router;