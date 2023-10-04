// imports

import { redirect } from "next/navigation";
import Dropzone from "../_components/dropzone";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";


export default async function Home() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <div className="space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Free Unlimited File Converter
        </h1>
        <p className="text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Unleash your creativity with HackCloud File Converter – the ultimate online tool for
          unlimited and free multimedia conversion. Transform images, audio, and
          videos effortlessly, without restrictions. Start converting now and
          elevate your content like never before!
        </p>
      </div>

      {/* Upload Box */}
      <Dropzone />
    </div>
  );
}
