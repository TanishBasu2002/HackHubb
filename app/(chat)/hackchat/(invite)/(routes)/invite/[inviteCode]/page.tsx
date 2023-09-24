import { currentProfile } from "@/lib/chat/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

/* eslint-disable react/react-in-jsx-scope */
interface InviteCodePageProps{
    params:{
        inviteCode:string;
    }
}

async function InviteCodePage({params}:InviteCodePageProps) {
    const profile = await currentProfile();
    if (!profile) {
        return redirectToSignIn();
    }
    if(!params.inviteCode){
        return redirect("/hackchat");
    }
    const existingServer = await db.server.findFirst({
        where:{
            inviteCode:params.inviteCode,
            members:{
                some:{
                    profileId:profile.id
                }
            }
        }
    });
    if (existingServer) {
        return redirect(`/hackchat/servers/${existingServer.id}`);
    }
    const server = await db.server.update({
        where:{
            inviteCode:params.inviteCode,
        },
        data:{
            members:{
                create:[{
                    profileId:profile.id,
                }]
            }
        }
    })
    if (server) {
        return redirect(`/hackchat/servers/${server.id}`)
    }
  return null;
}

export default InviteCodePage
