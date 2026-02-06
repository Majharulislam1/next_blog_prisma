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

 const createMultiplePostService = async (
  payload: Prisma.PostCreateManyInput[]  
): Promise<Prisma.BatchPayload> => {
  const result = await prisma.post.createMany({
    data: payload,   
  });

  return result;  
}




const getAllPosts = async ({page,limit}:{page:number,limit:number})=>{
      
      const skip = (page - 1) * limit;

     const result = await prisma.post.findMany(
         {
             skip,
             take:limit
         }
     );
     return result


}




export const PostService = {
     createPostService,
     getAllPosts ,
     createMultiplePostService
}