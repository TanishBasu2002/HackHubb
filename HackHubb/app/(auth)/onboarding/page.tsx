import AccountProfile from "@/components/forms/AccountProfile";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/");
  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user?.username,
    name: userInfo ? userInfo?.name : user?.firstName || "",
    bio: userInfo ? userInfo?.bio : "",
    image: userInfo ? userInfo?.image : user?.imageUrl,
  };
  return (
    <ScrollArea className="mx-auto flex w-[600px] sm:max-w-4xl flex-col justify-start px-10 py-5 h-full">
      <h1 className="head-text">Onboarding</h1>

      <section className="mt-3 bg-gradient-to-b from-slate-600 via-slate-800 to-slate-950 rounded-xl p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </ScrollArea>
  );
}
//mt-9 bg-dark-2 bg-gradient-to-b from-gray-600 via-slate-800 to-black rounded-xl p-10
