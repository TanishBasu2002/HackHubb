"use client";

import { usePathname, useRouter } from "next/navigation";
import MobileToggle from "../share/MobileToggle";
import Link from "next/link";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { isTeacher } from "@/lib/validations/teacher.validation";
import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/hackschool/teacher");
  const isCoursePage = pathname?.includes("/hackschool/courses");
  const isSearchPage = pathname === "/hackschool/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isCoursePage ? (
          <Link href="/hackschool">
            <Button size="sm" variant="default">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href="/hackschool/teacher/courses">
            <Button size="sm" variant="default">
              Teacher Login
            </Button>
          </Link>
        ) : (
          <Link href="/hackschool/teacher">
            <Button size="sm" variant="outline">
              Become a teacher
            </Button>
          </Link>
        )}
        <MobileToggle className="max-md:hidden" />
      </div>
    </>
  );
};
