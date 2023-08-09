"use server"

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose"

interface Params {
    userId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
    path: string;
  }
  
  export async function updateUser({
    userId,
    bio,
    name,
    path,
    username,
    image,
  }: Params):Promise<void>{
    connectToDB();
    try {
        await User.findOneAndUpdate(
            {id:userId},
            {
                username:username.toLowerCase(),
                name,
                bio,
                image,
                onboarding:true,
            },
            {upsert:true}
            );
            if (path === "/profile/edit") {
                revalidatePath(path);
            }
    } catch (error:any) {
        throw new Error(`Failed to create/update : ${error.message}`)
    }

}

export async function fetchUser(userId:string) {
    try {
        connectToDB();
        return await User.findOne({id:userId})
    } catch (error:any) {
        throw new Error(`Failed o Fetch User: ${error.message}`);
    }
}