import { prisma } from "../../config/prisma"



import { Prisma, type Post } from "../../generated/prisma/client"



const createPostService = async (payload: Prisma.PostCreateInput): Promise<Post> => {

    const createPost = await prisma.post.create({
        data: payload,
        include: {
            author: {
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




const getAllPosts = async ({ page = 1, limit = 10, search = '', isFeatured, tags }: { page: number, limit: number, search?: string, isFeatured?: boolean | undefined, tags?: string[] }) => {

    const skip = page < 1 ? 0 : (page - 1) * limit;

    const where: any = {
        AND: [
            search && {
                OR: [
                    { title: { contains: search, mode: 'insensitive' } },
                    { content: { contains: search, mode: 'insensitive' } }
                ]

            },
            typeof isFeatured === "boolean" && { isFeatured },
            (tags && tags.length > 0) && { tags: { hasEvery: tags } }
        ].filter(Boolean)
    }



    const result = await prisma.post.findMany(
        {
            skip,
            take: limit,
            where,
            include: {
                author: true
            },
            orderBy: {
                createdAt: "desc"
            }
        }
    );

    const total = await prisma.post.count({ where })
    return {
        data: result,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    };
}


const getSingleUser = async (id:number)=>{
   const result = await prisma.post.findUnique({
  where: {
    id: id
  }
});
   
   return result;
      
}

// aggreates 
const getBlogStat = async () => {
}

export const PostService = {
    createPostService,
    getAllPosts,
    createMultiplePostService ,
    getSingleUser
}

