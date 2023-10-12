"use client"
import React, { useEffect, useState } from 'react';
import * as z from "zod";
import axios from 'axios';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { CreateCourseSchema } from '@/lib/validations/school.validation';

const CreatePage = async () => {
  const [isClient, setIsClient] = useState(false); 
   useEffect(() => {
    setIsClient(true)
  }, []);
  const router = useRouter();
  const form = useForm<z.infer<typeof CreateCourseSchema>>({
    resolver: zodResolver(CreateCourseSchema),
    defaultValues: {
      title: ""
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof CreateCourseSchema>) => {
    try {
      const response = await axios.post("/api/courses", values);
      router.push(`/hackschool/teacher/courses/${response.data.id}`);
      toast.success("Course created",{
        style: {
          borderRadius: '10px',
          background: '#44495C',
          color: '#fff',
        },
      });
    } catch {
      toast.error("Something went wrong",{
        style: {
          borderRadius: '10px',
          background: '#44495C',
          color: '#fff',
        },
      });
    }
  }
  if (!isClient) {
    return null;
}
  return ( 
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">
          Name your course
        </h1>
        <p className="text-sm text-slate-400">
          What would you like to name your course? Don&apos;t worry, you can change this later.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Course title
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Advanced web development'"
                      {...field}
                      className='bg-slate-800 border-slate-600'
                    />
                  </FormControl>
                  <FormDescription>
                    What will you teach in this course?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/hackschool">
                <Button
                  type="button"
                  variant="ghost"
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
              >
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
   );
}
 
export default CreatePage;
