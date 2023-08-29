/* eslint-disable react/react-in-jsx-scope */
"use client";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "../tools/action-tooltip";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface NavigationItemProps{
    id: string;
    imageUrl:string;
    name:string;
}
const NavigationItem = ({id,
    imageUrl,
    name,}:NavigationItemProps) => {
    const params = useParams();
    const router = useRouter();
    const onClick = () =>{
        router.push(`/hackchat/server/${id}`)
    }
    return (
        <ActionTooltip side="right" align="center" label={name}>
            <button onClick={onClick} className="group relative flex items-center">
            <div className={cn(
          "absolute left-0 ml-[105px] bg-primary rounded-r-full transition-all w-[4px]",
          params?.serverId !== id && "group-hover:h-[20px]",
          params?.serverId === id ? "h-[36px]" : "h-[8px]"
        )} />
        <div className={cn(
          "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
          params?.serverId === id && "bg-primary/10 text-primary rounded-[16px]"
        )}>
          <Image
            fill
            src={imageUrl}
            alt="Channel"
          />
        </div>
            </button>
        </ActionTooltip>
    )
}

export default NavigationItem
