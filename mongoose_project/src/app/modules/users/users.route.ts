import express from 'express';
import checkValidation from '../../middleware/checkValidation';
import { studentZodValidationSchemas } from '../students/student.zod.validation';
import { UserController } from './users.controller';

const router = express.Router();

// call controller function
router.post(
  '/create-student',
  checkValidation(studentZodValidationSchemas.createStudentZodValidationSchema),
  UserController.createStudent,
);
export const UsersRoutes = router;
