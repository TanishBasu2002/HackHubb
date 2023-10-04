/* eslint-disable react/react-in-jsx-scope */

import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async() => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
    return (
      <div className='text-light-1'>
        HackSchool
      </div>
    )
  }
  
  export default Page
  