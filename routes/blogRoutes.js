const express = require('express');
const blogController = require('../controller/blogController');
const router = express.Router();


router.get('/blogs',blogController.allBlogs);
  /**
   * @swagger
   *  tags:
   *  name: Blog
   *  description: Blog managing APIs
   * /blogs:
   *  get:
   *   summary: Fetch all blogs
   *   tags: [Blog]
   *   responses:
   *    200:
   *      description: List all blogs
   *      content:
   *        application/json:
   *          schema:
   *            type: array
   *            properties:
   *                data:
   *                  type: array
   *                status:
   *                  type: integer
   *                message:
   *                  type: string
   *            example:
   *                data: [
   *                    {
   *                       "_id": "6408346dd82cffa860074200",
   *                      "title": "My First Blog",
   *                     "content": "hello there",
   *                    "likes": 2,
   *                       "thumbnail": "sdasdas",
   *                       "createdAt": "2023-03-08T07:08:29.851Z",
   *                       "updatedAt": "2023-03-08T07:08:29.851Z",
   *                       "__v": 0
   *                   }
   *                  ]
   *                status: 200
   *                message: "blogs fetched successfully"
   */

router.get('/:id',blogController.singleBlog);

  /**
   * @swagger
   * tags:
   *  name: Blog
   *  description: Blog managing APIs
   * /blogs/{id}:
   *  get:
   *   summary: Fetch a single blog by ID
   *   tags: [Blog]
   *   parameters:
   *     - name: id
   *       in: path
   *       required: true
   *       description: The ID of the blog to return.
   *       schema:
   *         type: string
   *   responses:
   *    200:
   *      description: List a blog
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *                data:
   *                  type: object
   *                status:
   *                  type: integer
   *                message:
   *                  type: string
   *            example:
   *                data:
   *                    {
   *                       "_id": "6408346dd82cffa860074200",
   *                      "title": "The blog name",
   *                     "content": "How are you",
   *                    "likes": 3,
   *                       "thumbnail": "sdasdas",
   *                       "createdAt": "2020-02-08T07:08:29.851Z",
   *                       "updatedAt": "2021-02-08T07:08:29.851Z",
   *                       "__v": 0
   *                   }
   *
   *                status: 200
   *                message: "blog fetched successfully"
   */
router.post('/create',blogController.createBlog);

 /**
 * @swagger
   *  post:
   *  tags: 
   *  name: Blog
   *  description: Blog managing APIs
   * /blogs/{id}:
   *  post:
   *   summary: create a new blog
   *   tags: [Blog]

   *    schema:
   *      Blog:
   *        type: object
   *        required:
   *          -title
   *          -author
   *          -content
   *           -thumbnail
   *        properties:
   *          id:
   *              type: string
   *              description: autogenerated blog Id
   *          title:
   *              type: string
   *              description: Title of your blog
   *          author:
   *              type: string
   *              description: author of your blog
   *          content:
   *              type: string
   *              description: Content of your Blog
   *          thumbnail:
   *              type: string
   *              description: thumbnail image for your blog
   *        example:
   *          id: 6408346dd82cffa860074222
   *          title: My first blog
   *          author: Peter Mark
   *          content: This is my first blog
   *          thumbnail: public/images/first_blog.png
   */


 router.put('/:id',blogController.updateBlog)


router.delete('/:id',blogController.deleteBlog)

 /**
   * @swagger
   * tags:
   *  name: Blog
   *  description: Blog managing APIs
   * /blogs/{id}:
   *  delete:
   *   summary: Delete a blog
   *   tags: [Blog]
   *   parameters:
   *     - name: id
   *       in: path
   *       required: true
   *       description: The ID of the blog to delete.
   *       schema:
   *         type: string
   *   responses:
   *    200:
   *      description: Deleted blog
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *                data:
   *                  type: object
   *                status:
   *                  type: integer
   *                message:
   *                  type: string
   *            example:
   *                data:
   *                    {
   *                       "_id": "6408346dd82cffa860074200",
   *                      "title": "The blog name",
   *                     "content": "How are you?",
   *                    "likes": 2,
   *                       "thumbnail": "sdasdas",
   *                       "createdAt": "2020-02-08T07:08:29.851Z",
   *                       "updatedAt": "2022-02-08T07:08:29.851Z",
   *                       "__v": 0
   *                   }
   *
   *                status: 200
   *                message: "blog deleted successfully"
   *    400:
   *      description: Authorization error
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *                status:
   *                  type: integer
   *                message:
   *                  type: string
   *            example:
   *                status: 400
   *                message: "You're not logged in"
   */
module.exports = router;



 