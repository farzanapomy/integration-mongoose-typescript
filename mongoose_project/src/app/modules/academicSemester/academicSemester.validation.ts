import { z } from 'zod';
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const CreateAcademicSemesterSchema = z.object({
  body: z.object({
    name: z.enum().min(1).max(255).required(),
    year: z
      .date()
      .refine((date) => !isNaN(date.getTime()), {
        message: 'Year must be a valid date.',
      })
      .required('Year is required'),
    code: z.string().min(1).max(50).required(),
    startMonth: z.string().enum(months).required(),
    endMonth: z.string().enum(months).required(),
  }),
});

export const academicSemesterValidation = { CreateAcademicSemesterSchema };
