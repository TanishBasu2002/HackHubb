/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidatePath } from "next/cache";

import { connectToDB } from "../mongoose";

import User from "../models/user.model";
import Hack from "../models/hack.model";
import Community from "../models/community.model";

export async function fetchHacks(pageNumber = 1, pageSize = 20) {
  connectToDB();

  // Calculate the number of hacks to skip based on the page number and page size.
  const skipAmount = (pageNumber - 1) * pageSize;

  // Create a query to fetch the hacks that have no parent (top-level hacks) (a hack that is not a comment/reply).
  const hacksQuery = Hack.find({ parentId: { $in: [null, undefined] } })
    .sort({ createdAt: "desc" })
    .skip(skipAmount)
    .limit(pageSize)
    .populate({
      path: "author",
      model: User,
    })
    .populate({
      path: "community",
      model: Community,
    })
    .populate({
      path: "children", // Populate the children field
      populate: {
        path: "author", // Populate the author field within children
        model: User,
        select: "_id name parentId image", // Select only _id and username fields of the author
      },
    });

  // Count the total number of top-level hacks (threads) i.e., hacks that are not comments.
  const totalHacksCount = await Hack.countDocuments({
    parentId: { $in: [null, undefined] },
  }); // Get the total count of hacks

  const hacks = await hacksQuery.exec();

  const isNext = totalHacksCount > skipAmount + hacks.length;

  return { hacks, isNext };
}

interface Params {
  text: string,
  author: string,
  image:string | null,
  communityId: string | null,
  path: string,
}

export async function createHack({ text,image, author, communityId, path }: Params) {
  try {
    connectToDB();

    const communityIdObject = await Community.findOne(
      { id: communityId },
      { _id: 1 }
    );

    const createdHack = await Hack.create(image?({
      text,
      image,
      author,
      community: communityIdObject, // Assign communityId if provided, or leave it null for personal account
    }):({
      text,
      author,
      community: communityIdObject, // Assign communityId if provided, or leave it null for personal account
    }));

    // Update User model
    await User.findByIdAndUpdate(author, {
      $push: { hacks: createdHack._id },
    });

    if (communityIdObject) {
      // Update Community model
      await Community.findByIdAndUpdate(communityIdObject, {
        $push: { hacks: createdHack._id },
      });
    }

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create hack: ${error.message}`);
  }
}

async function fetchAllChildHacks(hackId: string): Promise<any[]> {
  const childHacks = await Hack.find({ parentId: hackId });

  const descendantHacks = [];
  for (const childHack of childHacks) {
    const descendants = await fetchAllChildHacks(childHack._id);
    descendantHacks.push(childHack, ...descendants);
  }

  return descendantHacks;
}

export async function deleteHack(id: string, path: string): Promise<void> {
  try {
    connectToDB();

    // Find the hack to be deleted (the main hack)
    const mainHack = await Hack.findById(id).populate("author community");

    if (!mainHack) {
      throw new Error("Hack not found");
    }

    // Fetch all child hacks and their descendants recursively
    const descendantHacks = await fetchAllChildHacks(id);

    // Get all descendant hack IDs including the main hack ID and child hack IDs
    const descendantHackIds = [
      id,
      ...descendantHacks.map((hack) => hack._id),
    ];

    // Extract the authorIds and communityIds to update User and Community models respectively
    const uniqueAuthorIds = new Set(
      [
        ...descendantHacks.map((hack) => hack.author?._id?.toString()), // Use optional chaining to handle possible undefined values
        mainHack.author?._id?.toString(),
      ].filter((id) => id !== undefined)
    );

    const uniqueCommunityIds = new Set(
      [
        ...descendantHacks.map((hack) => hack.community?._id?.toString()), // Use optional chaining to handle possible undefined values
        mainHack.community?._id?.toString(),
      ].filter((id) => id !== undefined)
    );

    // Recursively delete child hacks and their descendants
    await Hack.deleteMany({ _id: { $in: descendantHackIds } });

    // Update User model
    await User.updateMany(
      { _id: { $in: Array.from(uniqueAuthorIds) } },
      { $pull: { hacks: { $in: descendantHackIds } } }
    );

    // Update Community model
    await Community.updateMany(
      { _id: { $in: Array.from(uniqueCommunityIds) } },
      { $pull: { hacks: { $in: descendantHackIds } } }
    );

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to delete hack: ${error.message}`);
  }
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
      .populate({
        path: "community",
        model: Community,
        select: "_id id name image",
      }) // Populate the community field with _id and name
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
            model: Hack, // The model of the nested children (assuming it's the same "Hack" model)
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

export async function addCommentToHack(
  hackId: string,
  commentText: string,
  userId: string,
  path: string
) {
  connectToDB();

  try {
    // Find the original hack by its ID
    const originalHack = await Hack.findById(hackId);

    if (!originalHack) {
      throw new Error("Hack not found");
    }

    // Create the new comment hack
    const commentHack = new Hack({
      text: commentText,
      author: userId,
      parentId: hackId, // Set the parentId to the original hack's ID
    });

    // Save the comment hack to the database
    const savedCommentHack = await commentHack.save();

    // Add the comment hack's ID to the original hack's children array
    originalHack.children.push(savedCommentHack._id);

    // Save the updated original hack to the database
    await originalHack.save();

    revalidatePath(path);
  } catch (err) {
    console.error("Error while adding comment:", err);
    throw new Error("Unable to add comment");
  }
}