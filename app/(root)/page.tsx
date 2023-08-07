//app/page.tsx

import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <>
      <UserButton afterSignOutUrl="/"/> 
      <h1 className="head-text text-left">Home</h1>
    </>
  )
}