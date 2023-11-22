/* eslint-disable react/react-in-jsx-scope */
import { InitialModel } from "@/components/chat-models/initial-model";
import { fetchUser } from "@/lib/actions/user.actions";
import { initialProfile } from "@/lib/chat/initial-profile";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
const SetupPage = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  const profile = await initialProfile();
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/hackchat/servers/${server.id}`);
  }
  return <InitialModel />;
};

export default SetupPage;
