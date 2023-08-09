import HackCard from "@/components/cards/HackCard"
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
        <HackCard key={hack._id} id={hack._id} currentUserId={user?.id || ""}
        parentId={hack.prentId} content={hack.text} author={hack.author} 
        community={hack.community} createdAt={hack.createdAt} comments ={hack.children}
         />
        </div>
    </section>)
}
export default Page