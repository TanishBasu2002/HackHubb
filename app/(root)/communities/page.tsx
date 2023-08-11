import HacksTab from "@/components/share/HacksTab";
import ProfileHeader from "@/components/share/ProfileHeader";
import { profileTabs } from "@/constants";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs"
import Image from "next/image";
import { redirect } from "next/navigation";
const Page = async() => {
    const user = await currentUser();
    if(!user) return null;
    const userInfo =await fetchUser(user.id);
    if(!userInfo?.onboarded) redirect('/onboarding');
    return (
      <section>
        <h1 className="head-text mb-10">Communities</h1>
      </section>
    )
  }
  
  export default Page
  