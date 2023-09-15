/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
"use client";

import qs from "query-string";
import { Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle } from "../ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


export const DeleteChannelModal = ()=>{
    const { isOpen, onClose, type, data } = useModal();
    const router = useRouter();
  
    const isModalOpen = isOpen && type === "deleteChannel";
    const { server, channel } = data;
  
    const [isLoading, setIsLoading] = useState(false);
  
    const onClick = async () => {
        try {
          setIsLoading(true);
          const url = qs.stringifyUrl({
            url: `/api/channels/${channel?.id}`,
            query: {
              serverId: server?.id,
            }
          });
      
          await axios.delete(url);
          onClose();
          toast.success("Deleted the ChatRoom!", {
            style: {
              borderRadius: '10px',
              background: '#44495C',
              color: '#fff',
            },
          });
          router.refresh();
          router.push(`/hackchat/servers/${server?.id}`);
        } catch (error:any) {
          const responseData = error.response.data;
          if (responseData.status === 400 && responseData.data === 'Channel Id Not Found') {
            toast.error('Channel ID not found.');
          } else {
            console.log(error);
          }
        }finally{
            setIsLoading(false);
        }
      };
    const [isMounted,setIsMounted]=useState(false);
      useEffect(()=>{
          setIsMounted(true);
      },[]);
  
      if (!isMounted) {
          return null;
      }
    return(
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="bg-gradient-to-tr from-slate-800 via-gray-600 to-slate-800 text-white p-0 overflow-hidden border-0">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Delete Channel
                    </DialogTitle>
                    <DialogDescription className="text-center text-slate-300">
                        Are you sure you want to delete <span className="font-semibold text-indigo-500">#{channel?.name}</span>?
                    </DialogDescription>
                </DialogHeader>
                    <DialogFooter className="px-6 py-4">
                        <div className="flex items-center justify-between w-full">
                            <Button disabled={isLoading} onClick={onClose} className="bg-rose-700">
                                Cancel
                            </Button>
                            <Button disabled={isLoading} onClick={onClick} className="bg-emerald-700">
                                Confirm
                            </Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
        </Dialog>
    )
}