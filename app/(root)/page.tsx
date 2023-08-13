
import HackCard from "@/components/cards/HackCard";
import { fetchHacks } from "@/lib/actions/hack.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";


export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  const result =await fetchHacks(1,10000);
  return (
    <>
      <h1 className="head-text text-left">Home</h1>
      <section className="mt-9 flex flex-col gap-10">
        {result.hacks.length ===0 ?(
          <p className="no-result">No hacks found</p>
        ):(
          <>
          {result.hacks.map((hack)=>(
            <HackCard key={hack._id} id={hack._id} currentUserId={user?.id || ""}
             parentId={hack.prentId} content={hack.text} author={hack.author} 
             community={hack.community} createdAt={hack.createdAt} comments ={hack.children}
            />
          ))}
          </>
        )
        } 
      </section>
    </>
  )
}