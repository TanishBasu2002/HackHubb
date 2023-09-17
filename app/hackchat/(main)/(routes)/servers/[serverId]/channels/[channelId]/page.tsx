import ChatHeader from "@/components/chat-models/conversation/chat-header";
import { currentProfile } from "@/lib/chat/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

/* eslint-disable react/react-in-jsx-scope */
interface ChannelIdPageProps{
    params:{
        serverId:string;
        channelId:string;
    }
}
export default async function ChannelIdPage({params}:ChannelIdPageProps){
    const profile = await currentProfile();
    if (!profile) {
        return redirectToSignIn();
    }
    const channel =await db.channel.findUnique({
        where:{
            id:params.channelId,
        },
    });
    const member =await db.member.findFirst({
        where:{
            serverId:params.serverId,
            profileId:profile.id,
        }
    });
    if(!channel || !member){
        redirect("/hackchat");
    }
    return(
        <div className="text-light-2 bg-slate-900 flex flex-col h-full">
           <ChatHeader  name={channel.name} serverId={channel.serverId} type="channel"/>
        </div>
    )
}