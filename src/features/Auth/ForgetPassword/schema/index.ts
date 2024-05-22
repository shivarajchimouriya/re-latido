import { z } from "zod";

export const forgetPasswordSchema = z.object({
    username: z.string()
})

export interface IForgetPasswordForm extends z.infer<typeof forgetPasswordSchema> { }