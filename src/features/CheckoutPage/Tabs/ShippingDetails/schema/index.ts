import * as z from 'zod';

export const formSchema = z.object({
    fullName: z.string().min(1, "Enter full name"),
    phone: z.string().min(4, "Number is to short"),
    country: z.string().min(1, "Country name is required"),
    city: z.string().min(1, "City is required"),
    address: z.string().min(1, "Address is required"),
    landmark: z.string().min(1, "Landmark is required"),
});

export type IForm = z.infer<typeof formSchema>;