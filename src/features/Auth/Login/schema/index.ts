import { z } from "zod";

export const signInFormSchema = z.object({
  username: z.string().min(3, "Username is too short"),
  passoword: z.string().min(3, "Password is too short"),
});
export interface ISigninForm extends z.infer<typeof signInFormSchema> {}
