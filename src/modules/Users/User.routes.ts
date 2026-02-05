import { Router } from "express";
import { userControllers } from "./User.controllers";



export const userRouter = Router();

userRouter.post('/createUser',userControllers.createUserControllers);

