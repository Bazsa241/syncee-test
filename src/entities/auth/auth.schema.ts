import { z } from 'zod';

const passwordSchema = z
  .string()
  .min(5, 'Password must be at least 5 characters long')
  .regex(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9])/,
    'Password must contain letters (upper/lowercase), numbers, and special characters',
  );

const emailSchema = z.email('Please enter a valid email address');

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const registerSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
