import { NavbarRoutes } from "@/components/school/navbar-routes"
import { MobileSidebar } from "./mobile-sidebar"
export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-slate-900 shadow-sm">
       <MobileSidebar />
       <NavbarRoutes />
    </div>
  )
}
