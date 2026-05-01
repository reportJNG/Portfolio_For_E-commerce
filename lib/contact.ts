import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name.').max(80),
  email: z.string().email('Please enter a valid email address.').max(120),
  message: z.string().min(20, 'Please share at least 20 characters.').max(2000)
});

export type ContactPayload = z.infer<typeof contactSchema>;
