import { ChannelType } from '@prisma/client';
import * as z from 'zod';

export const ServerDialogValidation = z.object({
    name:z.string().min(1,{
        message:"ChatRoom name is required."
    }),
    imageUrl:z.string().min(1,{
        message:"Image is required"
    })
});

export const ChannelDialogValidation = z.object({
    name: z.string().min(1, {
      message: "Channel name is required."
    }).refine(
      name => name !== "general",
      {
        message: "Channel name cannot be 'general'"
      }
    ),
    type: z.nativeEnum(ChannelType)
  });
  
