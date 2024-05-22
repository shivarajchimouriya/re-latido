import { z } from "zod";

export const editFormSchema = z.object({
    name: z.string(),
    dob: z.string(),
    gender: z.enum(['male', 'female']),
    address: z.string(),
    phone: z.string().min(8, "must be at least 8 letters"),
    email: z.string().email()

});

export interface IEditForm extends z.infer<typeof editFormSchema> { }