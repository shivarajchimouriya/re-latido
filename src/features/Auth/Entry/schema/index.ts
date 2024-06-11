import { z } from "zod";

export const usernameFormSchema = z.object({
  username: z.string().min(3, "Username is too short"),
});
export interface IUsernameForm extends z.infer<typeof usernameFormSchema> {}
