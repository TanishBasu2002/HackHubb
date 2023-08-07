//app/page.tsx
import AccountProfile from "@/components/forms/AccountProfile";
import { UserButton, currentUser } from "@clerk/nextjs";

export default async function Page() {
  const user=await currentUser();
  if (!user) return null; // to avoid typescript warnings
  const userInfo={};
  const userData ={
    id:user?.id,
    objjectId:userInfo?._id,
    username:userInfo?.username || user?.username,
    name:userInfo?.name || user?.firstName || "",
    bio :userInfo?.bio ||"",
    image: userInfo?.image || user?.imageUrl,
  }
  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">Complete your Profile to use HackHub</p>
      <section className="mt-9 bg-dark-2 bg-gradient-to-b from-gray-600 via-slate-800 to-black rounded-xl p-10">
        <AccountProfile user={userData} btnTitle="Continue"/>
      </section>
    </main>
  )
}
//mt-9 bg-dark-2 bg-gradient-to-b from-gray-600 via-slate-800 to-black rounded-xl p-10