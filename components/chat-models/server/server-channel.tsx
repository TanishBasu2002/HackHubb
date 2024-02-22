/* eslint-disable react/react-in-jsx-scope */
"use client";

import { cn } from "@/lib/utils";
import { Channel, ChannelType, MemberRole, Server } from "@prisma/client";
import { Edit, Hash, Lock, Mic, Trash, Video } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ActionTooltip } from "../tools/action-tooltip";
import { ModalType, useModal } from "@/hooks/use-modal-store";
import { useEffect, useState } from "react";

interface ServerChannelProps {
  channel: Channel;
  server: Server;
  role?: MemberRole;
}
const iconMap = {
  [ChannelType.TEXT]: (
    <Hash className="text-indigo-500 flex-shrink-0 w-4 h-4" />
  ),
  [ChannelType.AUDIO]: <Mic className="text-lime-500 flex-shrink-0 w-4 h-4" />,
  [ChannelType.VIDEO]: (
    <Video className="text-emerald-500 flex-shrink-0 w-4 h-4" />
  ),
};
export const ServerChannel = ({
  channel,
  server,
  role,
}: ServerChannelProps) => {
  const params = useParams();
  const { onOpen } = useModal();
  const icon = iconMap[channel.type];
  const router = useRouter();
  const onClick = () => {
    router.push(`/hackchat/servers/${params?.serverId}/channels/${channel.id}`);
  };
  const onAction = (e: React.MouseEvent, action: ModalType) => {
    e.stopPropagation();
    onOpen(action, { channel, server });
  };

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <button
      onClick={onClick}
      className={cn(
        "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-slate-700/10 transition mb-1",
        params?.channelId === channel.id && "bg-slate-700",
      )}
    >
      {icon}
      <p
        className={cn(
          "line-clamp-1 font-semibold text-sm text-slate-400 group-hover:text-slate-200 transition",
          params?.channelId === channel.id && "text-white",
        )}
      >
        {channel.name}
      </p>
      {channel.name !== "general" && role !== MemberRole.GUEST && (
        <div className="ml-auto flex items-center gap-x-2">
          <ActionTooltip label="Edit">
            <Edit
              onClick={(e) => onAction(e, "editChannel")}
              className="hidden group-hover:block w-4 h-4 text-slate-400 hover:text-slate-300 transition"
            />
          </ActionTooltip>
          <ActionTooltip label="Delete">
            <Trash
              onClick={(e) => onAction(e, "deleteChannel")}
              className="hidden group-hover:block w-4 h-4 text-slate-400 hover:text-slate-300 transition"
            />
          </ActionTooltip>
        </div>
      )}
      {channel.name === "general" && (
        <Lock className="ml-auto w-4 h-4 text-slate-400" />
      )}
    </button>
  );
};
