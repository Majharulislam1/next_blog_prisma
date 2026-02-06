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


const getAllPosts = async (req: Request, res: Response) => {
    try {

        const posts = await PostService.getAllPosts();
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
    getAllPosts
}