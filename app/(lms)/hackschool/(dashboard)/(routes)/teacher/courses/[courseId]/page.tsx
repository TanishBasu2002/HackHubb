import { IconBadge } from "@/components/school/icon-badge";
import { fetchUser } from "@/lib/actions/user.actions";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";
import { redirect } from "next/navigation";
import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
      <div>
        <div className="flex items-center gap-x-2">
        <IconBadge icon={LayoutDashboard}/>
        <h2 className="text-xl">
          Customize Course
        </h2>
        </div>
        <TitleForm initialData={course} courseId={course.id}/>
        <DescriptionForm initialData={course} courseId={course.id}/>
      </div>
      </div>
    </div>
  );
}
export default CourseIdPage;
