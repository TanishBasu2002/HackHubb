//app/page.tsx
import AccountProfile from "@/components/forms/AccountProfile";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings
  
  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/");
  const userData ={
    id:user?.id,
    objectId:userInfo?._id,
    username:userInfo? userInfo?.username : user?.username,
    name: userInfo? userInfo?.name : user?.firstName || "",
    bio : userInfo? userInfo?.bio :"",
    image: userInfo? userInfo?.image : user?.imageUrl,
  }
  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">Complete your Profile to use HackHubb</p>
      <section className="mt-9 bg-gradient-to-b from-slate-600 via-slate-800 to-slate-950 rounded-xl p-10">
        <AccountProfile user={userData} btnTitle="Continue"/>
      </section>
    </main>
  )
}
//mt-9 bg-dark-2 bg-gradient-to-b from-gray-600 via-slate-800 to-black rounded-xl p-10