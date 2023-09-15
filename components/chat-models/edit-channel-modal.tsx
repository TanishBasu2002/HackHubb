/* eslint-disable react/react-in-jsx-scope */
"use client";
import qs from "query-string";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Dialog,DialogContent,DialogFooter,DialogHeader,DialogTitle } from "../ui/dialog";
import { ChannelDialogValidation} from "@/lib/validations/chat.validation";
import { Form,FormControl,FormField,FormItem,FormLabel,FormMessage } from "../ui/form";
import { Input } from "../ui/input"; 
import { Button } from "../ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select";
import { ChannelType } from "@prisma/client";

export const EditChannelModal = ()=>{
    const {isOpen,onClose,type,data}=useModal();
    const router = useRouter();
    const isModalOpen = isOpen && type ==="editChannel";
    const {channel,server} = data;
 
    const form = useForm({
      resolver: zodResolver(ChannelDialogValidation),
      defaultValues: {
        name: "",
        type:channel?.type || ChannelType.TEXT,
      }
    });
    useEffect(()=>{
       if(channel){
        form.setValue("name",channel.name);
        form.setValue("type",channel.type);
       }
    },[form,channel]);
    const isLoading =form.formState.isSubmitting;
    const onSubmit = async (values:z.infer<typeof ChannelDialogValidation>)=>{
        try {
            const url = qs.stringifyUrl({
                url:`/api/channels/${channel?.id}`,
                query:{
                    serverId:server?.id
                }
            })
            await axios.patch(url,values);
            form.reset();
            router.refresh();
            toast.success("Channel Updated",{style: {
                borderRadius: '10px',
                background: '#44495C',
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
                        Edit Channel
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-8 px-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field})=>(
                                    <FormItem>
                                        <FormLabel className="uppercase text-xs font-bold text-zinc-300">
                                            Channel Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input disabled={isLoading} className="bg-slate-300 border-0 focus-visible:ring-0 text-black focus-visible focus-visible:ring-offset-0"
                                            placeholder="Enter Channel name" {...field}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                           <FormField
                                control={form.control}
                                name="type"
                                render={({field})=>(
                                    <FormItem>
                                       <FormLabel className="uppercase text-xs font-bold text-zinc-300">
                                            Channel Type
                                        </FormLabel>
                                        <Select disabled={isLoading} onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="bg-slate-300 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
                                                    <SelectValue placeholder="Select a Channel Type"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-slate-500 border-none">
                                                {Object.values(ChannelType).map((type)=>(
                                                    <SelectItem key={type} value={type} className="capitalize">
                                                        {type.toLowerCase()}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>  
                        <DialogFooter className="px-6 py-4">
                            <Button disabled={isLoading} variant="primary">
                                Update
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}