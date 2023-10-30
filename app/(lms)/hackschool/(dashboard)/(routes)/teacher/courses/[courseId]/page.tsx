import { IconBadge } from "@/components/school/icon-badge";
import { fetchUser } from "@/lib/actions/user.actions";
import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs";
import { File, LayoutDashboard, ListChecks } from "lucide-react";
import { redirect } from "next/navigation";
import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import { ImageForm } from "./_components/image-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CategoryForm } from "./_components/category-form";
import { ChaptersForm } from "./_components/chapters-form";
import { PriceForm } from "./_components/price-form";
import { AttachmentForm } from "./_components/attachment-form";
import { BiRupee } from "react-icons/bi";
import { Banner } from "@/components/school/banner";
import { Actions } from "./_components/actions";

const CourseIdPage = async({params}:{params:{courseId:string}}) => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  const { userId } = auth();
  if (!userId) {
    return redirect("/hackschool");
  }
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
      userId
    },
    include: {
      chapters: {
        orderBy: {
          position: "asc",
        },
      },
      attachments: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  if (!course) {
    return redirect("/hackschool");
  }

  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
    course.chapters.some(chapter => chapter.isPublished),
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);
  return(
    <ScrollArea className="bg-slate-950 min-h-screen">
    {!course.isPublished && (
        <Banner
          label="This course is unpublished. It will not be visible to the students."
        />
      )}
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
      <Actions
            disabled={!isComplete}
            courseId={params.courseId}
            isPublished={course.isPublished}
          />
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
        <ImageForm initialData={course} courseId={course.id}/>
        <CategoryForm initialData={course} courseId={course.id} options={categories.map((category) => ({label: category.name,value: category.id,}))}/>
        </div>
        <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={ListChecks} />
                <h2 className="text-xl">
                  Course chapters
                </h2>
              </div>
              <ChaptersForm initialData={course} courseId={course.id}/>
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={BiRupee} />
                <h2 className="text-xl">
                  Sell your course
                </h2>
              </div>
              <PriceForm initialData={course} courseId={course.id}/>
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={File} />
                <h2 className="text-xl">
                  Resources & Attachments
                </h2>
              </div>
              <AttachmentForm initialData={course} courseId={course.id}/>
            </div>
          </div>
      </div>
    </div>
    </ScrollArea>
  );
}
export default CourseIdPage;