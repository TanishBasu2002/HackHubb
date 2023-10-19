import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import FileStorageHeader from "./_components/FileStorageHeader";

/* eslint-disable react/react-in-jsx-scope */
const Page = async () =>  {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <section>
      <h1 className='head-text mb-10'>File Storage</h1>
      <FileStorageHeader/>
    </section>
  );
}

export default Page;