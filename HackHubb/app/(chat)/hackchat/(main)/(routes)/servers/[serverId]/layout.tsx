/* eslint-disable react/react-in-jsx-scope */

import { ServerTopbar } from "@/components/chat-models/server/server-topbar";
import { currentProfile } from "@/lib/chat/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const ServerIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) => {
  const profile = await currentProfile();
  if (!profile) {
    return redirectToSignIn();
  }
  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  if (!server) {
    return redirect("/hackchat");
  }
  return (
    <div className="h-full">
      <div className="max-lg:hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        <ServerTopbar serverId={params.serverId} />
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
};

export default ServerIdLayout;
