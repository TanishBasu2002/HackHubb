import { Button } from "@/components/ui/button";
import { fetchUser } from "@/lib/actions/user.actions";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

const CourseIdPage = async({params}:{params:{courseId:string}}) => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  const course = await db.course.findUnique({
    where:{
      id:params.courseId
    }
  });
  if(!course){
    return redirect("/hackschool");
  }
  const requiredFields =[
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
  ];
  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`

  return(
    <div className="p-6">
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-y-2">
        <h1 className="head-text">
          Course setup
        </h1>
        <span className="text-sm text-slate-600">
          Complete all fields {completionText}
        </span>
      </div>
      </div>
    </div>
  );
}
export default CourseIdPage;
