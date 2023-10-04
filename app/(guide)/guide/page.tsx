import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

/* eslint-disable react/react-in-jsx-scope */
export default async function GuideHome(){
    const user = await currentUser();
  if (!user) redirect("/sign-in");
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
    return(
        <div className="pl-[100px]">
            <Link href="/">Guide</Link>
        </div>
    )
}