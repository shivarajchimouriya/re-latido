import { z } from "zod";

export const signInFormSchema = z.object({
    passoword: z.string().min(3, "password is too short")
});
export interface ISigninForm extends z.infer<typeof signInFormSchema> { }