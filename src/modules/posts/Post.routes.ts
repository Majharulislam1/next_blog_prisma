import { Router } from "express";
import { PostControllers } from "./Post.controllers";



export const postRouter = Router();

postRouter.post("/create",PostControllers.create_post);
postRouter.get("/",PostControllers.getAllPosts);