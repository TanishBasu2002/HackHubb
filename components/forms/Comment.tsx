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
import { usePathname, useRouter } from "next/navigation";

//import { updateUser } from "@/lib/actions/user.actions";
import { CommentValidation } from "@/lib/validations/hack.validation";
import { addCommentToHack, createHack } from "@/lib/actions/hack.actions";
import Image from "next/image";

interface Props{
    hackId:string,
    currentUserImg:string,
    currentUserId:string,
}
export default function Comment({hackId,
    currentUserImg,
    currentUserId,}:Props){
        const router = useRouter();
    const pathname = usePathname();
    const form =useForm({
        resolver: zodResolver(CommentValidation),
        defaultValues:{
        hack:'',
        }
    });
    //Submit action 
    const onSubmit =async(values:z.infer<typeof CommentValidation>)=>{
      await addCommentToHack(
        hackId,
        values.hack,
        JSON.parse(currentUserId),
        pathname); 
      form.reset();
    };

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
        <Button type="submit" className=" w-40 focus:scale-105 hover:scale-105 rounded-full bg-gradient-to-tr from-red-400 via-pink-600 to-purple-700 hover:bg-gradient-to-tr hover:from-purple-700 hover:via-red-600 hover:to-pink-400">
            Reply
        </Button>
        </form>
    </Form>
    </>
    )
}