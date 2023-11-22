/* eslint-disable react/react-in-jsx-scope */

import { SearchInput } from "@/components/school/search-input";
import { fetchUser } from "@/lib/actions/user.actions";
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Categories } from "./_components/categories";
import { db } from "@/lib/db";
import { getCourses } from "@/lib/actions/school/get-courses";
import { CoursesList } from "@/components/school/courses-list";

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const Page = async ({ searchParams }: SearchPageProps) => {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getCourses({
    userId,
    ...searchParams,
  });

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <div className="p-6 space-y-4">
        <Categories items={categories} />
        <CoursesList items={courses} />
      </div>
    </>
  );
};

export default Page;
