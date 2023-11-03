
import { isTeacher } from "@/lib/validations/teacher.validation";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const TeacherLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { userId } = auth();

  if (!isTeachers(userId)) {
    return redirect("/hackschool");
  }

  return <>{children}</>
}
 
export default TeacherLayout;