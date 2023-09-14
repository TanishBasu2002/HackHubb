/* eslint-disable react/react-in-jsx-scope */
"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { deleteHack } from "@/lib/actions/hack.actions";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

interface Props {
  hackId: string;
  currentUserId: string;
  authorId: string;
  parentId: string | null;
  isComment?: boolean;
}

function DeleteHack({
  hackId,
  currentUserId,
  authorId,
  parentId,
  isComment,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const {userId} = useAuth();
  if (currentUserId !== authorId || pathname === "/") return null;
  const [isMounted,setIsMounted]=useState(false);
  useEffect(()=>{
      setIsMounted(true);
  },[]);
  
    if (!isMounted) {
        return null;
    }
    const onToastClick = async () => {
      try {
       await deleteHack(JSON.parse(hackId), pathname);
        toast.dismiss();
       toast.success("Deleted",{
         style: {
           borderRadius: '10px',
           background: '#333',
           color: '#fff',
         },
       });
       if (!parentId || !isComment) {
        if (pathname === `/profile/${userId}`) {
          router.refresh();
        } else {
          router.push("/");
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error:any) {
       toast.error(error);
      }
     }
     const onClick = async () => {
      try {
        toast((t) => (
          <div className="px-6 py-4">
            <span className="flex items-center gap-2 justify-between w-full ">
             <p>Delete it permerantly?</p>
             <Button className="bg-emerald-700" onClick={onToastClick}>
               Confirm
             </Button>
             <Button className="bg-rose-700" onClick={() => toast.dismiss(t.id)}>
               Cancel
             </Button>
           </span>
          </div>
         ),
         {
           style: {
             borderRadius: '10px',
             background: '#333',
             color: '#fff',
           },
         });
      } catch (error:any) {
        toast.error(error);
      }
     }
  return (<>
    <Image
      src='/assets/delete.svg'
      alt='delete'
      width={18}
      height={18}
      className='cursor-pointer object-contain'
      onClick={onClick}
    /></>
  );
}

export default DeleteHack;