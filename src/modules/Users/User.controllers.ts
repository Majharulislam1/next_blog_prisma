import type { Request, Response } from "express";
import { userService } from "./User.service"


const createUserControllers = async (req: Request, res: Response) => {


     try {
          const result = await userService.createUserService(req.body);

          res.send({
               success: true,
               message: 'Create user successfully',
               result
          })

     } catch (error) {
          console.log(error)
     }


}


const getAllUserControllers = async (req: Request, res: Response) => {
     try {
          const result = await userService.getAllUserService();

          res.send({
               success: true,
               message: 'ALL USER find successfully',
               result
          })

     } catch (error) {
          res.send({
               success: false,
               message: error
          })
     }

}


const getSingleUser = async (req: Request, res: Response) => {



     try {
          const user = await userService.getSingleUserService(Number(req.params.id))

          res.send({
               success: true,
               message: 'GET SINGLE USER find successfully',
               user
          })

     } catch (error) {
          res.send({
               success: false,
               message: error
          })
     }
}

const UpdateUserControllers = async (req:Request,res:Response)=> {
        try {
          const id = Number(req.params.id );
          const data = req.body
          const user = await userService.update_user(id,data);
          res.send({
               success: true,
               message: 'Update USER  successfully',
               user
          })

     } catch (error) {
          res.send({
               success: false,
               message: error
          })
     }
}


const deleteUserControllers = async (req:Request,res:Response)=>{
        try {
          const id = Number(req.params.id );
          
          const user = await userService.delete_User(id);
          res.send({
               success: true,
               message: 'Delete user successfully',
               user
          })

     } catch (error) {
          res.send({
               success: false,
               message: error
          })
     }
}



export const userControllers = {
     createUserControllers,
     getAllUserControllers,
     getSingleUser,
     UpdateUserControllers,
     deleteUserControllers

}



