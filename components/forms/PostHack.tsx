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
import { Input } from "../ui/input";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { useOrganization } from "@clerk/nextjs";
import toast from "react-hot-toast";

export default function PostHack({ userId }: { userId: string }) {
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

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();
    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };
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
        path: pathname,
      });
  
      router.push("/");
      toast.success("Posted");
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
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="px-4">
                {field.value?(
                  <Image src={field.value} alt="Hack Photo" width={180} height={160} priority className="object-contain"/>
                ):(
                  <Image src="/assets/profile.svg" alt="Hack Photo" width={24} height={24} priority className="object-contain"/>
                )}
              </FormLabel>
              <FormControl className='flex-1 text-base-semibold text-gray-200'>
                <Input
                  type='file'
                  accept='image/*'
                  placeholder='Add Hack photo'
                  className='account-form_image-input'
                  onChange={(e) => handleImage(e, field.onChange)}
                />
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