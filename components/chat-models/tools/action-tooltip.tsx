/* eslint-disable react/react-in-jsx-scope */
"use client";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

interface ActionTooltipProps{
    label:string,
    children:React.ReactNode;
    side?:"top"|"right"|"bottom"|"left";
    align?:"start" | "center" |"end";
}
export const ActionTooltip= ({label,
    children,
    side,
    align,}:ActionTooltipProps)=>{
      const [isMounted,setIsMounted]=useState(false);
      useEffect(()=>{
          setIsMounted(true);
      },[]);
  
      if (!isMounted) {
          return null;
      }
        return(
            <TooltipProvider>
            <Tooltip delayDuration={50}>
              <TooltipTrigger asChild>
                {children}
              </TooltipTrigger>
              <TooltipContent side={side} align={align}>
                <p className="font-semibold text-sm capitalize">
                  {label.toLowerCase()}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
    }
