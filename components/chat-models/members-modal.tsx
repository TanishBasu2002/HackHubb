/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
"use client";
import { ServerWithMemberandProfile } from "@/types";
import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle } from "../ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { ScrollArea } from "../ui/scroll-area";
import UserAvatar from "./tools/user-avatar";
import { Check, Gavel, Loader2, MoreVertical, Shield, ShieldAlert, ShieldCheck, ShieldQuestion } from "lucide-react";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MemberRole } from "@prisma/client";
import qs from "query-string";
import toast from "react-hot-toast";

const roleIconMap={
    "GUEST":null,
    "MODERATOR":<ShieldCheck className="h-4 w-4 ml-2 text-indigo-500"/>,
    "ADMIN":<ShieldAlert className="h-4 w-4 text-rose-500"/>
}
export const MembersModal = ()=>{
    const router = useRouter();
    const {onOpen,isOpen,onClose,type,data}=useModal();
    const [loadingId,setLoadingId]=useState("");
    const {server}=data as {server: ServerWithMemberandProfile};
    const isModalOpen = isOpen && type ==="members";
    const onKick = async (memberId: string) => {
        try {
          setLoadingId(memberId);
          const url = qs.stringifyUrl({
            url: `/api/members/${memberId}`,
            query: {
              serverId: server?.id,
            },
          });
          const response = await axios.delete(url);
          toast.success("Kicked out Successfully!",{style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },});
          router.refresh();
          onOpen("members", { server: response.data });
        } catch (error) {
          console.log(error);
        } finally {
          setLoadingId("");
        }
      }
    const onRoleChange = async (memberId: string, role: MemberRole) => {
        try {
          setLoadingId(memberId);
          const url = qs.stringifyUrl({
            url: `/api/members/${memberId}`,
            query: {
              serverId: server?.id,
            }
          });
          const response = await axios.patch(url, { role });
          toast.success("Changed Successfully!",{style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },});
          router.refresh();
          onOpen("members", { server: response.data });
        } catch (error) {
          console.log(error);
        } finally {
          setLoadingId("");
        }
      }
      const [isMounted,setIsMounted]=useState(false);
      useEffect(()=>{
          setIsMounted(true);
      },[]);
  
      if (!isMounted) {
          return null;
      }
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
                                       <DropdownMenu>
                                            <DropdownMenuTrigger>
                                            <MoreVertical className="h-4 w-4 text-zinc-400" />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent side="left" className="bg-slate-900 border-none text-light-2">
                                            <DropdownMenuSub>
                                                <DropdownMenuSubTrigger className="flex items-center hover:text-black">
                                                <ShieldQuestion className="w-4 h-4 mr-2"/>
                                                <span>Role</span>
                                                </DropdownMenuSubTrigger>
                                                <DropdownMenuPortal>
                                                <DropdownMenuSubContent  className="bg-slate-900 border-none text-light-2">
                                                    <DropdownMenuItem onClick={() => onRoleChange(member.id, "GUEST")} >
                                                    <Shield className="h-4 w-4 mr-2" />
                                                    Guest
                                                    {member.role === "GUEST" && (
                                                        <Check className="h-4 w-4 ml-auto"/>
                                                    )}
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => onRoleChange(member.id, "MODERATOR")}>
                                                    <ShieldCheck className="h-4 w-4 mr-2" />
                                                    Moderator
                                                    {member.role === "MODERATOR" && (
                                                        <Check className="h-4 w-4 ml-auto"/>
                                                    )}
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                                </DropdownMenuPortal>
                                            </DropdownMenuSub>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => onKick(member.id)}>
                                                <Gavel className="h-4 w-4 mr-2" />
                                                Kick
                                            </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                        </div>
                                    )}
                                {loadingId === member.id && (
                                    <Loader2 className="animate-spin text-zinc-300 ml-auto w-4 h-4"/>
                                )}
                                </div>
                            ))}
                     </ScrollArea>
                </DialogContent>
            </Dialog>
    )
}