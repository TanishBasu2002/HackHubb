import ChatHeader from "@/components/chat-models/conversation/chat-header";
import { getOrCreateConversation } from "@/lib/chat/converstion";
import { currentProfile } from "@/lib/chat/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

/* eslint-disable react/react-in-jsx-scope */
interface MemberIdPageProps{
    params:{
        memberId:string;
        serverId:string;
    }
}
export default async function MemberIdPage({params}:MemberIdPageProps){
    const profile = await currentProfile();
    if(!profile){
        return redirectToSignIn();
    }
    const currentMember = await db.member.findFirst({
        where:{
            serverId:params.serverId,
            profileId:profile.id,
        },
        include:{
            profile:true,
        },
    });

    if(!currentMember){
        return redirect("/hackchat");
    }

    const conversation =await getOrCreateConversation(currentMember.id,params.memberId); 
    
    if(!conversation){
        return redirect(`/hackchat/servers/${params.serverId}`);
    }

    const {memberOne,memberTwo}=conversation;

    const otherMember = memberOne.profileId === profile.id ? memberTwo :memberOne;
    return(
        <div className="text-light-2">
            <ChatHeader type="conversation" imageUrl={otherMember.profile.imageUrl} name={otherMember.profile.name} serverId={params.serverId}/>
        </div>
    )
}