import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
    const user = await currentUser();
    if (!user) redirect("/sign-in");
    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/onboarding");
    return (
        <>
        <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 ">
        <Link href="/">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="24"
          width="24"
          className="mx-auto w-72"
          src="/assets/message.svg"
          alt="Logo"
        />
        <h2 className="mt-6 head-text text-center text-3xl font-bold tracking-tight text-light-1">
            Welcome to HackChat (Beta)
        </h2>
      </div>
        </Link>
    </div>
</>
    )
}