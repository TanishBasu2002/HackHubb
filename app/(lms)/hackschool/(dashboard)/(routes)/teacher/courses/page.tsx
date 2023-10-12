import { Button } from "@/components/ui/button";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

const CoursesPage = async() => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <div className="p-6">
      <Link href="/hackschool/teacher/create">
      <Button>
        New Course
      </Button>
      </Link>
    </div>
  )
}
export default CoursesPage;
