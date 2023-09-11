/* eslint-disable react/react-in-jsx-scope */
"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useModal } from "@/hooks/use-modal-store";
import { ServerWithMemberandProfile } from "@/types";
import { MemberRole } from "@prisma/client";
import { ChevronDown, LogOut, PlusCircle, Settings, Trash, User, UserPlus } from "lucide-react";

interface ServerHeaderProps{
    server:ServerWithMemberandProfile;
    role?:MemberRole;
}

export const ServerHeader = ({server,role}:ServerHeaderProps)=>{
    const {onOpen}=useModal();
    const isAdmin = role === MemberRole.ADMIN;
    const isModerator = isAdmin || role === MemberRole.MODERATOR;
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none" asChild>
                <button className="w-full text-md font-semibold px-3 flex items-center h-12 hover:bg-zinc-900 transition">
                    {server.name}
                    <ChevronDown className="h-5 w-5 ml-auto"/>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-dark-3 text-xs border-none font-medium text-white space-y-[2px]">
                {isModerator && (
                    <DropdownMenuItem onClick={()=>onOpen("invite",{server})} className="text-indigo-400 px-3 py-2 text-sm cursor-pointer">
                        Invite People
                        <UserPlus className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                 {isAdmin && (
                    <DropdownMenuItem onClick={()=>onOpen("editServer",{server})} className=" px-3 py-2 text-sm cursor-pointer">
                        Settings
                        <Settings className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                 {isAdmin && (
                    <DropdownMenuItem onClick={()=>onOpen("members",{server})} className="px-3 py-2 text-sm cursor-pointer">
                        Manage Members
                        <User className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                {isModerator && (
                    <DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">
                        Add Channels
                        <PlusCircle className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                 {isModerator && (
          <DropdownMenuSeparator />
        )}
        {isAdmin && (
          <DropdownMenuItem   
            className="text-rose-500 px-3 py-2 text-sm cursor-pointer"
          >
            Delete ChatRoom
            <Trash className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {!isAdmin && (
          <DropdownMenuItem
            className="text-rose-500 px-3 py-2 text-sm cursor-pointer"
          >
            Leave ChatRoom
            <LogOut className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}