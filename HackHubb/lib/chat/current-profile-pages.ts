import { NextApiRequest } from "next";
import { db } from "../db";
import { getAuth } from "@clerk/nextjs/server";

export const currentProfilePages = async (req: NextApiRequest) => {
  const { userId } = getAuth(req);
  if (!userId) {
    return null;
  }
  const profile = await db.profile.findUnique({
    where: {
      userId,
    },
  });
  return profile;
};
