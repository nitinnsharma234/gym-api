const express =require("express");
const { signup,login } = require("../controllers/userController");
const userRouter= express.Router();

userRouter.post('/sign-in',login)

userRouter.post('/sign-up',signup)

module.exports=userRouter;