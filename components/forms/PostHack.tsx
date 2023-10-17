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
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"
import { Textarea } from "../ui/textarea";
import { usePathname, useRouter } from "next/navigation";
import { HackValidation } from "@/lib/validations/hack.validation";
import { createHack } from "@/lib/actions/hack.actions";
import {useEffect, useState } from "react";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { useOrganization } from "@clerk/nextjs";
import toast from "react-hot-toast";
import { FileUpload } from "../chat-models/tools/file-upload";
import { EmojiPicker } from "../chat-models/tools/emoji-picker";

export default function PostHack({ userId }: { userId: string }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("media");
  const router = useRouter();
  const pathname = usePathname();
  const {organization} = useOrganization();
  const form = useForm({
    resolver: zodResolver(HackValidation),
    defaultValues: {
      hack: "",
      image: "" || null, // Set image to null by default
      accountId: userId,
    },
  });
  const [loading, setLoading] = useState(false);
  const onSubmit = async (values: z.infer<typeof HackValidation>) => {
    try {
      setLoading(true);
      let imageToUse = values.image; // Initialize with the provided image
  
      if (values.image) {
        const blob = values.image;
        const hasImageChanged = isBase64Image(blob);
    
        if (hasImageChanged) {
          const imgRes = await startUpload(files);
          if (imgRes && imgRes[0].url) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            imageToUse = imgRes[0].url; // Use the uploaded image URL
          }
        }
      }
      await createHack({
        text: values.hack,
        image: values.image,
        author: userId,
        communityId: organization? organization.id : null,
        path: pathname ?? '',
      });
  
      router.push("/");
      toast.success("Posted",{
        style: {
          borderRadius: '10px',
          background: '#44495C',
          color: '#fff',
        },
      });
      router.refresh();
    } catch (error) {
      toast.error('Something went wrong');
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center gap-10">
      <FormField
          control={form.control}
          name='hack'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='mt-10 text-base-semibold text-light-2 w-full flex items-center justify-between'>
                Content
                <EmojiPicker onChange={(emoji:string)=>field.onChange(`${field.value} ${emoji}`)}/>
              </FormLabel>
              <FormControl  className='text-light-1 no-focus'>
                <Textarea
                  rows={8}
                  {...field}
                  className="border border-dark-4 bg-dark-4 "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className='mt-10 text-base-semibold text-light-2'>
                Add Image
              </FormLabel>
              <FormControl className='flex-1 text-base-semibold text-gray-200'>
              <div className="account-form_image-input"> 
              <FileUpload 
                divClass="h-72 w-64"
                imgClass="rounded-2xl"
               endpoint="media"
               value={field.value}
               onChange={field.onChange}/>
              </div>
              </FormControl>
            </FormItem>
          )}
        />
        <Button disabled={loading} type="submit" className=" w-40 card-btn">
            Post Hack
        </Button>
        </form>
    </Form>
    </>
    )
}