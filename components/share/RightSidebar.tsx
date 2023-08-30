/* eslint-disable react/react-in-jsx-scope */
import { fetchCommunities } from "@/lib/actions/community.action";
import { fetchUsers } from "@/lib/actions/user.actions";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import UserCard from "../cards/UserCard";


async function RightSidebar() {
  const user = await currentUser();
  if (!user) return redirectToSignIn();

  const similarMinds = await fetchUsers({
    userId: user.id,
    pageSize: 4,
  });
  const suggestedCommunities = await fetchCommunities({ pageSize: 4});
  
  
  return (
    <section className='custom-scrollbar rightsidebar'>
      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-medium text-light-1'>
          Suggested Communities
        </h3>

        <div className='mt-7 flex w-[350px] flex-col gap-9'>
          {suggestedCommunities && suggestedCommunities.communities.length > 0 ? (
            <>
              {suggestedCommunities.communities.map((community) => (
                <UserCard
                  key={community.id}
                  id={community.id}
                  name={community.name}
                  username={community.username}
                  imgUrl={community.image?community.image:"/assets/c.png"}
                  personType='Community'
                />
              ))}
            </>
          ) : (
            <p className='!text-base-regular text-light-3'>
              No communities yet
            </p>
          )}
        </div>
      </div>

      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-medium text-light-1'>Suggested Users</h3>
        <div className='mt-7 flex w-[350px] flex-col gap-10'>
          {similarMinds && similarMinds.users.length > 0 ? (
            <>
              {similarMinds.users.map((person) => (
                <UserCard
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  username={person.username}
                  imgUrl={person.image}
                  personType='User'
                />
              ))}
            </>
          ) : (
            <p className='!text-base-regular text-light-3'>No users yet</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default RightSidebar;