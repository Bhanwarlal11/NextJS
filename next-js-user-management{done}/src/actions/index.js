'use server'

import { revalidatePath } from "next/cache";

const { default: connectToDB } = require("@/database")
const { default: User } = require("@/models/user")

// add userdata action

export async function addNewUserAction(formData, pathToRevalidate){
    await connectToDB()
// you can validate form data using JOI / also other packages can use 
    try{
        const newlyCreatedUser = await User.create(formData);

        if(newlyCreatedUser){
            revalidatePath(pathToRevalidate)
            return {
                success : true,
                message : 'user created successfully'
            }
        }else{
            return {
                success : false,
                message : 'user not created~failed'
            }
        }

    }
    catch(e){
        console.log(e)
        return {
            success : false,
            message : 'some error occured ~ please try again'
        }
    }
}

// get/fetch userdata action

export async function fetchUserAction(){
    await connectToDB()
    try{
        const listOfUsers = await User.find();
        if (listOfUsers) {
            return {
              success: true,
              data: JSON.parse(JSON.stringify(listOfUsers)),
            };
          } else {
            return {
              success: false,
              message: "Some error occured! Please try again",
            };
          }
        
    }
    catch(e){
        return {
            success : false,
            message : 'some error occured ~ please try again'
        }
    }
}



// delete userData action

export async function deleteUserAction(currentUserID, pathToRevalidate){
    await connectToDB()
    try{
        const deletedUser = await User.findByIdAndDelete(currentUserID);
        if(deletedUser){
            revalidatePath(pathToRevalidate)
            return {
                success : true,
                message : 'user deleted successfully'
            }
        }else{
            return {
                success : false,
                message : 'not able to perform delete opertion ! please try again'
            }
        }

    }
    catch(e){
        console.log(e)
        return {
            success : false,
            message : 'some error occured from DeleteUserAction ~ please try again'
        }
    }
}

// update userData action

export async function editUserAction(currentUserID, formData, pathToRevalidate){
    await connectToDB()
    try{
        const updatedUser = await User.findByIdAndUpdate(currentUserID, formData);
        if(updatedUser){
            revalidatePath(pathToRevalidate)
            return {
                success : true,
                message : 'user updated successfully'
            }
        }else{
            return {
                success : false,
                message : 'not able to perform update opertion ! please try again'
            }
        }

    }
    catch(e){
        console.log(e)
        return {
            success : false,
            message : 'some error occured from EditUserAction ~ please try again'
        }
    }
}