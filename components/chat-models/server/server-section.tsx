/* eslint-disable react/react-in-jsx-scope */
"use client";

import { ServerWithMemberandProfile } from "@/types";
import { ChannelType, MemberRole } from "@prisma/client";

interface ServerSectionProps{
    label:string;
    role?:MemberRole;
    sectionType:"channel"|"members";
    channelType?:ChannelType;
    server?:ServerWithMemberandProfile;
}
const ServerSection = ({label,role,sectionType,channelType,server,}:ServerSectionProps) => {
  return (
    <div className="text-light-2">
      Server Section
    </div>
  )
}

export default ServerSection
