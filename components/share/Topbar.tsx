"use client";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

export default function Topbar() {
    const pathname= usePathname();
    const isActive = (pathname ==="/activity");
    const Icon = isActive ? AiFillHeart : AiOutlineHeart;
    const [isMounted,setIsMounted]=useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[]);
    
      if (!isMounted) {
          return null;
      }
    return (
        <nav className={twMerge(`bg-gradient-to-b from-slate-500 via-slate-800 to-black`,"topbar")}>
            <Link href="/" className="flex items-center gap-4">
                <Image src="/assets/logo.svg" alt="logo" width={28} height={28}/>
                <p className="text-heading3-bold md:block lg:block hidden text-light-1 max-xs:hidden">HackHubb</p>
            </Link> 
            <div className="flex items-center gap-1">
            <div className="block">
                <Link href="/activity">
                <div className="block cursor-pointer text-white">
                <Icon color={isActive ? 'white' : 'white'} size={25} />
                </div>
                </Link>
            </div>
                <OrganizationSwitcher appearance={
                   { baseTheme:dark,
                    elements:{
                        organizationSwitcherTrigger:"py-2 px-4"
                    }}
                }/>
            <div className="md:hidden">
                            <div className="flex cursor-pointer">
                            <UserButton afterSignOutUrl="/sign-in" appearance={{ baseTheme:dark,}} />
                            </div>
                       
                </div>
            </div>
        </nav>
    )
}