"use client"

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"
import { Textarea } from "../ui/textarea";
import { usePathname, useRouter } from "next/navigation";

import { updateUser } from "@/lib/actions/user.actions";
import { HackValidation } from "@/lib/validations/hack.validation";
import { createHack } from "@/lib/actions/hack.actions";
import { Input } from "../ui/input";

export default function PostHack({userId}:{userId:string}) {
    
    const router = useRouter();
    const pathname = usePathname();
    const form =useForm({
        resolver: zodResolver(HackValidation),
        defaultValues:{
        hack:'',
        accountId:userId,
        }
    });
    //Submit action 
    const onSubmit =async(values:z.infer<typeof HackValidation>)=>{
      await createHack({
        text:values.hack,
        author:userId,
        communityId:null,
        path:pathname
        
      });
      router.push("/")
    };
    return(
        <>
        {/**Usign Pre-Defile form from shadcn ui */}
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center gap-10">
      <FormField
          control={form.control}
          name='hack'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='mt-10 text-base-semibold text-light-2'>
                Content
              </FormLabel>
              <FormControl  className='border border-dark-4 bg-dark-4 text-light-1 no-focus'>
                <Textarea
                  rows={8}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className=" w-40 card-btn">
            Post Hack
        </Button>
        </form>
    </Form>
    </>
    )
}