/* eslint-disable react/react-in-jsx-scope */

import { ServerTopbar } from "@/components/chat-models/server/server-topbar";
import { currentProfile } from "@/lib/chat/current-profile"
import { db } from "@/lib/db";
import { cn } from "@/lib/utils";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";


const ServerIdLayout= async({children,params}:{children:React.ReactNode;params:{serverId:string}}) => {
  const profile =await currentProfile();
  if (!profile) {
   return redirectToSignIn();
  }
  const server =await db.server.findUnique({
      where:{
        id:params.serverId,
        members:{
          some:{
            profileId:profile.id,
          }
        }
      }
    })
    if(!server){
      return redirect('/hackchat');
    }
  return (
    <div className="h-full">
      <div className={cn("topbar","h-16")}>
        <ServerTopbar serverId={params.serverId}/>
      </div>
      <main className="h-full pt-16 md:pl-5">
      {children}
      </main>
    </div>
  )
}

export default ServerIdLayout

