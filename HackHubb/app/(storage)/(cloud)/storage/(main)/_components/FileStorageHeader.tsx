/* eslint-disable react/react-in-jsx-scope */
"use client";
import { Button } from "../../../../../../components/ui/button";

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
} from "../../../../../../components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import Dropzone from "./dropzone";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const FileStorageHeader = () => {
  const router = useRouter();
  const onClick = () => {
    router.push("/file-converter");
  };
  return (
    <div className="justify-between text-light-2 flex py-2 items-center p-2 gap-2 w-full">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-gradient-to-tr from-gray-500 via-purple-500 to-rose-600 hover:bg-gradient-to-tr hover:from-rose-600 hover:via-sky-600 hover:to-emerald-600 hover:text-light-1 border-none"
          >
            Upload Files
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-light-2">
              Upload Files
            </AlertDialogTitle>
            <AlertDialogDescription>
              Upload Files (Photos, Videos, PDFS, Docs etc...)
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="pr-2">
            <div className="justify-between text-light-2 flex py-2 items-center p-2 gap-2 w-full">
              <AlertDialogCancel className="bg-rose-700 hover:bg-rose-900 hover:text-light-1 border-none">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-emerald-700 hover:bg-emerald-900"
                onClick={() => {}}
              >
                Upload
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/**Create Folder */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-gradient-to-tr from-gray-500 via-purple-500 to-rose-600 hover:bg-gradient-to-tr hover:from-rose-600 hover:via-sky-600 hover:to-emerald-600 hover:text-light-1 border-none"
          >
            Create Folder
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-light-2">
              Create A Folder
            </AlertDialogTitle>
            <AlertDialogDescription>
              Create A New Folder For Your File
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="pr-2">
            <div className="justify-between text-light-2 flex py-2 items-center p-2 gap-2 w-full">
              <AlertDialogCancel className="bg-rose-700 hover:bg-rose-900 hover:text-light-1 border-none">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-emerald-700 hover:bg-emerald-900"
                onClick={() => {}}
              >
                Create
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-gradient-to-tr from-gray-500 via-purple-500 to-rose-600 hover:bg-gradient-to-tr hover:from-rose-600 hover:via-sky-600 hover:to-emerald-600 hover:text-light-1 border-none"
          >
            File Convertor
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Convert Files</DialogTitle>
            <DialogDescription>Convert Files and Videos</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Drop Files Here
              </Label>
              <Dropzone />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FileStorageHeader;
