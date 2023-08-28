"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css"
import toast from "react-hot-toast";
import {X} from "lucide-react"
import Image from "next/image";
import { cn } from "@/lib/utils";


interface FileUploadProps{
  onChange:(url?:string)=>void;
  value:string;
  divClass?:string;
  imgClass?:string;
  endpoint:"messageFile"|"chatImage"|"media"
}
export const FileUpload = ({
  onChange,
  value,
  endpoint,
  divClass,
 imgClass,
  
}:FileUploadProps) => {
  const fileType = value?.split(".").pop();
  if(value && fileType !== "pdf"){
    return(
      <div className={cn("relative h-20 w-20",divClass)}>
        <Image
          fill
          src={value}
          alt="Upload"
          className={cn("rounded-full",imgClass)}
        />
        <button onClick={()=>onChange("")}
        className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
        >
          <X className="h-4 w-4"/>
        </button>
      </div>
    )
  }
  return (
    <div>
      <UploadDropzone 
        endpoint={endpoint}
        onClientUploadComplete={(res)=>{
          onChange(res?.[0].url);
        }}
        onUploadError={(error:any)=>{
          toast.error(error);
        }}
        appearance={{
          button:
            "ut-ready:bg-indego-500 ut-uploading:cursor-not-allowed rounded-r-none bg-purple-500 bg-none after:bg-black",}}
      />
    </div>
  )
}
