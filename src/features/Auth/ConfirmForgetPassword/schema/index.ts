import { z } from "zod";

export const confirmForgetPasswordSchema = z.object({
    pin: z.string().min(6, 'enter full code'),
    new_password: z.string().min(3, "password is tooo short"),
    confirm_new_password: z.string().min(3, ''),
}).refine((data) => data.new_password === data.confirm_new_password,
    {
        message: "passwords do not match",
        path: ["confirm_new_password"]
    }

)
export interface IConfirmForgetPasswordForm extends z.infer<typeof confirmForgetPasswordSchema> { }