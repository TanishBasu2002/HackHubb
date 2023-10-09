/* eslint-disable react/react-in-jsx-scope */
"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
    {
        icon:Layout,
        label:"Dashboard",
        href:"/hackschool",
    },
    {
        icon:Compass,
        label:"Brows",
        href:"/hackschool/search",
    },
];
const teacherRoutes = [
    {
      icon: List,
      label: "Courses",
      href: "/hackschool/teacher/courses",
    },
    {
      icon: BarChart,
      label: "Analytics",
      href: "/hackschool/teacher/analytics",
    },
  ]
export const SidebarRoutes =()=>{
    const pathname = usePathname();

    const isTeacherPage = pathname?.includes("/teacher");

    const routes = isTeacherPage ? teacherRoutes : guestRoutes;
    return(
        <div className="flex flex-col w-full">
            {routes.map((route)=>(
                <SidebarItem key={route.href} href={route.href} icon={route.icon} label={route.label} />
            ))}
        </div>
    )
}