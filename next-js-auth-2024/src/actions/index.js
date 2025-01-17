"use server";

import connectToDB from "@/database";
import User from "@/models";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";


// add user action

export async function registerUserAction(formData) {
  await connectToDB();
  try {
    const { userName, email, password } = formData;

    const checkUser = await User.findOne({ email });
    console.log(checkUser);
    if (checkUser) {
      return {
        success: false,
        message: "User already exists ! Please try with different email",
      };
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newlyCreatedUser = new User({
      userName,
      email,
      password: hashedPassword,
    });

    const savedUser = await newlyCreatedUser.save();

    if (savedUser) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(savedUser)),
      };
    } else {
      return {
        success: false,
        message: "Something went wrong! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Something error occured",
      success: false,
    };
  }
}


export  async function loginUserAction(formData){
  await connectToDB();
  try{

    const {email, password} = formData;

    // check user exist or not
    const checkUser = await User.findOne({email});

    if(!checkUser){
      return {
        success: false,
        message: "User not found! Please Sign up"
      }
    }
    // check passowrd is valid or not
    const checkPassword = await bcryptjs.compare(password, checkUser.password);
    if(!checkPassword){
      return {
        success: false,
        message: "incorrect password please check"
      }
    }
    const createdTokenData = {
      id: checkUser._id,
      name: checkUser.userName,
      email: checkUser.email,
    }

    const token = jwt.sign(createdTokenData, "DEFAULT_KEY", {expiresIn: "1d"});
    const getCookies = cookies()
    getCookies.set("token", token)
    return {
      success: true,
      message: "User logged in successfully"
    }
  }
  catch(e){
    console.log(e);
    return {
      message: "error coming from login userAction , Something error occured",
      success: false,
    };
  }
}

export async function fetchAuthUserAction(){
  await connectToDB();
  try{
    const getCookies = cookies();
    const token = getCookies.get("token")?.value || "";
    if(token === "") return {
      success: false,
      message: "Token not invalid"
    }
    const decodedToken = jwt.verify(token, "DEFAULT_KEY");
    const getUserInfo = await User.findOne({_id: decodedToken.id});
    if(getUserInfo) return {
      success: true,
      data : JSON.parse(JSON.stringify(getUserInfo))
    }
    else{
      return {
        success: false,
        message: "User not found"
      }
    }
  }
  catch(e){
    console.log(e);
    return {
      message: "error coming from fetchAuthUserAction , Something error occured",
      success: false,
    };
  }
}

export async function logoutUserAction(){
  const getCookies = cookies();
  getCookies.set("token", "");
}