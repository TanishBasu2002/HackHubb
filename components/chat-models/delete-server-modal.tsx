/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
"use client";
import { Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle } from "../ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


export const DeleteServerModal = ()=>{
    const {isOpen,onClose,type,data}=useModal();

    const {server}=data;
    const isModalOpen = isOpen && type ==="deleteServer";
    const router = useRouter();
    const [isLoading,setIsLoading]=useState(false)
    
    const onClick = async () =>{
        try {
           setIsLoading(true);
           await axios.delete(`/api/servers/${server?.id}`);
          onClose();
          toast.success("Deleted the ChatRoom!",{style: {
            borderRadius: '10px',
            background: '#0F172A',
            color: '#fff',
          },}); 
          router.push("/hackchat");
          router.refresh();
        } catch (error) {
            console.log(error);
            
        }finally{
            setIsLoading(false);
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
            <DialogContent className="bg-gradient-to-tr from-slate-800 via-gray-600 to-slate-800 text-white p-0 overflow-hidden border-0">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Delete ChatRoom
                    </DialogTitle>
                    <DialogDescription className="text-center text-slate-300">
                        Are you sure you want to delete <span className="font-semibold text-indigo-500">{server?.name}</span>?
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