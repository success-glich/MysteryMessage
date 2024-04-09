import {z} from 'zod';

export const usernameValidation = z
        .string()
        .min(2,"Username must be at least 2 characters")
        .max(20, "Username must be no more than 20 characters")
        .regex(/^[a-zA-Z0-9]+$/, "Username must only contain letters and numbers");


export const SignupSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:'invalid email address'}),
    password:z.string().min(6, {message:"Password must be at least 6 characters"}).max(20, "Password must be no more than 20 characters")
})