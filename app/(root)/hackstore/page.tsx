import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async({params}:{params:{id:string}}) => {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(user.id);
    if(!userInfo?.onboarded) redirect('/onboarding')
    return(
        <div>
            <h1 className="text-light-2 font-bold">HackStore</h1>
        </div>
    )
}
export default Page;