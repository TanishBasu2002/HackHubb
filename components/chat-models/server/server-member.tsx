/* eslint-disable react/react-in-jsx-scope */
"use client";

import { cn } from "@/lib/utils";
import { Member, MemberRole, Profile, Server } from "@prisma/client";
import { ShieldAlert, ShieldCheck } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import UserAvatar from "../tools/user-avatar";

interface ServerMemberProps{
    member:Member & {profile:Profile};
    server:Server;
}
const roleIconMap = {
    [MemberRole.GUEST]:null,
    [MemberRole.MODERATOR]:<ShieldCheck className="h-4 w-4 ml-2 text-indigo-700"/>,
    [MemberRole.ADMIN]:<ShieldAlert className="h-4 w-4 ml-2 text-rose-700"/>,
}
export const ServerMember =({member,server}:ServerMemberProps)=>{
    const params =useParams();
    const router =useRouter();
    const icon = roleIconMap[member.role]
    return(
        <button className={cn("group px-2 py-2 rounded-md flex items-center mt-2 gap-x-2 w-full hover:bg-slate-700/50 transition mb-1",params?.memberId === member.id && "bg-slate-700/20" )}>
            <UserAvatar src={member.profile.imageUrl} className="h-8 w-8"/>
            <p className={cn("font-semibold text-sm text-slate-400 group-hover:text-slate-200 transition",params?.memberId === member.id && "text-light-3 group-hover:text-white")}>{member.profile.name}</p>
            {icon}
        </button>
    )
}