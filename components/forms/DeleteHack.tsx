/* eslint-disable react/react-in-jsx-scope */
"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { deleteHack } from "@/lib/actions/hack.actions";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

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
  return (
    <Image
      src='/assets/delete.svg'
      alt='delete'
      width={18}
      height={18}
      className='cursor-pointer object-contain'
      onClick={async () => {
       try {
        await deleteHack(JSON.parse(hackId), pathname);
        if (!parentId || !isComment) {
            if (pathname === `/profile/${userId}` || pathname===`/hack/${hackId}`) {
              router.refresh();
            } else {
              router.push("/");
            }
          }
        toast.success("Deleted",{
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       } catch (error:any) {
        toast.error(error);
       }
      }}
    />
  );
}

export default DeleteHack;