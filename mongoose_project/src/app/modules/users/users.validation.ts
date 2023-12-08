import { z } from 'zod';

const usersValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'password must be a string',
    })
    .max(20, { message: 'password cannot be more than 20' })
    .optional(),
});

export const userValidation = { usersValidationSchema };
