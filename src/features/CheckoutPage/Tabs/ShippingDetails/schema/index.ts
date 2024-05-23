import * as z from 'zod';

export const formSchema = z.object({
    fullName: z.string(),
    phone: z.string(),
    country: z.string(),
    city: z.string(),
    address: z.string(),
    landmark: z.string(),
});

export type IForm = z.infer<typeof formSchema>;