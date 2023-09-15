/* eslint-disable react/react-in-jsx-scope */
import HackCard from "@/components/cards/HackCard"
import Comment from "@/components/forms/Comment";
import { fetchHackById } from "@/lib/actions/hack.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async({params}:{params:{id:string}})=>{
    if (!params.id) return null;
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(user.id);
    if(!userInfo?.onboarded) redirect('/onboarding')

    const hack = await fetchHackById(params.id);
    return(
    <section className="relative">
        <div>
        { hack?._id ?<HackCard key={hack._id} id={hack?._id} currentUserId={user?.id || ""}
        parentId={hack.prentId} content={hack.text} author={hack.author} image={hack.image}
        community={hack.community} createdAt={hack.createdAt} comments ={hack.children}
         />:redirect("/")}
        </div>
         <div className="mt-7">
            <Comment hackId={hack.id} currentUserImg={userInfo.image} currentUserId={JSON.stringify(userInfo._id)}/> 
         </div>
         <div className="mt-10">
            {hack.children.map((childItem:any)=>(
            <HackCard key={childItem._id} id={childItem._id} currentUserId={user?.id || ""}
            parentId={childItem.prentId} content={childItem.text} author={childItem.author} 
            community={childItem.community} createdAt={childItem.createdAt} comments ={childItem.children}
            isComment /> 
            ))}
         </div>
    </section>)
}
export default Page