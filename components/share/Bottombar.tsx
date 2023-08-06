"use client"
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Bottombar() {
    const pathname =usePathname();
    return (
        <section className="bottombar">
            <div className="bottombar_container">
                {/**maping through index.ts eliments */}
                {sidebarLinks.map((link)=>{
                    //checking if the link is active
                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
                    return(
                        <Link href={link.route} key={link.label} className={`bottombar_link ${isActive && 'bg-gradient-to-r from-red-500 via-purple-500 to-gray-500'}`}>
                        <Image src={link.imgURL} alt={link.label} width={24} height={24}/>
                        <p className="text-subtle-medium text-light-1 max-sm:hidden">{link.label.split(/\s+/)}</p>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}