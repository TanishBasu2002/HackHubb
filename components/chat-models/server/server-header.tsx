/* eslint-disable react/react-in-jsx-scope */
"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ServerWithMemberandProfile } from "@/types";
import { MemberRole } from "@prisma/client";
import { ChevronDown, PlusCircle, Settings, User, UserPlus } from "lucide-react";

interface ServerHeaderProps{
    server:ServerWithMemberandProfile;
    role?:MemberRole;
}

export const ServerHeader = ({server,role}:ServerHeaderProps)=>{
    const isAdmin = role === MemberRole.ADMIN;
    const isModerator = isAdmin || role === MemberRole.MODERATOR;
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none" asChild>
                <button className="w-36 text-md font-semibold px-3 flex items-center h-12 border-neutral-800 border-b-2 hover:bg-zinc-700/50 transition">
                    {server.name}
                    <ChevronDown className="h-5 w-5 ml-auto"/>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 ml-[50px] bg-slate-700 border-none text-xs font-medium text-neutral-100 space-y-[2px]">
                {isModerator && (
                    <DropdownMenuItem className="text-indigo-400 px-3 py-2 text-sm cursor-pointer">
                        Invite People
                        <UserPlus className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                 {isAdmin && (
                    <DropdownMenuItem className=" px-3 py-2 text-sm cursor-pointer">
                        Server Settings
                        <Settings className="h-4 w-4 ml-auto"/>
                    </DropdownMenuItem>
                )}
                 {isAdmin && (
                    <DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">
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
            </DropdownMenuContent>
        </DropdownMenu>
    )
}