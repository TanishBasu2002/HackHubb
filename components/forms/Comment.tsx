/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "../ui/input";
import { usePathname} from "next/navigation";

//import { updateUser } from "@/lib/actions/user.actions";
import { CommentValidation } from "@/lib/validations/hack.validation";
import { addCommentToHack} from "@/lib/actions/hack.actions";
import Image from "next/image";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

interface Props{
    hackId:string,
    currentUserImg:string,
    currentUserId:string,
}
export default function Comment({hackId,
    currentUserImg,
    currentUserId,}:Props){
    const pathname = usePathname();
    const form =useForm({
        resolver: zodResolver(CommentValidation),
        defaultValues:{
        hack:'',
        }
    });
    //Submit action 
    const [loading, setLoading] = useState(false);
    const onSubmit =async(values:z.infer<typeof CommentValidation>)=>{
     try {
      setLoading(true);
      await addCommentToHack(
        hackId,
        values.hack,
        JSON.parse(currentUserId),
        pathname); 
      form.reset();
      toast.success("Commented");
     } catch (error:any) {
      toast.error(error);
     }finally{
      setLoading(false);
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
        <>
        {/**Usign Pre-Defile form from shadcn ui */}
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="comment-form">
      <FormField
          control={form.control}
          name='hack'
          render={({ field }) => (
            <FormItem className='flex w-full items-center gap-3'>
              <FormLabel>
                <Image src={currentUserImg} alt="Profile Image" width={48} height={48} className="rounded-full object-cover"/>
              </FormLabel>
              <FormControl  className='border-none bg-transparent'>
                <Input type="text" placeholder="Comment..." className="no-focus text-light-1 outline-none"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button disabled={loading} type="submit" className=" w-40 card-btn">
            Reply
        </Button>
        </form>
    </Form>
    </>
    )
}