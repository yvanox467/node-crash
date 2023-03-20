const express = require('express');
const authentController = require('../controller/authentController');
const authRouter = express.Router();


authRouter.get("/profile", authentController.profile);
authRouter.post("/admin/signup", authentController.signup);


authRouter.post("/login", authentController.login);
authRouter.post("/logout", authentController.logout);

module.exports = authRouter;