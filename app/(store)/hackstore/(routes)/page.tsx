/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export const revalidate =0;
const Page = async({params}:{params:{id:string}}) => {
    
    const user = await currentUser();
    if (!user) return null;
    
    const userInfo = await fetchUser(user.id);
    if(!userInfo?.onboarded) redirect('/onboarding')
    return(
        <div>
          Store
        </div>
    )
}
export default Page;