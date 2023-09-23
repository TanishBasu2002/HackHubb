/* eslint-disable react/react-in-jsx-scope */
"use client";

import { ShoppingBag, Store } from "lucide-react";
import { Button } from "../ui/button";
import { ActionTooltip } from "../chat-models/tools/action-tooltip";
import { useEffect, useState } from "react";

const NavbarActions =()=>{
    const [isMounted,setIsMounted]=useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[]);
    
      if (!isMounted) {
          return null;
      } 
    return(
        <div className="ml-auto flex items-cemnter gap-x-4">
            <ActionTooltip label="Cart" side="top">
            <Button className="flex items-center rounded-full bg-slate-400 hover:bg-slate-300 px-4 py-2">
                <ShoppingBag size={20} color="black"/>
                <span className="ml-2 text-sm font-medium text-black">
                    0
                </span>
            </Button>
            </ActionTooltip>
            <ActionTooltip label="Become a Seller" side="top">
            <Button className="p-2 flex items-center rounded-full bg-slate-400 hover:bg-slate-300 px-4 py-2">
                <Store size={20} color="black"/>
            </Button>
            </ActionTooltip>
        </div>
    )
}
export default NavbarActions