"use client"

//import { fetchPosts } from "@/lib/actions/hack.actions";


export default async function Home() {
  //const result =await fetchPosts(1,30);
  return (
    <>
      <h1 className="head-text text-left">Home</h1>
      <section className="mt-9 flex flex-col gap-10">
        {/**{result.posts.length ===0?(
          <p className="no-result">No hacks found</p>
        ):(
          <>
          {results.posts.map((post)=>(
            <ThreadCard key={post._id} id={post._id} currentUserId={user?.id}
             parentId={post.prentId} content={post.text} author={post.author} 
             community={post.community} createdAt={post.createdAt} comments ={post.children}
            />
          ))}
          </>
        )
        } */}
        new section
      </section>
    </>
  )
}