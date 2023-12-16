import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import checkValidation from '../../middleware/checkValidation';
import { academicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  checkValidation(academicSemesterValidation.CreateAcademicSemesterSchema),
  AcademicSemesterController.createAcademicSemester,
);

// call controller function
// router.post(
//   '/create-student',
//   checkValidation(studentZodValidationSchemas.createStudentZodValidationSchema),
//   UserController.createStudent,
// );
export const AcademicSemesterRoutes = router;
