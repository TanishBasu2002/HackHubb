import * as z from 'zod';
export const ServerDialogValidation = z.object({
    name:z.string().min(1,{
        message:"ChatRoom name is required."
    }),
    imageUrl:z.string().min(1,{
        message:"Image is required"
    })
});
