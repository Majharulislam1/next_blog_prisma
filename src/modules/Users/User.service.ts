

import { prisma } from "../../config/prisma"
import { Prisma, type User } from "../../generated/prisma/client"



const createUserService = async(payload:Prisma.UserCreateInput): Promise <User> =>{
     const user = await prisma.user.create({
         data:payload
     })

     return user
}



 


export const userService = {
    createUserService,
}