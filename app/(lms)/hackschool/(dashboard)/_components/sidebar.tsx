/* eslint-disable react/react-in-jsx-scope */

import { Separator } from "@/components/ui/separator"
import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"
import { ActionTooltip } from "@/components/chat-models/tools/action-tooltip"
import { UserButton } from "@clerk/nextjs"
import MobileToggle from "@/components/share/MobileToggle"


export const Sidebar = () => {
  return (
    <div className="h-full border-r border-slate-800 flex flex-col overflow-y-auto bg-gradient-to-b from-black via-slate-950 to-slate-900 shadow-sm">
        <div className="p-6">
            <Logo />
            <Separator className="bg-slate-500" />
        </div>
        <div className="flex flex-col w-full">
            <SidebarRoutes />
        </div>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
       <ActionTooltip label='Navbar' side='left' align='center'>
       <MobileToggle className='bg-transparent md:hidden' />
       </ActionTooltip>
       <UserButton />
      </div>
    </div>
  )
}

