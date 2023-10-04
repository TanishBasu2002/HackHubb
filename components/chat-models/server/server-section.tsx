/* eslint-disable react/react-in-jsx-scope */
"use client";

import { ServerWithMemberandProfile } from "@/types";
import { ChannelType, MemberRole } from "@prisma/client";
import { ActionTooltip } from "../tools/action-tooltip";
import { Plus, Settings } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";
import { useEffect, useState } from "react";

interface ServerSectionProps{
    label:string;
    role?:MemberRole;
    sectionType:"channels"|"members";
    channelType?:ChannelType;
    server?:ServerWithMemberandProfile;
}
const ServerSection = ({label,role,sectionType,channelType,server,}:ServerSectionProps) => {
  const {onOpen} =useModal();
  const [isMounted,setIsMounted]=useState(false);
      useEffect(()=>{
          setIsMounted(true);
      },[]);
  
      if (!isMounted) {
          return null;
      }
  return (
    <div className="flex items-center justify-between  text-light-2">
      <p className="text-xs uppercase font-semibold text-slate-400">
        {label}
      </p>
      {role  !== MemberRole.GUEST && sectionType === "channels" && (
        <ActionTooltip label="Create Channel" side="top">
          <button className="text-slate-400 hover:text-slate-200 transition" onClick={()=>onOpen("createChannel",{channelType})}>
            <Plus className="h-4 w-4"/>
          </button>
        </ActionTooltip>
      )}
      {role === MemberRole.ADMIN && sectionType==="members" && (
        <ActionTooltip label="Manage Members" side="top">
        <button className="text-slate-400 hover:text-slate-200 transition" onClick={()=>onOpen("members",{server})}>
          <Settings className="h-4 w-4"/>
        </button>
      </ActionTooltip>
      )}
    </div>
  )
}

export default ServerSection
