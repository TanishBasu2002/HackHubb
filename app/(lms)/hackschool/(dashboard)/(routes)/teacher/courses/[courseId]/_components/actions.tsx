"use client"
import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/school/use-confetti-store";
import { ConfirmModal } from "@/lib/modals/confirm-modal";
import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface ActionsProps {
    disabled: boolean;
    courseId: string;
    isPublished: boolean;
  };
  
  export const Actions = ({
    disabled,
    courseId,
    isPublished
  }: ActionsProps) => {
    const router = useRouter();
    const confetti = useConfettiStore();
    const [isLoading, setIsLoading] = useState(false);
  
    const onClick = async () => {
      try {
        setIsLoading(true);
  
        if (isPublished) {
          await axios.patch(`/api/courses/${courseId}/unpublish`);
          toast.success("Course unpublished",{
            style: {
              borderRadius: '10px',
              background: '#44495C',
              color: '#fff',
            }
          });
        } else {
          await axios.patch(`/api/courses/${courseId}/publish`);
          toast.success("Course published",{
            style: {
              borderRadius: '10px',
              background: '#44495C',
              color: '#fff',
            }
          });
          confetti.onOpen();
        }
  
        router.refresh();
      } catch {
        toast.error("Something went wrong",{
            style: {
              borderRadius: '10px',
              background: '#44495C',
              color: '#fff',
            }
          });
      } finally {
        setIsLoading(false);
      }
    }
    
    const onDelete = async () => {
      try {
        setIsLoading(true);
  
        await axios.delete(`/api/courses/${courseId}`);
  
        toast.success("Course deleted",{
            style: {
              borderRadius: '10px',
              background: '#44495C',
              color: '#fff',
            }
          });
        router.refresh();
        router.push(`/hackschool/teacher/courses`);
      } catch {
        toast.error("Something went wrong",{
            style: {
              borderRadius: '10px',
              background: '#44495C',
              color: '#fff',
            }
          });
      } finally {
        setIsLoading(false);
      }
    }
  
    return (
      <div className="flex items-center gap-x-2">
        <Button
          onClick={onClick}
          disabled={disabled || isLoading}
          variant="default"
          size="sm"
        >
          {isPublished ? "Unpublish" : "Publish"}
        </Button>
        <ConfirmModal onConfirm={onDelete}>
          <Button size="sm" disabled={isLoading}>
            <Trash className="h-4 w-4" />
          </Button>
        </ConfirmModal>
      </div>
    )
  }