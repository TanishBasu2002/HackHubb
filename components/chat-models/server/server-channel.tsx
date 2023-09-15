/* eslint-disable react/react-in-jsx-scope */
"use client";

import { cn } from "@/lib/utils";
import { Channel, ChannelType, MemberRole, Server } from "@prisma/client";
import { Edit, Hash, Lock, Mic, Trash, Video } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ActionTooltip } from "../tools/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

interface ServerChannelProps{
    channel:Channel;
    server:Server;
    role?:MemberRole
}
const iconMap ={
    [ChannelType.TEXT]:<Hash className="text-indigo-500 flex-shrink-0 w-4 h-4"/>,
    [ChannelType.AUDIO]:<Mic className="text-lime-500 flex-shrink-0 w-4 h-4"/>,
    [ChannelType.VIDEO]:<Video className="text-emerald-500 flex-shrink-0 w-4 h-4"/>,
}
export const ServerChannel = ({channel,server,role}:ServerChannelProps) => {
    const params = useParams();
    const router =useRouter();
    const {onOpen}= useModal();
    const icon = iconMap[channel.type];

  return (
    <button onClick={()=>{}} className={cn("group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-slate-700/10 transition mb-1",params?.channelId===channel.id && "bg-slate-700")}>
      {icon}
      <p className={cn("line-clamp-1 font-semibold text-sm text-slate-400 group-hover:text-slate-200 transition",params?.channelId === channel.id && "text-white")}>{channel.name}</p>
      {channel.name !== "general" && role !== MemberRole.GUEST && (
        <div className="ml-auto flex items-center gap-x-2">
            <ActionTooltip label="Edit">
                <Edit onClick={()=>onOpen("editChannel",{server,channel})} className="hidden group-hover:block w-4 h-4 text-slate-400 hover:text-slate-300 transition"/>
            </ActionTooltip>
            <ActionTooltip label="Delete">
                <Trash onClick={()=>onOpen("deleteChannel",{server,channel})} className="hidden group-hover:block w-4 h-4 text-slate-400 hover:text-slate-300 transition"/>
            </ActionTooltip>
        </div>
      )}
      {channel.name === "general" && (
        <Lock className="ml-auto w-4 h-4 text-slate-400" />
      )}
    </button>
  )
}


