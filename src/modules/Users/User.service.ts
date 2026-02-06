

import { prisma } from "../../config/prisma"
import { Prisma, type User } from "../../generated/prisma/client"



const createUserService = async(payload:Prisma.UserCreateInput): Promise <User> =>{
     const user = await prisma.user.create({
         data:payload
     })

     return user
}


const getAllUserService = async()=>{
     const result = await prisma.user.findMany({
         select:{
              id: true,
            name: true,

         }
     });

     return result;

}


const getSingleUserService= async(id:number)=>{
      const result = await prisma.user.findUnique({
         where:{
            id
         }
      })

      return result
}

const update_user = async(id:number,payload:Prisma.UserCreateInput)=>{
      const updated_user = await prisma.user.update({
          where:{id},
          data:payload
      })

      return updated_user
}


const delete_User = async(id:number)=>{
     const deleteUser = await prisma.user.delete({
         where:{id}
     })

     return deleteUser
}


export const userService = {
    createUserService,
    getAllUserService,
    getSingleUserService,
    update_user,
    delete_User
}