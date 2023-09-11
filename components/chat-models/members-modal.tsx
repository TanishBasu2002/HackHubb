/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
"use client";
import { ServerWithMemberandProfile } from "@/types";
import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle } from "../ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { ScrollArea } from "../ui/scroll-area";
import UserAvatar from "./tools/user-avatar";
import { ShieldAlert, ShieldCheck, ShieldQuestion } from "lucide-react";
import { useState } from "react";

const roleIconMap={
    "GUEST":null,
    "MODERATOR":<ShieldCheck className="h-4 w-4 ml-2 text-indigo-500"/>,
    "ADMIN":<ShieldAlert className="h-4 w-4 text-rose-500"/>
}
export const MembersModal = ()=>{
    const {onOpen,isOpen,onClose,type,data}=useModal();
    const [loadingId,setLoadingId]=useState("");
    const {server}=data as {server: ServerWithMemberandProfile};
    const isModalOpen = isOpen && type ==="members"
    
    return(
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="bg-gradient-to-tr from-slate-800 via-gray-600 to-slate-800 text-white overflow-hidden border-0">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Manage Members
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-400">
                        {server?.members?.length } Members
                    </DialogDescription>
                </DialogHeader>
                    <ScrollArea className="mt-8 max-h-[420px] pr-6">
                        {server?.members?.map((member)=>(
                            <div key={member.id} className="flex items-center gap-x-2 mb-6">
                                <UserAvatar src={member.profile.imageUrl}/>
                                <div className="flex flex-col gap-y-1">
                                    <div className="text-xs font-semibold flex items-center gap-x-1">
                                        {member.profile.name}
                                        {roleIconMap[member.role]}
                                    </div>
                                    <p className="text-xs text-zinc-200">
                                        {member.profile.email}
                                    </p>
                                </div>
                                {server.profileId !== member.profileId && loadingId !== member.id && (
                                    <div className="ml-auto">
                                         <ShieldQuestion className="w-4 h-4 mr-2"/>
                                    </div>
                                )}
                            </div>
                        ))}
                    </ScrollArea>
                </DialogContent>
        </Dialog>
    )
}