/* eslint-disable react/react-in-jsx-scope */

import { Menu } from "lucide-react"
import {Sheet,SheetContent,SheetTrigger,} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import LeftSidebar from "./LeftSidebar"
import { cn } from "@/lib/utils"

interface MobileToggleProps{
  className?:string;
}

const MobileToggle = ({className}:MobileToggleProps) => {
  return (
    <Sheet>
        <SheetTrigger asChild >
            <Button size="icon" className={cn("bg-slate-800",className)}>
            <Menu />
            </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 flex gap-0 w-fit">
            <div className="w-full">
            <LeftSidebar/>
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileToggle
