/* eslint-disable react/react-in-jsx-scope */
import { InitialModel } from "@/components/chat-models/initial-model";
import { initialProfile } from "@/lib/chat/initial-profile"
import { db } from "@/lib/db"
import { redirect } from "next/navigation";
const SetupPage = async() => {
    const profile = await initialProfile();
    const server=await db.server.findFirst({
        where:{
            members:{
                some:{
                    profileId: profile.id
                }
            }
        }
    });

    if(server){
        return redirect(`/hackchat/servers/${server.id}`);
    }
  return (

      <InitialModel/>
  )
}

export default SetupPage
