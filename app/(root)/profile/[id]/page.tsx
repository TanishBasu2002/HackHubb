/* eslint-disable react/react-in-jsx-scope */
import HacksTab from "@/components/share/HacksTab";
import ProfileHeader from "@/components/share/ProfileHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { profileTabs } from "@/constants";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs"
import Image from "next/image";
import { redirect } from "next/navigation";
const Page = async({params}:{params:{id:string}}) => {
    const user = await currentUser();
    if(!user) return null;
    const userInfo =await fetchUser(params.id);
    if(!userInfo?.onboarded) redirect('/onboarding');
  return (
    <section>
      <ProfileHeader
      accountId={userInfo.id}
      authUserId={user.id}
      name={userInfo.name}
      username={userInfo.username}
      imgUrl={userInfo.image}
      bio={userInfo.bio}
      />
      <div className="mt-9">
        <Tabs defaultValue="hacks" className="w-full">
        <TabsList className='tab'>
            {profileTabs.map((tab) => (
              <TabsTrigger key={tab.label} value={tab.value} className='tab'>
                <Image
                  src={tab.icon}
                  alt={tab.label}
                  width={24}
                  height={24}
                  className='object-contain'
                />
                <p className='max-sm:hidden'>{tab.label}</p>
              </TabsTrigger>
            ))}
          </TabsList>
          {profileTabs.map((tab) =>(
            
            <TabsContent key={`content-${tab.label}`} value={tab.value} className="w-full text-light-1">
             <HacksTab currentUserId={user.id} accountId={userInfo.id} accountType="User"/>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default Page
