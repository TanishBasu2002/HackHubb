/* eslint-disable react/react-in-jsx-scope */

import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"


export const Sidebar = () => {
  return (
    <div className="h-full border-r border-slate-800 flex flex-col overflow-y-auto bg-gradient-to-b from-black via-slate-950 to-slate-900 shadow-sm">
        <div className="p-6">
            <Logo />
        </div>
        <div className="flex flex-col w-full">
            <SidebarRoutes />
        </div>
    </div>
  )
}

