import { z } from 'zod';

export const signupSchema = z.object({
    full_name: z.string().min(2, 'full name is too short'),
    address: z.string().min(1, 'Address is required'),
    gender: z.enum(['male', 'female', 'other']).default('male'),
    date_of_birth: z.string().min(1, 'Date of birth is required'),
    phone_number: z.string().min(1, 'Phone number is required'),
    email: z.string().email('Invalid email address'),
    password: z.string(),
    confirm_password: z.string()
}).refine((data) => data.password === data.confirm_password, { message: "two passwords do not match", path: ["confirm_password"] });

export interface ISignupForm extends z.infer<typeof signupSchema> { }