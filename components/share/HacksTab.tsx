import { redirect } from "next/navigation";
import { fetchUserPosts } from "@/lib/actions/user.actions";

import HackCard from "../cards/HackCard";
import { fetchCommunityPosts } from "@/lib/actions/community.action";

interface Result {
  name: string;
  image: string;
  id: string;
  hacks: {  // Replaced "Hackss" with "hacks"
    _id: string;
    text: string;
    parentId: string | null;
    author: {
      name: string;
      image: string;
      id: string;
    };
    community: {
      id: string;
      name: string;
      image: string;
    } | null;
    createdAt: string;
    children: {
      author: {
        image: string;
      };
    }[];
  }[];
}

interface Props {
  currentUserId: string;
  accountId: string;
  accountType: string;
}

async function HacksTab({ currentUserId,accountId,accountType}: Props) {
  let result:any;
  if (accountType=='Community') {
    result= await fetchCommunityPosts(accountId);
  } else {
    result= await fetchUserPosts(accountId);
  }
  if (!result) {
    redirect("/");
  }

  return (
    <section className='mt-9 flex flex-col gap-10'>
      {result.hacks.length ===0 ?(
          <p className="no-result">User has not posted yet. </p>
        ):(
          <>
          {result.hacks.map((hack:any)=>(
            <HackCard key={hack._id} id={hack._id} currentUserId={currentUserId}
             parentId={hack.prentId} content={hack.text} image={hack.image} 
             author={accountType === "User" ? {name: result.name, image: result.image, id: result.id}:{name: hack.author.name, image: hack.author.image, id: hack.author.id}}
             community={hack.community} createdAt={hack.createdAt} comments ={hack.children}
            />
          ))}
          </>
        )
        } 
    </section>
  );
}
export default HacksTab;