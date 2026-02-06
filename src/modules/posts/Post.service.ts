import { prisma } from "../../config/prisma"
 
 
 
import { Prisma, type Post  } from "../../generated/prisma/client"



const createPostService = async(payload:Prisma.PostCreateInput):Promise<Post>=>{

      const createPost = await prisma.post.create({
          data:payload,
          include:{
             author:{
                  select: {
                    id: true,
                    name: true,
                    email: true
                }
             }
          }
      })

      return createPost;
}


const getAllPosts = async ()=>{
     const result = await prisma.post.findMany();
     return result
}


export const PostService = {
     createPostService,
     getAllPosts
}