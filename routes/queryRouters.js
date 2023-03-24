const express = require("express");
const queryController = require("../controllers/queryController");
const { authMiddleware } = require("../middleware/authMiddleware");
const queryRouter = express.Router();

queryRouter
  .route("/")
  /**
   * @swagger
   * tags:
   *  name: Queries
   *  description: Queries managing APIs
   * /queries:
   *  get:
   *   summary: Fetch all queries
   *   tags: [queries]
   *   responses:
   *    200:
   *      description: List all queries
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
   *                       "name": "Peterson ",
   *                       "message": "Hello world!",
   *                       "createdAt": "2022-10-08T07:08:29.851Z",
   *                       "updatedAt": "2023-03-08T07:08:29.851Z",
   *                       "__v": 0
   *                   }
   *                  ]
   *                status: 200
   *                message: "queries fetched successfully"
   */
  .get(authMiddleware, queryController.index)
  /**
   * @swagger
   * tags:
   *  name: Queries
   *  description: Queries managing APIs
   * /queries:
   *  post:
   *   summary: Creating new query
   *   tags: [quiries]
   *   requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *              type: object
   *              properties:
   *                names:
   *                  type: string
   *                message:
   *                  type: string
   *              example:
   *                names: "Peterson"
   *                message: "Hello world!"
   *   responses:
   *    200:
   *      description: List a query
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
   *                       "visitor_names": "John Doe",
   *                       "visitor_message": "Hello there",
   *                       "createdAt": "2022-10-08T07:08:29.851Z",
   *                       "updatedAt": "2023-03-08T07:08:29.851Z",
   *                       "__v": 0
   *                   }
   *
   *                status: 200
   *                message: "query sent successfully"
   */
  .post(queryController.store);

queryRouter
  .route("/:id")
  /**
   * @swagger
   * tags:
   *  name: Quiries
   *  description: Queries managing APIs
   * /quiries/{id}:
   *  get:
   *   summary: Fetch a query by ID
   *   tags: [queries]
   *   parameters:
   *     - name: id
   *       in: path
   *       required: true
   *       description: The ID of the query to return.
   *       schema:
   *         type: string
   *   responses:
   *    200:
   *      description: List a query
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
   *                       "name": "Peterson",
   *                       "message": "Hello world!",
   *                       "createdAt": "2023-03-08T07:08:29.851Z",
   *                       "updatedAt": "2023-03-08T07:08:29.851Z",
   *                       "__v": 0
   *                   }
   *
   *                status: 200
   *                message: "Query fetched successfully"
   */
  .get(authMiddleware, queryController.show);
module.exports = queryRouter;
