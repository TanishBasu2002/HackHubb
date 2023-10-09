"use client";

import { usePathname, useRouter } from "next/navigation";
import MobileToggle from "../share/MobileToggle";
import Link from "next/link";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

export const NavbarRoutes = () => {
    const pathname = usePathname();
    const router = useRouter();

    const isTeacherPage= pathname?.startsWith("/hackschool/teacher");
    const isCoursePage = pathname?.includes("/hackschool/chapter");
    return (
    <div className="flex gap-x-2 ml-auto">
         {isTeacherPage || isCoursePage ? (
          <Link href="/hackschool">
            <Button size="sm" className="hover:text-light-2 hover:bg-slate-800" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) :  (
          <Link href="/hackschool/teacher/courses">
            <Button size="sm" className="hover:text-light-2 hover:bg-slate-800" variant="ghost">
              Teacher Login
            </Button>
          </Link>
        )}
        <MobileToggle className="max-md:hidden"/>
    </div>
  )
}
