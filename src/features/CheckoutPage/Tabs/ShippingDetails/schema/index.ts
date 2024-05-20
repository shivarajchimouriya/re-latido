import * as z from 'zod';

export const formSchema = z.object({
    fullName: z.string(),
    phone: z.number(),
    country: z.number(),
    city: z.number(),
    address: z.number(),
    landmark: z.number(),
});

export type IForm = z.infer<typeof formSchema>;