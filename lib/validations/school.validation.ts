import * as z from 'zod';
export const CreateCourseSchema = z.object({
    title: z.string().min(1, {
      message: "Title is required",
    }),
  });

export const CourseSchema = z.object({
    input: z.string().min(1, {
      message: "Input is required",
    }),
  });
