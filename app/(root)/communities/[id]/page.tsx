import UserCard from "@/components/cards/UserCard";
import HacksTab from "@/components/share/HacksTab";
import ProfileHeader from "@/components/share/ProfileHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { communityTabs } from "@/constants";
import { fetchCommunityDetails } from "@/lib/actions/community.action";
import { currentUser } from "@clerk/nextjs"
import Image from "next/image";
const Page = async({params}:{params:{id:string}}) => {
    const user = await currentUser();
    if(!user) return null;
    //feching all te comunities
    const communityDetails = await fetchCommunityDetails(params.id)

  return (
    <section>
      <ProfileHeader
      accountId={communityDetails.id}
      authUserId={user.id}
      name={communityDetails.name}
      username={communityDetails.username}
      imgUrl={communityDetails.image?(communityDetails.image):("/assets/c.png")}
      bio=""
      type="Community"
      />
      <div className="mt-9">
        <Tabs defaultValue="hacks" className="w-full">
        <TabsList className='tab'>
            {communityTabs.map((tab) => (
              <TabsTrigger key={tab.label} value={tab.value} className='tab'>
                <Image
                  src={tab.icon}
                  alt={tab.label}
                  width={24}
                  height={24}
                  className='object-contain'
                />
                <p className='max-sm:hidden'>{tab.label}</p>

                {tab.label === "Hacks" && (
                  <p className='ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2'>
                    {communityDetails.hacks.length}
                  </p>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
              {/**Hacks */}
            <TabsContent  value="Hacks" className="w-full text-light-1">
            <HacksTab
              currentUserId={user.id}
              accountId={communityDetails._id}
              accountType='Community'
            />
            </TabsContent>
               {/**Members */}
               <TabsContent value='members' className='mt-9 w-full text-light-1'>
                <section className='mt-9 flex flex-col gap-10'>
                  {communityDetails.members.map((member: any) => (
                    <UserCard
                      key={member.id}
                      id={member.id}
                      name={member.name}
                      username={member.username}
                      imgUrl={member.image?(member.image):("/assets/profile.svg")}
                      personType='User'
                    />
                  ))}
                </section>
              </TabsContent>
               {/**Request */}
               <TabsContent  value="Request" className="w-full text-light-1">
             <HacksTab currentUserId={user.id} accountId={communityDetails._id} accountType="User"/>
            </TabsContent>

        </Tabs>
      </div>
    </section>
  )
}

export default Page
