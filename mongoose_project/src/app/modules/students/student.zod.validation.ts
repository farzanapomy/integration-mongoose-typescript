import { z } from 'zod';
const userNameZodValidationSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string().optional(),
  lastName: z.string().min(1).max(20),
});

const guardianZodValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

const localGuardianZodValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

const studentZodValidationSchema = z.object({
  id: z.string(),
  name: userNameZodValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().optional(),
  email: z.string().email(),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloogGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string(),
  permanentAddres: z.string(),
  guardian: guardianZodValidationSchema,
  localGuardian: localGuardianZodValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
});

export default studentZodValidationSchema;
;