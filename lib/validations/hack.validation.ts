import * as z from 'zod';
//hacks
export const HackValidation = z.object({
    hack:z.string().nonempty().min(3,{message:"Minimum 3 Charecters"}),
    accountId:z.string(),
})
//comments
export const CommentValidation = z.object({
    hack:z.string().nonempty().min(3,{message:"Minimum 3 Charecters"}),
})