/* eslint-disable react/react-in-jsx-scope */
"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { deleteHack } from "@/lib/actions/hack.actions";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

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
  const { userId } = useAuth();
  if (currentUserId !== authorId || pathname === "/") return null;
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const onClick = async () => {
    try {
      await deleteHack(JSON.parse(hackId), pathname ?? "");
      toast.dismiss();
      toast.success("Deleted", {
        style: {
          borderRadius: "10px",
          background: "#44495C",
          color: "#fff",
        },
      });

      if (!parentId || (!isComment && pathname === `/profile/${userId}`)) {
        router.refresh();
      } else if (isComment || (parentId && pathname === `/hack/${hackId}`)) {
        router.refresh();
      } else {
        router.push("/");
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error);
    }
  };
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="default"
            className="bg-transparent hover:bg-slate-600"
          >
            <Image
              src="/assets/delete.svg"
              alt="delete"
              width={18}
              height={18}
              className="cursor-pointer  object-contain"
            />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-light-2">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              post and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="pr-2">
            <div className="justify-between text-light-2 flex py-2 items-center p-2 gap-2 w-full">
              <AlertDialogCancel className="bg-rose-700 hover:bg-rose-900 hover:text-light-1 border-none">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-emerald-700 hover:bg-emerald-900"
                onClick={onClick}
              >
                Continue
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default DeleteHack;
