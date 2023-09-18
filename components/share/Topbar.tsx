/* eslint-disable react/react-in-jsx-scope */
"use client";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ActionTooltip } from "../chat-models/tools/action-tooltip";
import MobileToggle from "./MobileToggle";

export default function Topbar() {
    const pathname= usePathname();
    const isActive = (pathname ==="/activity");
    const [isMounted,setIsMounted]=useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[]);
    
      if (!isMounted) {
          return null;
      }

    return (
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
                <Image src="/assets/logo.svg" alt="logo" width={28} height={28}/>
                <p className="text-heading3-bold md:block text-light-1 max-lg:hidden">HackHubb</p>
            </Link>
              <div className="flex items-center gap-1">
                <div className="block">
                    <Link href="/activity">
                    <div className="block cursor-pointer text-white">
                    <ActionTooltip label="Activity" side="bottom">{isActive ? <Image src="/assets/heart-filled.svg"  alt="logo" width={28} height={28}/> : <Image src="/assets/heart.svg"  alt="logo" width={24} height={24}/>}</ActionTooltip>
                    </div>
                    </Link>
                </div>
                    <OrganizationSwitcher appearance={
                       { baseTheme:dark,
                        elements:{
                            organizationSwitcherTrigger:"py-2 px-4"
                        }}
                    }/>
                    
                                <div className="flex cursor-pointer">
                                 {pathname ==="/guide" ?  <MobileToggle/> : <MobileToggle className="md:hidden"/>}
                                </div>
                </div>
        </nav>
    )
}