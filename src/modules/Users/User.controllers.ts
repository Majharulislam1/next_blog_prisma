import type { Request, Response } from "express";
import { userService } from "./User.service"


const createUserControllers = async(req:Request,res:Response)=>{
    
  
    try {
           const result = await userService.createUserService(req.body);
           
           res.send({
              success:true,
              message:'Create user successfully',
              result
           })

    } catch (error) {
         console.log(error)
    }


}



export const userControllers = {
     createUserControllers
}



