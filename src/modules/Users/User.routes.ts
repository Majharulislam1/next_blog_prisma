import { Router } from "express";
import { userControllers } from "./User.controllers";



export const userRouter = Router();

userRouter.post('/createUser',userControllers.createUserControllers);
userRouter.get('/',userControllers.getAllUserControllers);
userRouter.get("/:id",userControllers.getSingleUser);
userRouter.patch("/update/:id",userControllers.UpdateUserControllers);
userRouter.delete("/:id",userControllers.deleteUserControllers);

