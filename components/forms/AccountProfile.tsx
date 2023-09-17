/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
"use client"

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {zodResolver} from "@hookform/resolvers/zod"
import { UserValidation } from "@/lib/validations/user";
import * as z from "zod"
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { updateUser } from "@/lib/actions/user.actions";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { FileUpload } from "../chat-models/tools/file-upload";

interface Props{
  user:{
    id: string;
    objectId:string;
    username:string;
    name:string;
    bio:string;
    image:string;
  };
  btnTitle:string
}

const AccountProfile = ( {user,btnTitle} :Props) => {
  const [files,setFiles]=useState<File[]>([]);
  const {startUpload} = useUploadThing("media");
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const form =useForm({
    resolver: zodResolver(UserValidation),
    defaultValues:{
      profile_photo:user?.image||'',
      name:user?.name||'',
      username:user?.username||'',
      bio:user?.bio||'',
    }
  });
  async function onSubmit(values:z.infer<typeof UserValidation>) {
    try {
    setLoading(true);
    const blob = values.profile_photo;
    const hasImageChanged = isBase64Image(blob);
    if (hasImageChanged) {
      const imgRes = await startUpload(files);
      if (imgRes && imgRes[0].url) {
        values.profile_photo =imgRes[0].url;
      }
    }
    // Img Upload End
    // Update User Profile Start
    await updateUser(
      {
        userId:user.id,
        username:values.username,
        name:values.name,
        bio:values.bio,
        image:values.profile_photo,
        path:pathname ?? ''
      }
    );
    if(pathname === '/profile/edit'){
      router.back();
    }else{
      router.push('/');
    }
    toast.success("Edited",{
      style: {
        borderRadius: '10px',
        background: '#44495C',
        color: '#fff',
      },
    })
    // Update User Profile End
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      toast.error(error);
    }finally{
      setLoading(false);
    }
  }
  const [isMounted,setIsMounted]=useState(false);
  useEffect(()=>{
      setIsMounted(true);
  },[]);
  
    if (!isMounted) {
        return null;
    }
  return (<>
    {/**Usign Pre-Defile form from shadcn ui */}
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-10">
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormControl className='flex-1 text-base-semibold text-gray-200'>
              <div className="account-form_image-input"> 
              <FileUpload 
               endpoint="media"
               value={field.value}
               onChange={field.onChange}/>
              </div>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='text-base-semibold text-light-2'>
                Name
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className='account-form_input no-focus'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='text-base-semibold text-light-2'>
                Username
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className='account-form_input no-focus'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='text-base-semibold text-light-2'>
                Bio
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  className='account-form_input no-focus'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <Button disabled={loading} type='submit' className='card-btn'>{btnTitle}</Button>
      </form>
    </Form></>
  )
}

export default AccountProfile
