import { z } from "zod";

export const editFormSchema = z.object({
    name: z.string().min(1, "Name is required!!"),
    dob: z.string(),
    gender: z.enum(['Male', 'Female']),
    address: z.string().min(1, "Address is required!!"),
    phone: z.string().min(8, "Must be at least 8 letters"),
    email: z.string().email()

});

export interface IEditForm extends z.infer<typeof editFormSchema> { }