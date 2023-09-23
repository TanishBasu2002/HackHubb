/* eslint-disable react/react-in-jsx-scope */
"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css"
import {FileIcon, X} from "lucide-react"
import Image from "next/image";
import { cn } from "@/lib/utils";


interface FileUploadProps{
  onChange:(url?:string)=>void;
  value:string | null;
  divClass?:string;
  imgClass?:string;
  endpoint:"messageFile"|"chatImage"|"media"|"storage"
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
          src={value?value:"/assets/profile.svg"}
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
  if (value && fileType === "pdf") {
    return (
      <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
        <FileIcon className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
        <a 
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-sm text-indigo-400 hover:underline"
        >
          {value}
        </a>
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
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
        onUploadError={(error:Error)=>{
          console.log(error);
        }}
        appearance={{
          button:
            "ut-ready:bg-indego-500 ut-uploading:cursor-not-allowed rounded-r-none bg-purple-500 bg-none after:bg-black",}}
      />
    </div>
  )
}
