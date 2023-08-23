"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { deleteHack } from "@/lib/actions/hack.actions";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/nextjs";

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
            if (pathname === `/profile/${userId}`) {
              router.refresh();
            } else {
              router.push("/");
            }
          }
        toast.success("Deleted");
       } catch (error:any) {
        toast.error(error);
       }
      }}
    />
  );
}

export default DeleteHack;