/* eslint-disable react/react-in-jsx-scope */
"use client"
import { Button } from "../ui/button"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"

const FileStorageHeader = () => {
  return (
    <div className="justify-between text-light-2 flex py-2 items-center p-2 gap-2 w-full">
         <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="bg-gradient-to-tr from-gray-500 via-purple-500 to-rose-600 hover:bg-gradient-to-tr hover:from-rose-600 hover:via-sky-600 hover:to-emerald-600 hover:text-light-1 border-none"> 
            Upload Files
          </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-light-2">Upload Files</AlertDialogTitle>
              <AlertDialogDescription>
              Upload Files (Photos, Videos, PDFS, Docs etc...)
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="pr-2">
              <div className="justify-between text-light-2 flex py-2 items-center p-2 gap-2 w-full">
              <AlertDialogCancel className="bg-rose-700 hover:bg-rose-900 hover:text-light-1 border-none">Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-emerald-700 hover:bg-emerald-900" onClick={()=>{}}>Upload</AlertDialogAction>
              </div>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        {/**Create Folder */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline"className="bg-gradient-to-tr from-gray-500 via-purple-500 to-rose-600 hover:bg-gradient-to-tr hover:from-rose-600 hover:via-sky-600 hover:to-emerald-600 hover:text-light-1 border-none"> 
            Create Folder
          </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-light-2">Create A Folder</AlertDialogTitle>
              <AlertDialogDescription>
                Create A New Folder For Your File
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="pr-2">
              <div className="justify-between text-light-2 flex py-2 items-center p-2 gap-2 w-full">
              <AlertDialogCancel className="bg-rose-700 hover:bg-rose-900 hover:text-light-1 border-none">Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-emerald-700 hover:bg-emerald-900" onClick={()=>{}}>Create</AlertDialogAction>
              </div>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    </div>
  )
}

export default FileStorageHeader
