/* eslint-disable react/react-in-jsx-scope */
"use client";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle } from "../ui/dialog";
import { ServerDialogValidation } from "@/lib/validations/chat.validation";
import { Form,FormControl,FormField,FormItem,FormLabel,FormMessage } from "../ui/form";
import { Input } from "../ui/input"; 
import { Button } from "../ui/button";
import { FileUpload } from "./tools/file-upload";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";


export const CreateServerModal = ()=>{
    const {isOpen,onClose,type}=useModal();
    const router = useRouter();
    const isModalOpen = isOpen && type ==="createServer";
    const form =useForm({
        resolver:zodResolver(ServerDialogValidation),
        defaultValues:{
            name:"",
            imageUrl:"",
        }
    });
    const isLoading =form.formState.isSubmitting;
    const onSubmit = async (values:z.infer<typeof ServerDialogValidation>)=>{
        try {
            await axios.post("/api/servers",values);
            form.reset();
            router.refresh();
            toast.success("ChatRoom Created",{style: {
                borderRadius: '10px',
                background: '#0F172A',
                color: '#fff',
              },});
            onClose();
        } catch (error:unknown) {
            console.log(error);
        }
        
    }
    const handleClose = ()=>{
        form.reset();
        onClose();
    }
    const [isMounted,setIsMounted]=useState(false);
      useEffect(()=>{
          setIsMounted(true);
      },[]);
  
      if (!isMounted) {
          return null;
      }
    return(
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className="bg-gradient-to-tr from-slate-800 via-gray-600 to-slate-800 text-white p-0 overflow-hidden border-0">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Customize your ChatRoom
                    </DialogTitle>
                    <DialogDescription className="text-center text-slate-400">
                        Give your Chat a personality with a name and image.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-8 px-6">
                            <div className="flex items-center justify-center text-center">
                                <FormField
                                    control={form.control}
                                    name="imageUrl"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormControl>
                                            <FileUpload 
                                                endpoint="chatImage"
                                                value={field.value}
                                                onChange={field.onChange}/>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field})=>(
                                    <FormItem>
                                        <FormLabel className="uppercase text-xs font-bold text-zinc-300">
                                            ChatRoom Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input disabled={isLoading} className="bg-slate-300 border-0 focus-visible:ring-0 text-black focus-visible focus-visible:ring-offset-0"
                                            placeholder="Enter chatroom name" {...field}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>  
                        <DialogFooter className="px-6 py-4">
                            <Button disabled={isLoading} variant="primary">
                                Create
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}