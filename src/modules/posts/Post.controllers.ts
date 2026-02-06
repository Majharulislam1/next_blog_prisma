import type { Request, Response } from "express";
import { PostService } from "./Post.service"



const create_post = async (req: Request, res: Response) => {
    try {
        const post = await PostService.createPostService(req.body);
        res.send({
            success: true,
            message: 'Create Post successfully',
            post
        })

    } catch (error) {
        console.log(error)
    }
}


const createMultiplePostServices = async (req: Request, res: Response) => {
    try {
        const post = await PostService.createMultiplePostService(req.body);
        res.send({
            success: true,
            message: 'Create Multiple Post successfully',
            post
        })

    } catch (error) {
        console.log(error)
    }
}






const getAllPosts = async (req: Request, res: Response) => {
    try {

        const page = Number(req.query.page) || 0;
        const limit = Number(req.query.limit) || 10;


        

        const posts = await PostService.getAllPosts({page,limit});
        res.send({
            success: true,
            message: 'getAll post successfully',
            posts
        })

    } catch (error) {
        console.log(error)
    }
}





export const PostControllers = {
    create_post,
    getAllPosts,
    createMultiplePostServices
}