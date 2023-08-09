"use server"
import { revalidatePath } from "next/cache";
import Hack from "../models/hack.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
interface Params{
    text:string,
    author:string,
    communityId:string | null,
    path:string,
}
export async function createHack({text,author,communityId,path}:Params) {
    
    try {
        connectToDB();
        const createHack=await Hack.create(
            {text,author,community:null,}
        );
        //Update Hack
        await User.findByIdAndUpdate(author,{
            $push:{hack:createHack._id}
        })
        revalidatePath(path);
    } catch (error:any) {
        throw new Error(`Somethinfg does'nt work: ${error.message}`)
    }
};

export async function fetchPosts(pageNumber = 1, pageSize = 200) {
    connectToDB();
  
    // Calculate the number of posts to skip based on the page number and page size.
    const skipAmount = (pageNumber - 1) * pageSize;
  
    // Create a query to fetch the posts that have no parent (top-level Hacks) (a hack that is not a comment/reply).
    const postsQuery = Hack.find({ parentId: { $in: [null, undefined] } })
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(pageSize)
      .populate({
        path: "author",
        model: User,
      })
      .populate({
        path: "children", // Populate the children field
        populate: {
          path: "author", // Populate the author field within children
          model: User,
          select: "_id name parentId image", // Select only _id and username fields of the author
        },
      });
  
    // Count the total number of top-level posts (Hacks) i.e., Hacks that are not comments.
    const totalPostsCount = await Hack.countDocuments({
      parentId: { $in: [null, undefined] },
    }); // Get the total count of posts
  
    const posts = await postsQuery.exec();
  
    const isNext = totalPostsCount > skipAmount + posts.length;
  
    return { posts, isNext };
  }
  export async function fetchHackById(hackId: string) {
    connectToDB();
  
    try {
      const hack = await Hack.findById(hackId)
        .populate({
          path: "author",
          model: User,
          select: "_id id name image",
        }) // Populate the author field with _id and username
        /** .populate({
          path: "community",
          model: Community,
          select: "_id id name image",
        })*/ // Populate the community field with _id and name
        .populate({
          path: "children", // Populate the children field
          populate: [
            {
              path: "author", // Populate the author field within children
              model: User,
              select: "_id id name parentId image", // Select only _id and username fields of the author
            },
            {
              path: "children", // Populate the children field within children
              model: Hack, // The model of the nested children (assuming it's the same "hack" model)
              populate: {
                path: "author", // Populate the author field within nested children
                model: User,
                select: "_id id name parentId image", // Select only _id and username fields of the author
              },
            },
          ],
        })
        .exec();
  
      return hack;
    } catch (err) {
      console.error("Error while fetching hack:", err);
      throw new Error("Unable to fetch hack");
    }
  }