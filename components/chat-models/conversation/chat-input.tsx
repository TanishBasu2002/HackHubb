/* eslint-disable react/react-in-jsx-scope */
"use client"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChatInputValidation } from "@/lib/validations/chat.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { File, Smile } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import qs from "query-string";
import axios from "axios";
import { useModal } from "@/hooks/use-modal-store";
import { EmojiPicker } from "../tools/emoji-picker";
import { useRouter } from "next/navigation";

interface ChatInputProps{
    apiUrl:string;
    query:Record<string,any>;
    name:string;
    type:"conversation" |"channel";
}

export default function ChatInput({apiUrl,query,name,type}:ChatInputProps) {
    const {onOpen}=useModal();
    const router = useRouter();
    const form =useForm<z.infer<typeof ChatInputValidation>>({
    resolver:zodResolver(ChatInputValidation),
    defaultValues:{
        content:"",
    }
    })
    const isLoading =form.formState.isSubmitting;
    const onSubmit = async (values:z.infer<typeof ChatInputValidation>)=>{
       try {
        const url = qs.stringifyUrl({
            url:apiUrl,
            query,
        });
        await axios.post(url,values);
        form.reset();
        router.refresh();
       } catch (error) {
        console.log(error);
       }
    }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField 
                control={form.control}
                name="content"
                render={({field})=>(
                    <FormItem>
                        <FormControl>
                            <div className="relative p-4 pb-6">
                                <div className="absolute top-7 left-8">
                                <EmojiPicker onChange={(emoji:string)=>field.onChange(`${field.value} ${emoji}`)}/>
                                </div>
                                <Input disabled={isLoading} className="px-14 py-6 bg-slate-700/75 border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-slate-200" placeholder={`Message ${type === "conversation" ? name : "#"+name}`} {...field}/>
                                <button type="button" onClick={()=>onOpen("messageFile",{apiUrl,query})}
                                className="absolute top-7 right-8 h-[24px] w-[24px] bg-slate-400 hover:bg-slate-300 transition rounded-full p-1 flex items-center justify-center"
                                > 
                                 <File className="text-slate-700"/>
                                </button>
                            </div>
                        </FormControl>
                    </FormItem>
                )}
            />
        </form>
    </Form>
  )
}
