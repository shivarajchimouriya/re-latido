import { z } from 'zod';

export const signupSchema = z.object({
    full_name: z.string().min(1, 'Full name is required'),
    address: z.string().min(1, 'Address is required'),
    gender: z.enum(['male', 'female', 'other']).default('male'),
    date_of_birth: z.string().min(1, 'Date of birth is required'),
    phone_number: z.string().min(1, 'Phone number is required'),
    email: z.string().email('Invalid email address'),
});

export interface ISignupForm extends z.infer<typeof signupSchema> { }